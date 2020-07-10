import fmtEvent from '../../_util/fmtEvent';

Component({
  props: {
    className: '',
    icon: '',
    iconType: '',
  },
  methods: {
    onItemClick(e) {
      if (this.props.onItemClick && typeof this.props.onItemClick === 'function') {
        const event = fmtEvent(this.props, e);
        this.props.onItemClick(event);
      }
    },
  },
});
