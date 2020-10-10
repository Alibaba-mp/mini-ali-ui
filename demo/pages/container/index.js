Page({
  data: {},
  onLoad() {},
  titleClick() {
    my.alert({
      title: 'onActionTap 回调',
      content: '标题后面操作区域点击',
    });
  },
});
