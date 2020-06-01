Component({
  data: {
    show: true,
  },
  props: {
    className: '',
    time: 5000,
    onClose: () => {},
    onTimeOut: () => {},
  },
  didMount() {
    const { time } = this.props;
    this._timer = setTimeout(() => {
      this.setData({
        show: false,
      });
      this.onTimeOut();
    }, time);
  },
  didUnmount() {
    clearTimeout(this._timer);
  },
  methods: {
    onClose() {
      this.setData({
        show: false,
      });
      clearTimeout(this._timer);
      this.props.onClose();
    },
    onTimeOut() {
      if (this.props.onTimeOut && typeof this.props.onTimeOut === 'function') {
        this.props.onTimeOut();
      }
    },
  },
});
