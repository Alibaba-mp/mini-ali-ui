import fmtEvent from '../../_util/fmtEvent';

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
    onClose(e) {
      const event = fmtEvent(this.props, e);
      this.setData({
        show: false,
      });
      clearTimeout(this._timer);
      this.props.onClose(event);
    },
    onTimeOut(e) {
      const event = fmtEvent(this.props, e);
      if (this.props.onTimeOut && typeof this.props.onTimeOut === 'function') {
        this.props.onTimeOut(event);
      }
    },
  },
});
