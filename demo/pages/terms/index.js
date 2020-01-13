const cfg = {
  c1: {
    related: false,
    agreeBtn: {
      title: '同意协议并开通',
      type: 'primary',
      data: 'btn1',
    },
    cancelBtn: {
      title: '暂不开通，仅手动缴费',
      data: 'btn2',
    },
    hasDesc: false,
  },
  c2: {
    related: false,
    agreeBtn: {
      title: '同意协议并开通',
      type: 'primary',
    },
    hasDesc: true,
  },
  c3: {
    related: true,
    agreeBtn: {
      checked: true,
      title: '提交',
    },
  },
  c4: {
    related: true,
    agreeBtn: {
      title: '提交',
      type: 'primary',
    },
  },
  c5: {
    related: false,
    agreeBtn: {
      title: '同意协议并提交',
      type: 'primary',
    },
  },
  c6: {
    related: true,
    fixed: true,
    agreeBtn: {
      checked: true,
      title: '提交',
      type: 'primary',
    },
  },
};


Page({
  data: cfg,
  onLoad() {
  },
  onSelect(e) {
    const selectedData = e.currentTarget.dataset.name || '';
    selectedData && my.alert({
      title: selectedData,
    });
  },

});
