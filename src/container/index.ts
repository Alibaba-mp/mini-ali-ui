import fmtEvent from '../_util/fmtEvent';

Component({
  mixins: [],
  data: {},
  props: {
    className: '',
    type: 'line',
    title: '',
    thumb: '',
    icon: '',
    custom: '',
    onActionTap: () => {},
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onTitleClick(e) {
      const { onActionTap } = this.props;
      const event = fmtEvent(this.props, e);
      if (typeof onActionTap === 'function') {
        onActionTap(event);
      }
    },
  },
});
