import fmtEvent from '../../_util/fmtEvent';
import fmtUnit from '../../_util/fmtUnit';

Component({
  props: {
    className: '',
    iconURL: '',
    iconType: '',
  },
  data: {
    iconSize: fmtUnit(22),
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
