Component({
  props: {
    fixed: false,
    related: true,
    capsuleSize: 'large',
    shape: 'default',
    agreeBtn: null,
    cancelBtn: null,
    capsuleMinWidth: false,
    hasDesc: false,
  },
  data: {
    disabled: false,
    status: 0,
    agreeBtnAttr: {},
    cancelBtnAttr: {},
  },
  didMount() {
    const { agreeBtn, cancelBtn, related } = this.props;
    const agreeBtnCfg = agreeBtn ? Object.assign({
      title: '',
      subtitle: '',
      type: 'primary',
      data: 1,
      checked: false,
    }, agreeBtn) : {};
    const cancelBtnCfg = cancelBtn ? Object.assign({
      title: '',
      subtitle: '',
      type: 'default',
      data: 2,
    }, cancelBtn) : {};
    if ((agreeBtnCfg.checked && related) || !related) {
      this.setData({
        disabled: false,
        status: true,
        agreeBtnAttr: agreeBtnCfg,
        cancelBtnAttr: cancelBtnCfg,
      });
    } else {
      this.setData({
        disabled: true,
        status: false,
        agreeBtnAttr: agreeBtnCfg,
        cancelBtnAttr: cancelBtnCfg,
      });
    }
  },
  methods: {
    onTap(e) {
      const { onSelect } = this.props;
      onSelect && onSelect(e);
    },
    onChange(e) {
      const { related } = this.props;
      const isSeleted = e.detail.value;

      if (related && isSeleted) {
        this.setData({ disabled: false, status: true });
      } else {
        this.setData({ disabled: true, status: false });
      }
    },
  },
});
