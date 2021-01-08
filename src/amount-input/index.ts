import fmtEvent from '../_util/fmtEvent';
import fmtUnit from '../_util/fmtUnit';
import getI18n from '../_util/getI18n';

const i18n = getI18n().amountInput;

Component({
  props: {
    type: 'number',
    className: '',
    focus: false,
    placeholder: '',
    value: '',
    controlled: true,
    showClear: false,
    focusAfterClear: true,
    enableNative: undefined, // 兼容安卓input的输入
  },
  data: {
    _focus: false,
    _unit: '',
    iconSize: fmtUnit(22),
  },
  didMount() {
    this.getMoneyUnit(this.props.value);
    this.setData({
      _focus: this.props.focus,
    });
  },
  didUpdate(prevProps) {
    const { focus: prevFocus } = prevProps;
    const { focus: nowFocus } = this.props;
    if (prevFocus !== nowFocus) {
      this.setData({
        _focus: nowFocus,
      });
    }
    this.getMoneyUnit(this.props.value);
  },
  methods: {
    onInput(e) {
      const event = fmtEvent(this.props, e);
      if (this.props.onInput) {
        this.props.onInput(event);
      }
      this.getMoneyUnit(e.detail.value);
    },
    onConfirm(e) {
      const event = fmtEvent(this.props, e);
      if (this.props.onConfirm) {
        this.props.onConfirm(event);
      }
    },
    onButtonClick() {
      if (this.onButtonClick) {
        this.props.onButtonClick();
      }
    },
    onFocus(e) {
      this.setData({
        _focus: true,
      });
      const event = fmtEvent(this.props, e);
      if (this.props.onFocus) {
        this.props.onFocus(event);
      }
      this.getMoneyUnit(e.detail.value);
    },
    onBlur(e) {
      this.setData({
        _focus: false,
      });
      const event = fmtEvent(this.props, e);
      if (this.props.onBlur) {
        this.props.onBlur(event);
      }
      this.getMoneyUnit(e.detail.value);
    },
    onClearTap() {
      if (this.props.focusAfterClear) {
        this.setData({
          _focus: true,
        });
      }
      if (this.props.onClear) {
        this.props.onClear();
      }
    },
    getMoneyUnit(inputValue) {
      const value = Math.floor(inputValue);
      if (value > 999.99 && value <= 10000) {
        this.setData({
          _unit: i18n.thousand,
        });
      } else if (value > 9999.99 && value <= 100000) {
        this.setData({
          _unit: i18n.tenThousand,
        });
      } else if (value > 99999.99 && value <= 1000000) {
        this.setData({
          _unit: i18n.hundredThousand,
        });
      } else if (value > 999999.99 && value <= 10000000) {
        this.setData({
          _unit: i18n.million,
        });
      } else if (value > 9999999.99 && value <= 100000000) {
        this.setData({
          _unit: i18n.tenMillion,
        });
      } else if (value > 99999999.99 && value <= 1000000000) {
        this.setData({
          _unit: i18n.hundredMillion,
        });
      } else if (value > 999999999.99 && value <= 10000000000) {
        this.setData({
          _unit: i18n.billion,
        });
      } else {
        this.setData({
          _unit: '',
        });
      }
    },
  },
});
