Page({
  data: {
    footer: [{
      text: '3秒后重新刷新',
      disabled: true,
    }],
  },
  onLoad() {
    setTimeout(() => {
      this.setData({
        footer: [{ disabled: false, text: '刷新' }],
      });
    }, 3000);
  },
});
