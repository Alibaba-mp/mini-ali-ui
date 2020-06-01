Page({
  data: {
    content: '我知道了(2秒后消失)',
    time: 2000,
  },
  onClose() {
    my.alert({
      title: '主动关闭 tips',
    });
  },
  onTimeOut() {
    my.alert({
      title: '时间到了，关闭 tips',
    });
  },
});
