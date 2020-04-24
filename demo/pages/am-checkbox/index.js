Page({
  data: {
    items: [
      { defaultChecked: true, disabled: false, value: 'a', title: '复选框-默认选中', id: 'checkbox1' },
      { defaultChecked: true, disabled: true, value: 'b', title: '复选框-默认选中disabled', id: 'checkbox2' },
    ],
    items1: [
      { checked: false, disabled: false, value: 'c', title: '复选框-默认未选中', id: 'checkbox3' },
      { checked: false, disabled: true, value: 'd', title: '复选框-默认未选中disabled', id: 'checkbox4' },
    ],
  },
  onSubmit(e) {
    my.alert({
      content: `你选择的框架是 ${e.detail.value.libs.join(', ')}`,
    });
  },
  onReset() {},
  onChange(e) {
    const { id } = e.currentTarget.dataset;
    const { value } = e.detail;
    const { items1 } = this.data;
    items1.forEach((element) => {
      if (element.id === id) {
        // eslint-disable-next-line no-param-reassign
        element.checked = value;
      }
    });
    this.setData(
      items1,
    );
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
      element.checked = status;
    });
    this.setData(
      items1,
    );
  },
});
