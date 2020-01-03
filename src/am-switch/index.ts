import fmtEvent from '../_util/fmtEvent';

Component({
  props: {
    checked: false,
    disabled: false,
    onChange: () => {},
    id: '',
    name: '',
    controlled: false,
  },
  data: {
    checkedCls: '',
  },
  methods: {
    onChange(e) {
      const event = fmtEvent(this.props, e);
      this.props.onChange(event);
    },
  },
});
