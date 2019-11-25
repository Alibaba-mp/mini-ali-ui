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
    // 未选中选项卡字体颜色
    tabBarInactiveTextColor: '#333333',
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
    showLeftShadow: false,
    showRightSadhow: true,
  },
  data: {
    windowWidth,
    tabWidth: 0.25,
    autoplay: false,
    animation: false,
    version: my.SDKVersion,
  },
  didMount() {
    const { tabs, animation } = this.props;
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

      if (this.props.onChange) {
        this.props.onChange({ index: current });
      }
    },
    handleTabClick(e) {
      const { index } = e.target.dataset;

      if (this.props.onTabClick) {
        this.props.onTabClick({ index });
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
    scrollDown() {
      this.setData({
        showRightSadhow: false,
      });
    },
  },
});
