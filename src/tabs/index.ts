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
    tabsName: '',
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
  },
  didMount() {
    const { tabs, animation, hasSubTitle } = this.props;
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
  },
  didUpdate(prevProps) {
    const { tabs } = this.props;
    if (prevProps.tabs.length !== tabs.length) {
      this.setData({
        tabWidth: tabs.length > 3 ? 0.25 : 1 / tabs.length,
      });
    }
  },
  methods: {
    handleSwiperChange(e) {
      const { current } = e.detail;

      this.setData({
        tabViewNum: current,
      });

      if (this.props.onChange) {
        this.props.onChange({ index: current });
      }
    },
    handleTabClick(e) {
      // console.log(e, e.currentTarget.id, e.currentTarget.offsetLeft, e.detail.pageX, e.detail.clientX)
      const { index, tabsName } = e.target.dataset;

      my.createSelectorQuery()
        .select(`#${e.currentTarget.id}`)
        .boundingClientRect()
        .exec((ret) => {
          // console.log(<my.IBoundingClientRect>ret[0])
          this.wrapWidth = (<my.IBoundingClientRect>ret[0]).width;
        });
      my.createSelectorQuery()
        .select('.am-tabs-bar-content')
        .boundingClientRect()
        .exec((ret) => {
          // console.log(ret[0])
          this.wrapWidth = (<my.IBoundingClientRect>ret[0]).width;
        });

      // if(e.currentTarget.offsetLeft > e.detail.clientX / 2) {
      //   // console.warn("👉", e.currentTarget.offsetLeft - Math.floor(e.detail.clientX)/2)
      //   // this.setData({
      //   //   viewScrollLeft: e.currentTarget.offsetLeft - Math.floor(e.detail.clientX)/2,
      //   // });
      // }else{
      //   this.setData({
      //     viewScrollLeft: 0,
      //   });
      // }

      this.setData({
        viewScrollLeft: e.currentTarget.offsetLeft,
      });

      if (this.props.onTabClick) {
        this.props.onTabClick({ index, tabsName });
      }
    },
    handlePlusClick() {
      if (this.props.onPlusClick) {
        this.props.onPlusClick();
      }
    },
    showLeftShadow(e) {
      // console.log("🔥", e.detail.scrollLeft)
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
