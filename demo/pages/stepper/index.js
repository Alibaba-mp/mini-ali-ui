Page({
  data: {
    value: 8,
  },
  callBackFn(value, mode) {
    console.log(value, mode);
  },
  modifyValue() {
    this.setData({
      value: 9,
    });
  },
});
