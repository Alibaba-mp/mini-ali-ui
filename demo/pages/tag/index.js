Page({
  data: {},
  onLoad() {},
  titleGo() {
    my.showToast({
      content: '点击箭头，可设置跳转',
    });
  },
  titleMore() {
    my.showToast({
      content: '点击更多，展开气泡菜单',
    });
  },
  titleClose() {
    my.showToast({
      content: '点击关闭，可设置关闭',
    });
  },
  setInfo(e) {
    const { dataset } = e.target;
    const { name } = dataset;
    console.log(e.detail.value);
    this.setData({
      [name]: e.detail.value,
    });
  },
});
