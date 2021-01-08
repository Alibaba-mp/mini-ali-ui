import fmtEvent from '../_util/fmtEvent';
import fmtUnit from '../_util/fmtUnit';
import getI18n from '../_util/getI18n';

const i18n = getI18n().verifyCode;

Component({
  props: {
    className: '',
    labelCls: '',
    label: i18n.label,
    inputCls: '',
    last: false,
    value: '',
    name: '',
    type: 'text',
    password: false,
    placeholder: i18n.placeholder,
    placeholderClass: '',
    placeholderStyle: '',
    disabled: false,
    maxlength: 140,
    focus: false,
    clear: true, // 默认有清除功能
    syncInput: false,
    controlled: true,
    enableNative: false, // 兼容安卓input的输入bug
    countDown: 60,
    isInitialActive: true,
    initActive: false, // 是否自动触发点击发送事件
    onInput: () => {},
    onConfirm: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onClear: () => {},
    onSend: () => {},
    txtSend: i18n.sendBtn,
    txtSendAgain: i18n.sendAgainBtn,
    txtCountDown: i18n.countDown,
  },
  data: {
    _focus: false,
    _actionActive: true,
    _countDown: 60,
    resent: false,
    iconSize: fmtUnit(18),
  },
  didMount() {
    this.setData({
      _focus: this.props.focus,
      _actionActive: this.props.isInitialActive,
      _countDown: this.props.countDown,
      actedBefore: false,
    });
    // 在组件加载的时候是否主动触发点击发送验证码事件
    if (this.props.initActive) {
      this.noSendCountDown();
    } else {
      this.setData({
        _actionActive: !this.props.initActive,
      });
    }
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
      const { countDown, onSend } = this.props;
      if (this.data._actionActive) {
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
              _countDown: countDown,
              actedBefore: true,
            });
          } else {
            this.setData({
              _countDown: subOne,
            });
          }
        }, 1000);
        const event = fmtEvent(this.props, e);
        onSend(event);
      }
    },
    noSendCountDown() {
      const { countDown } = this.props;
      if (this.data._actionActive) {
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
              _countDown: countDown,
              actedBefore: true,
            });
          } else {
            this.setData({
              _countDown: subOne,
            });
          }
        }, 1000);
      }
    },
  },
});
