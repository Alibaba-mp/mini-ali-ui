import fmtUnit from '../_util/fmtUnit';

const { windowWidth } = my.getSystemInfoSync();

Component({
  props: {
    className: '',
    // tabbar激活的 tab 样式 class
    activeCls: '',
    // tabbar的自定义样式class
    tabBarCls: '',
    // 选中选项卡下划线颜色
    tabBarUnderlineColor: '#1677FF',
    // 选中选项卡字体颜色
    tabBarActiveTextColor: '#1677FF',
    // 胶囊选中选项卡字体颜色
    capsuleTabBarActiveTextColor: '#ffffff',
    // 未选中选项卡字体颜色
    tabBarInactiveTextColor: '#333333',
    // 未选中描述字体颜色
    tabBarSubTextColor: '#999999',
    // 选中描述字体颜色
    tabBarActiveSubTextColor: '#ffffff',
    // 选项卡背景颜色
    tabBarBackgroundColor: '#ffffff',
    showPlus: false,
    // tabs 内容区是否可拖动，true 可拖动，内容区固定高度 false 不可拖动，内容区自适应高度
    swipeable: true,
    // 当前激活tab id
    activeTab: 0,
    animation: true,
    duration: 500,
    // 是否为胶囊形式 tab
    capsule: false,
    // 是否有副标题
    hasSubTitle: false,
    elevator: false,
    floorNumber: [],
  },
  data: {
    windowWidth,
    tabWidth: 0.25,
    autoplay: false,
    animation: false,
    showLeftShadow: false,
    version: my.SDKVersion,
    viewScrollLeft: 0,
    tabViewNum: 0,
    hideRightShadow: false,
    boxWidth: 0,
    elWidth: 0,
    tabFontSize15: fmtUnit('15px'),
    tabFontSize13: fmtUnit('13px'),
  },
  didMount() {
    const { tabs, animation, hasSubTitle, elevator } = this.props;

    if (hasSubTitle) {
      this.setData({
        capsule: true,
      });
    }
    this.setData({
      tabWidth: tabs.length > 3 ? 0.25 : 1 / tabs.length,
      animation,
      autoplay: true,
    });
    if (elevator) {
      this.setData({
        swipeable: false,
      });
      for (let i = 0; i < tabs.length; i++) {
        my.createSelectorQuery()
          .select(`#am-tabs-elevator-pane-${i}`)
          .boundingClientRect()
          .exec((ret) => {
            this.props.floorNumber[i] = ((<my.IBoundingClientRect>ret[0]).top);
            this.setData({
              floorNumber: this.props.floorNumber,
            });
          });
      }
      setTimeout(() => {
        this.$page.data.floorNumber = this.data.floorNumber;
      }, 100);
    }
  },
  didUpdate(prevProps, prevData) {
    const { tabs, elevator } = this.props;
    if (prevProps.tabs.length !== tabs.length) {
      this.setData({
        tabWidth: tabs.length > 3 ? 0.25 : 1 / tabs.length,
      });
    }
    if (elevator) {
      this.$page.data.floorNumber = this.data.floorNumber;
      if (this.$page.data.getFloorNumber >= 0) {
        this.setData({
          tabViewNum: this.$page.data.getFloorNumber,
          prevTabViewNum: prevData.tabViewNum,
        });
      }
    }
  },
  methods: {
    handleSwiperChange(e) {
      const { current } = e.detail;
      const { tabsName } = e.target.dataset;

      this.setData({
        tabViewNum: current,
      });

      if (this.props.onChange) {
        this.props.onChange({ index: current, tabsName });
      }
    },
    handleTabClick(e) {
      const { index, tabsName, floor } = e.target.dataset;
      let boxWidth = 0;
      let elWidth = 0;

      my.createSelectorQuery()
        .select(`#${e.currentTarget.id}`)
        .boundingClientRect()
        .exec((ret) => {
          elWidth = (<my.IBoundingClientRect>ret[0]).width;
          this.setData({
            elWidth,
          });
        });
      my.createSelectorQuery()
        .select(`#am-tabs-bar-${tabsName}-content`)
        .boundingClientRect()
        .exec((ret) => {
          boxWidth = (<my.IBoundingClientRect>ret[0]).width;
          this.setData({
            boxWidth,
          });
          if (this.data.elWidth > this.data.boxWidth / 2) {
            setTimeout(() => {
              this.setData({
                viewScrollLeft: e.currentTarget.offsetLeft - 40,
              });
            }, 300);
          } else {
            setTimeout(() => {
              this.setData({
                viewScrollLeft: e.currentTarget.offsetLeft - Math.floor(this.data.boxWidth / 2),
              });
            }, 300);
          }
        });
      if (this.props.onTabClick) {
        this.props.onTabClick({ index, tabsName });
      }
      if (this.props.onTabClick && this.props.elevator) {
        this.setData({
          tabViewNum: this.data.prevTabViewNum,
        });
        setTimeout(() => {
          this.props.onTabClick({ index, tabsName });
        }, 300);
        my.pageScrollTo({
          scrollTop: parseInt(floor),
          duration: 300,
        });
      }
    },
    handlePlusClick() {
      if (this.props.onPlusClick) {
        this.props.onPlusClick();
      }
    },
    showLeftShadow(e) {
      if (e.detail.scrollLeft > 0) {
        this.setData({
          showLeftShadow: true,
        });
      } else {
        this.setData({
          showLeftShadow: false,
        });
      }
    },
  },
});
