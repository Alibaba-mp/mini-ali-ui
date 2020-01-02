// 必须是受控的
Component({
  props: {
    className: '',
    align: false,
    disabled: false,
    multipleLine: false,
    wrap: false,
  },
  didMount() {
    this._updateDataSet();
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
      const { onClick, disabled, value } = this.props;
      if (onClick && !disabled) {
        onClick({
          index: ev.target.dataset.index,
          target: { dataset: this.dataset },
          detail: {
            // ...(value !== undefined ? { value: !value } : {}),
            value: !value,
          },
        });
      }
    },
  },
});
