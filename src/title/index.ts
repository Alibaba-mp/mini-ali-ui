Component({
  props: {
    // title component have boder-bottom line
    hasLine: false,
    // title icon is not displayed by default
    showIcon: false,
    // type: arrow、close、more、'';
    type: '',
    // if type="arrow", need to write path
    xcxPath: '',
    onTypeTap: () => {},
    // developer can use class for style
    className: '',
  },
  data: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onClick() {
      const { type, onTypeTap } = this.props;
      if ((type === 'arrow' || type === 'more' || type === 'close') && typeof onTypeTap === 'function') {
        onTypeTap();
      }
    },
  },
});
