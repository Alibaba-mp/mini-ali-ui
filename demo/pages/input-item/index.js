
Page({
  data: {
    cardNo: '1234****',
    name: '',
  },
  onExtraTap() {
    my.alert({
      content: 'extra tapped',
    });
  },
  onItemInput(e) {
    this.setData({
      [e.target.dataset.field]: e.detail.value,
    });
  },
  onItemFocus(e) {
    this.setData({
      [e.target.dataset.name]: true,
    });
  },
  onItemBlur(e) {
    this.setData({
      [e.target.dataset.name]: false,
    });
  },
  onItemConfirm() {},
  onClear(e) {
    this.setData({
      [e.target.dataset.field]: '',
    });
  },
  onSend() {
    my.alert({
      title: 'verify code sent',
    });
  },
});
