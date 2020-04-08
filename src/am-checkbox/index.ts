import fmtEvent from '../_util/fmtEvent';

Component({
  props: {
    value: '',
    checked: false,
    disabled: false,
    onChange: () => {},
    color: '',
    id: '',
  },
  data: {
    // 组件内维护的chackbox勾选状态
    _checked: false,
  },
  onInit() {
    const { checked } = this.props;
    this.setData({
      _checked: checked,
    });
  },
  methods: {
    onChange(e) {
      const { detail = {} } = e;
      const { value } = detail;
      this.setData({
        _checked: value,
      });
      const event = fmtEvent(this.props, e);
      this.props.onChange(event);
    },
  },
});
