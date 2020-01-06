Component({
  props: {
    fixed: false,
    related: true,
    onChange: () => {},
    agreeBtnTitle: '',
    cancelBtnTitle: '',
    agreeBtnSubtitle: '',
    cancelBtnSubtitle: '',
    agreeBtnType: 'primary',
    agreeBtnChecked: false,
    cancelBtnType: 'default',
    capsuleSize: 'large',
    shape: 'default',
    capsuleMinWidth: false,
    agreeBtnData: '1',
    cancelBtnData: '2',
    hasDesc: false,
  },
  data: {
    showBtn: true,
    cls: '',
    status: 0,
  },
  didMount() {
    const { agreeBtnChecked, related } = this.props;
    if ((agreeBtnChecked && related) || !related) {
      this.setData({ showBtn: false, cls: 'switch', status: 1 });
    } else {
      this.setData({ showBtn: true, cls: '', status: 0 });
    }
  },
  methods: {
    onTap(e) {
      const { onSelect } = this.props;
      onSelect && onSelect(e);
    },
    onChange() {
      const { related } = this.props;
      const id = this.data.status;

      if (related && !id) {
        this.setData({ showBtn: false, cls: 'switch', status: 1 });
      } else {
        this.setData({ showBtn: true, cls: '', status: 0 });
      }
    },
  },
});
