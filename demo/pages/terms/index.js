const cfg = {
  c1: {
    related: false,
    agreeBtnTitle: '同意协议并开通',
    cancelBtnTitle: '暂不开通，仅手动缴费',
    hasDesc: false,
  },
  c2: {
    related: false,
    agreeBtnTitle: '同意协议并开通',
    hasDesc: true,
  },
  c3: {
    related: true,
    agreeBtnChecked: true,
    agreeBtnTitle: '提交',
  },
  c4: {
    related: true,
    agreeBtnTitle: '提交',
  },
  c5: {
    related: false,
    agreeBtnTitle: '同意协议并提交',
  },
  c6: {
    related: true,
    fixed: true,
    agreeBtnChecked: true,
    agreeBtnTitle: '提交',
  },
};


Page({
  data: cfg,
  onLoad() {
  },
  onSelect() {
    // e.currentTarget.dataset.name
  },

});
