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
    setTimeout(() => {
      this.setData({
        show: false,
      });
    }, time);
  },
  methods: {
    onClose() {
      this.setData({
        show: false,
      });
      this.props.onClose();
    },
  },
});
