import fmtEvent from '../_util/fmtEvent';
import fmtUnit from '../_util/fmtUnit';

Component({
  props: {
    className: '',
    inputCls: '',
    last: false,
    value: '',
    name: '',
    type: 'text',
    // password: false,
    // placeholder: '',
    placeholderClass: '',
    placeholderStyle: '',
    disabled: false,
    maxlength: 140,
    focus: false,
    clear: true, // 默认有清除功能
    syncInput: false,
    controlled: true,
    enableNative: undefined, // 兼容安卓input的输入bug
    onInput: () => {},
    onConfirm: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onClear: () => {},
  },
  data: {
    _focus: false,
    visible: false,
    iconSizeClose: fmtUnit(18),
    iconSizeEye: fmtUnit(22),
  },
  didMount() {
    this.setData({
      _focus: this.props.focus,
    });
  },
  methods: {
    onBlur(e) {
      this.setData({
        _focus: false,
      });
      const event = fmtEvent(this.props, e);
      this.props.onBlur(event);
    },
    onConfirm(e) {
      const event = fmtEvent(this.props, e);
      this.props.onConfirm(event);
    },
    onFocus(e) {
      this.setData({
        _focus: true,
      });
      const event = fmtEvent(this.props, e);
      this.props.onFocus(event);
    },
    onInput(e) {
      const event = fmtEvent(this.props, e);
      this.props.onInput(event);
    },
    onClear(e) {
      const event = fmtEvent(this.props, e);
      this.props.onClear(event);
    },
    onSwitchVisible() {
      this.setData({
        visible: !this.data.visible,
      });
    },
  },
});
