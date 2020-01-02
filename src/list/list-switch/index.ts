// list-switch必须是受控的
Component({
  props: {
    className: '',
    align: false,
    disabled: false,
    multipleLine: false,
    wrap: false,
    value: false,
    disable: false,
    lineTouchable: false, // 是否可以点击整行互动
    index: undefined,
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
    onChange() {
      const { onClick, disabled, value, index } = this.props;
      if (onClick && !disabled) {
        onClick({
          index,
          target: { dataset: this.dataset },
          detail: { value: !value },
        });
      }
    },
    onItemTap() {
      this.onChange();
    },
    onTapLine() {
      if (this.props.lineTouchable) {
        this.onChange();
      }
    },
  },
});
