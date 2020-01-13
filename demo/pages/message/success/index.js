Page({
  data: {
    title: '操作成功',
    subTitle: '内容详情可折行，建议不超过两内容详情可折行，建议不超过两行',
    type: 'success',
    items: [
      { name: 'success', value: 'success', checked: true },
      { name: 'fail', value: 'fail' },
      { name: 'info', value: 'info' },
      { name: 'warn', value: 'warn' },
      { name: 'waiting', value: 'waiting' },
    ],
  },
  onLoad() {
  },
  goBack() {
    my.navigateBack();
  },
  radioChange(e) {
    this.setData({
      type: e.detail.value,
    });
  },
});
