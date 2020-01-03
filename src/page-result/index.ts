const defaultEvent = () => {};

Component({
  props: {
    className: '',
    type: 'network',
    local: false,
    footer: null,
    onTapLeft: defaultEvent,
    onTapRight: defaultEvent,
  },
  methods: {
    onDefaultTap(propName, ...args) {
      if (this.props.footer && this.props[propName]) {
        this.props[propName](...args);
      } else {
        defaultEvent();
      }
    },
    onLeftButton(...args) {
      this.onDefaultTap('onTapLeft', ...args);
    },
    onRightButton(...args) {
      this.onDefaultTap('onTapRight', ...args);
    },
  },
});
