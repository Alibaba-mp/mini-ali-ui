Page({
  data: {
    closeShow: true,
    closeActionShow: true,
    marqueeProps: {
      loop: true,
      leading: 1000,
      trailing: 800,
      fps: 40,
    },
    type: [
      { name: 'normal', value: 'normal', checked: true },
      { name: 'error', value: 'error' },
      { name: 'active', value: 'active' },
    ],
    noticeType: 'normal',
    mode: [
      { name: '', value: '无', checked: true },
      { name: 'link', value: '箭头' },
      { name: 'closable', value: '关闭' },
    ],
    noticeMode: '',
    actionText: '',
    actionLeftText: '',
  },
  getContent(e) {
    this.setData({
      noticeContent: e.detail.value,
    });
  },
  typeChange(e) {
    this.setData({
      noticeType: e.detail.value,
    });
  },
  modeChange(e) {
    this.setData({
      noticeMode: e.detail.value,
    });
    if (e.detail.value !== '') {
      this.setData({
        actionText: '',
      });
    } else {
      this.setData({
        actionText: '',
        actionLeftText: '',
      });
    }
  },
  getRightText(e) {
    this.setData({
      actionText: e.detail.value,
    });
  },
  getLeftText(e) {
    this.setData({
      actionLeftText: e.detail.value,
    });
  },
  linkActionClick() {
    my.showToast({
      content: '左侧操作区被点击了',
      duration: 1000,
    });
  },
  actionClick() {
    my.showToast({
      content: '你点击了右侧操作区',
      duration: 1000,
    });
  },
});
