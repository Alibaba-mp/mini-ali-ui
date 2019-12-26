Page({
  data: {
    type: 'market',
    // show: false,
    // maskZindex: 10,
  },
  maskClick() {
    if (this.data.type === 'market') {
      this.setData({
        type: 'product',
      });
    } else {
      this.setData({
        type: 'market',
        show: false,
      });
    }
  },
});
