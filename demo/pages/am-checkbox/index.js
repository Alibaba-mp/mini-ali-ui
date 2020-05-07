Page({
  data: {
    items: [
      { value: 'a', title: '复选框-默认未选中', id: 'checkbox1' },
      { checked: true, value: 'b', title: '复选框-默认选中', id: 'checkbox2' },
      { checked: true, disabled: true, value: 'c', title: '复选框-默认选中disabled', id: 'checkbox3' },
    ],
    items1: [
      { ctrlChecked: false, disabled: false, value: 'd', title: '复选框-默认未选中', id: 'checkbox4' },
      { ctrlChecked: true, disabled: true, value: 'e', title: '复选框-默认未选中disabled', id: 'checkbox5' },
      { ctrlChecked: true, value: 'f', title: '复选框-默认选中', id: 'checkbox6' },
    ],
  },
  onChange(e) {
    const { id } = e.currentTarget.dataset;
    const { value } = e.detail;
    const { items1 } = this.data;
    items1.forEach((element) => {
      if (element.id === id) {
        // eslint-disable-next-line no-param-reassign
        element.ctrlChecked = value;
      }
    });
    this.setData({
      items1,
    });
  },
  // 全选
  checkedON() {
    this.checkedAll(true);
  },
  // 全不选
  checkedOFF() {
    this.checkedAll(false);
  },
  checkedAll(status) {
    const { items1 } = this.data;
    items1.forEach((element) => {
      // eslint-disable-next-line no-param-reassign
      element.ctrlChecked = status;
    });
    this.setData({
      items1,
    });
  },
});
