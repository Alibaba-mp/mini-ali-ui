import fmtEvent from '../../_util/fmtEvent';

Component({
  data: {
    show: true,
  },
  props: {
    className: '',
    time: 5000,
    onClose: () => {},
  },
  didMount() {
    const { time } = this.props;
    this._timer = setTimeout(() => {
      this.setData({
        show: false,
      });
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
      this.props.onClose(event);
    },
  },
});
