Component({
  props: {
    className: '',
    align: false,
    disabled: false,
    multipleLine: false,
    wrap: false,
    // type: 'normal', // 'normal' | 'capsule' | 'primary'
    enforceExtra: false,
    titlePosition: 'top',
  },
  didMount() {
    this._updateDataSet();
    const { title = '', upperSubtitle = '', lowerSubtitle = '' } = this.props;
    const thumbPlaceholder =
      title.slice(0, 1) + upperSubtitle.slice(0, 1) + lowerSubtitle.slice(0, 1);
    this.setData({
      thumbPlaceholder,
    });
  },
  didUpdate() {
    this._updateDataSet();
  },
  methods: {
    _updateDataSet() {
      this.dataset = {};
      for (const key in this.props) {
        if (/data-/gi.test(key)) {
          this.dataset[key.replace(/data-/gi, '')] = this.props[key];
        }
      }
    },
    onItemTap(ev) {
      const { onClick, disabled } = this.props;
      if (onClick && !disabled) {
        onClick({
          index: ev.target.dataset.index,
          target: { dataset: this.dataset },
        });
      }
    },
  },
});
