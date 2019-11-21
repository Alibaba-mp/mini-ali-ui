import fmtEvent from '../_util/fmtEvent';

/* eslint-disable no-unused-vars */
Component({
  props: {
    className: '',
    labelCls: '',
    inputCls: '',
    last: false,
    value: '',
    name: '',
    type: 'text',
    // password: false,
    // placeholder: '',
    placeholderClass: '',
    placeholderStyle: '',
    // disabled: false,
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
  },
  data: {
    _focus: false,
    visible: false,
    focusPos: 0,
    dumArr: [0, 1, 2, 3, 4, 5],
    disabled: false,
  },
  didMount() {
    this.setData({
      _focus: this.props.focus,
    });
  },
  methods: {
    onBlur(e) {
      // this.setData({
      //   _focus: false
      // });
      // const event = fmtEvent(this.props, e);
      // this.props.onBlur(event);
    },
    onConfirm(e) {
      const event = fmtEvent(this.props, e);
      this.props.onConfirm(event);
    },
    onFocus(e) {
      this.setData({
        // _focus: true
        focusPos: this.props.value.length,
        disabled: true,
      });
      const event = fmtEvent(this.props, e);
      this.props.onFocus(event);
    },
    onTap(e) {
      this.setData({
        _focus: true,
      });
    },
    onInput(e) {
      console.log(e.detail.value);
      const event = fmtEvent(this.props, e);
      this.props.onInput(event);
    },
    onInputBlur(e) {
      this.setData({
        _focus: false,
      });
    },
  },
});
