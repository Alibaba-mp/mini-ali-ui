Page({
  data: {
    show: true,
    items: [
      { id: 1, value: '衣服', rows: 2, subtitle: '子标题', selected: true },
      { id: 1, value: '橱柜', rows: 2, subtitle: '子标题' },
    ],
  },
  handleCallBack(data) {
    my.alert({
      content: data,
    });
  },
  toggleFilter() {
    this.setData({
      show: !this.data.show,
    });
  },
});
