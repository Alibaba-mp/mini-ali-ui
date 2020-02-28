Page({
  data: {},
  onLoad() {},
  setInfo(e) {
    const { dataset } = e.target;
    const { name } = dataset;
    this.setData({
      [name]: e.detail.value,
    });
  },
});
