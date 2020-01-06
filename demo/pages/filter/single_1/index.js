Page({
  data: {
    show: true,
    items: [
      { id: 1, value: '衣服', rows: 3, selected: true },
      { id: 1, value: '橱柜', rows: 3 },
      { id: 1, value: '衣服', rows: 3 },
      { id: 1, value: '橱柜', rows: 3 },
      { id: 1, value: '衣服', rows: 3 },
      { id: 1, value: '橱柜', rows: 3 },
      { id: 1, value: '衣服', rows: 3 },
      { id: 1, value: '橱柜', rows: 3 },
      { id: 1, value: '橱柜', rows: 3 },
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
