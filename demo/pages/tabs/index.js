Page({
  data: {
    tabs: [
      {
        title: '选项',
        subTitle: '描述文案',
        badgeType: 'text',
        badgeText: '99+',
      },
      {
        title: '选项二',
        subTitle: '描述文案描述文案描述文案',
        badgeType: 'dot',
      },
      {
        title: '3 Tab',
        subTitle: '描述文案',
      },
      { title: '4 Tab' },
      { title: '5 Tab' },
      { title: '3 Tab' },
      { title: '4 Tab' },
      { title: '15 Tab' },
    ],
    activeTab: 0,
  },
  handleTabClick({ index }) {
    this.setData({
      activeTab: index,
    });
  },
  handleTabChange({ index }) {
    this.setData({
      activeTab: index,
    });
  },
  handlePlusClick() {
    my.alert({
      content: 'plus clicked',
    });
  },
});
