import fmtEvent from '../_util/fmtEvent';
import fmtUnit from '../_util/fmtUnit';

Component({
  props: {
    className: '',
    labelCls: '',
    inputCls: '',
    last: false,
    value: '',
    name: '',
    type: 'text',
    password: false,
    placeholder: '',
    placeholderClass: '',
    placeholderStyle: '',
    disabled: false,
    maxlength: 140,
    focus: false,
    clear: true, // 默认有清除功能
    syncInput: false,
    enableNative: false, // 兼容安卓input的输入bug
    onInput: () => {},
    onConfirm: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onClear: () => {},
    layer: '', // 表单排列位置，当为空时默认横向排列， vertical 为竖向排列
    controlled: false,
  },
  data: {
    _focus: false,
    iconSize: fmtUnit(18),
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
  },
});
