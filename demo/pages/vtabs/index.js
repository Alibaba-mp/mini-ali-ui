Page({
  data: {
    activeTab: 2,
    swipeable: true,
    tabs: [
      { title: '选项二', anchor: 'a', number: '6' },
      { title: '选项', anchor: 'b', number: '66' },
      { title: '不超过五字', anchor: 'c', number: '99+' },
      { title: '选项四选项四选项四选项四', anchor: 'd' },
      { title: '选项五', anchor: 'e' },
      { title: '选项六', anchor: 'f' },
    ],
    tabItemHeight: 50,
  },
  handleChange(index) {
    this.setData({
      activeTab: index,
    });
  },
  onChange(index) {
    this.setData({
      activeTab: index,
    });
  },
  changeHeight() {
    this.setData({
      tabItemHeight: this.data.tabItemHeight + 5,
    });
  },
  changeSwipeable() {
    this.setData({
      swipeable: !this.data.swipeable,
    });
  },
});
