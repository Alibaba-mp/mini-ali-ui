Component({
  props: {
    fixed: false,
    related: true,
    onChange: () => {},
    agreeBtn: {
      title: '',
      subtitle: '',
      type: 'primary',
      data: 1,
      checked: false,
    },
    cancelBtn: {
      title: '',
      subtitle: '',
      type: 'default',
      data: 2,
    },
    capsuleSize: 'large',
    shape: 'default',
    capsuleMinWidth: false,
    hasDesc: false,
  },
  data: {
    showBtn: true,
    cls: '',
    status: 0,
  },
  didMount() {
    const { agreeBtn, related } = this.props;
    if ((agreeBtn.checked && related) || !related) {
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
