import fmtUnit from '../_util/fmtUnit';

Component({
  data: {
    tabTop: 0,
    wrapScrollTop: 0,
    besideRadius: fmtUnit('8px'),
  },
  props: {
    activeTab: 0,
    className: '',
    tabs: [],
    animated: false,
    swipeable: true,
    tabBarActiveTextColor: '#1677FF',
    tabBarInactiveTextColor: '#333333',
    tabBarActiveBgColor: '#ffffff',
    tabBarInactiveBgColor: '#f5f5f5',
    tabBarlineColor: '#1677FF',
    sameFontSize: true,
    tabBarlineShow: true,
    onTabClick: () => { },
    onScrollBar: () => { },
  },
  async didMount() {
    this.isScrolling = false;
    this.onlyChangeTab = false;
    this.timerId = null;
    await this.calcHeight();
    this.setData({
      wrapScrollTop: { _v: this.anchorMap[this.props.tabs[this.props.activeTab].anchor] },
    });
  },
  didUpdate(prevProps) {
    const { activeTab } = this.props;
    if (this.props.tabs.length !== prevProps.tabs.length || activeTab !== prevProps.activeTab) {
      this.calcHeight();
    }
  },
  didUnmount() {
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  },
  methods: {
    async onWrapTouch() {
      await this.calcHeight();
    },
    async calcHeight() {
      const { activeTab } = this.props;
      this.anchorMap = {};
      this.indexMap = {};
      this.indexTop = {};
      this.wrapHeight = 0;
      this.scrollWrapHeight = 0;

      this.setData({
        currentBefore: activeTab - 1,
        currentAfter: activeTab + 1,
      });

      await new Promise((resolve) => {
        my.createSelectorQuery()
          .select(`.am-vtabs-slides-${this.$id}`)
          .boundingClientRect()
          .exec((ret) => {
            this.wrapHeight = (<my.IBoundingClientRect>ret[0]).height;
            resolve();
          });
      });

      const tabs = this.props.tabs || [];
      const rects = await new Promise((resolve) => {
        my.createSelectorQuery()
          .selectAll(
            tabs.map(tab => `#am-vtab-slide-${tab.anchor}`).join(',')
          )
          .boundingClientRect()
          .exec(res => resolve((res[0] as any).sort((a, b) => a.top - b.top)));
      });

      let prevHeight = 0;
      for (let i = 0; i < tabs.length; i += 1) {
        const { height } = rects[i];
        this.anchorMap[tabs[i].anchor] = prevHeight;
        this.indexMap[i] = height;

        if (i === 0) {
          this.indexTop[0] = 0;
        } else {
          this.indexTop[i] = this.indexTop[i - 1] + Math.floor((<my.IBoundingClientRect>rects[i - 1])?.height);
        }

        prevHeight += Math.floor(height);
        this.scrollWrapHeight = prevHeight;
      }
    },
    handleTabClick(e) {
      const { index } = e.target.dataset;

      if (!this.isScrolling || !this.props.swipeable || this.onlyChangeTab) {
        if (this.props.activeTab !== index) {
          this.props.onTabClick(index);
        }
        this.setData({
          wrapScrollTop: { _v: this.indexTop[index] },
        });
        this.moveScrollBar(index);
      }
    },
    moveScrollBar(current) {
      let tabTop;
      // tabTop 用来控制侧边 tab 的 scroll-view 滚动位置
      if (current < 6) {
        tabTop = 0;
      } else {
        tabTop = (current - 5) * 55;
      }
      // tab-content 滚动时，对侧边 tab 的影响
      if (this.props.activeTab !== current) {
        if (this.props.onChange) {
          this.props.onChange(current);
        } else {
          this.props.onScrollBar(current);
        }
      }
      this.setData({
        tabTop,
        current,
        currentBefore: current - 1,
        currentAfter: current + 1,
      });
    },
    onScroll(e) {
      const { scrollTop } = e.detail;
      const keys = Object.keys(this.anchorMap);

      if (this.timerId) {
        clearTimeout(this.timerId);
        this.timerId = null;
      }

      this.timerId = setTimeout(() => {
        this.isScrolling = false;
      }, 300);

      const anchorLength = keys.length;
      for (let i = 0; i < anchorLength; i++) {
        if (i === anchorLength - 1) {
          // 如果是最后一个只需满足scrollTop高于当前vtab-content的高度
          if (scrollTop >= this.anchorMap[keys[i]]) {
            this.moveScrollBar(i);
            break;
          }
        }
        if (scrollTop >= this.anchorMap[keys[i]] &&
          scrollTop < this.anchorMap[keys[i + 1]]) {
          // 如果每个vtab-content高度小于scroll-view高度，到达底部后就不需要根据scrollTop再去判断左侧的选择项
          if (scrollTop + this.wrapHeight < this.scrollWrapHeight) {
            this.moveScrollBar(i);
          }
          break;
        }
      }
    },
    onWrapTouchMove() {
      if (this.props.swipeable) {
        this.isScrolling = true;
        this.onlyChangeTab = true;
      }
    },
    onTabFirstShow(e) {
      // SDKversion 最低要求 1.9.4
      const { index, anchor } = e.target.dataset;
      if (this.props.onTabFirstShow) {
        this.props.onTabFirstShow({ index, anchor });
      }
    },
  },
});
