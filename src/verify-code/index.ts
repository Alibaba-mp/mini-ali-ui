import fmtEvent from '../_util/fmtEvent';

Component({
  props: {
    className: '',
    labelCls: '',
    label: '验证码',
    inputCls: '',
    last: false,
    value: '',
    name: '',
    type: 'text',
    password: false,
    placeholder: '请输入验证码',
    placeholderClass: '',
    placeholderStyle: '',
    disabled: false,
    maxlength: 140,
    focus: false,
    clear: true, // 默认有清除功能
    syncInput: false,
    enableNative: false, // 兼容安卓input的输入bug
    countDown: 60,
    isInitialActive: true,
    onInput: () => {},
    onConfirm: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onClear: () => {},
    onSend: () => {},
  },
  data: {
    _focus: false,
    _actionActive: true,
    _countDown: 60,
    resent: false,
  },
  didMount() {
    this.setData({
      _focus: this.props.focus,
      _actionActive: this.props.isInitialActive,
      _countDown: this.props.countDown,
      actedBefore: false,
    });
  },
  didUnmount() {
    clearInterval(this._timeout);
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
    onTapSend(e) {
      this.setData({
        _actionActive: false,
      });
      this._timeout = setInterval(() => {
        const subOne = this.data._countDown - 1;
        if (subOne <= 0) {
          clearInterval(this._timeout);
          this.setData({
            _actionActive: true,
            resend: true,
            _countDown: this.props.countDown,
            actedBefore: true,
          });
        } else {
          this.setData({
            _countDown: subOne,
          });
        }
      }, 1000);
      const event = fmtEvent(this.props, e);
      this.props.onSend(event);
    },
  },
});
