Component({
  props: {
    alphabet: [],
  },
  data: {
    current: -1,
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
      const { onClick, disabled } = this.props;

      if (onClick && !disabled) {
        onClick({
          data: ev.target.dataset,
          target: { dataset: this.dataset },
        });
      }
    },
    onTouchStart(ev) {
      const { disabled } = this.props;
      if (!disabled) {
        this.setData({
          current: ev.target.dataset.index,
        });
      }
    },
    onTouchEnd() {
      this.setData({
        current: -1,
      });
    },
  },
});
