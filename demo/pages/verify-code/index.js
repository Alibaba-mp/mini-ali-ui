Page({
  data: {
    cardNo: '1234****',
    inputFocus: true,
    bank: '',
    name: '',
  },
  onSend() {
    my.alert({
      title: 'verify code sent',
    });
  },
});
