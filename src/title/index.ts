import fmtEvent from '../_util/fmtEvent';

Component({
  props: {
    // title component have boder-bottom line
    hasLine: false,
    // type: arrow、close、more、'';
    type: '',
    // if type="arrow", need to write path
    iconURL: '',
    onActionTap: () => {},
    // developer can use class for style
    className: '',
  },
  data: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onClick(e) {
      const { type, onActionTap } = this.props;
      const event = fmtEvent(this.props, e);
      if ((type === 'arrow' || type === 'more' || type === 'close') && typeof onActionTap === 'function') {
        onActionTap(event);
      }
    },
  },
});
