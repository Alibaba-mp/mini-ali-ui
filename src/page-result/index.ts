import getI18n from '../_util/getI18n';

const i18n = getI18n().pageResult;

const defaultEvent = () => { };
const COUNT_DOWN_TIMES = 10;

Component({
  props: {
    className: '',
    type: 'network',
    local: false,
    footer: null,
    onTapLeft: defaultEvent,
    onTapRight: defaultEvent,
    isCountDown: false,
    countDownText: i18n.refresh,
  },
  data: {
    defaultTitle: {
      network: i18n.networkTitle,
      error: i18n.errorTitle,
      busy: i18n.busyTitle,
      empty: i18n.emptyTitle,
      logoff: i18n.logoffTitle,
      payment: i18n.paymentTitle,
      redpacket: i18n.redpacketTitle,
    },
    defaultBrief: {
      network: i18n.networkBrief,
      error: i18n.errorBrief,
      busy: i18n.busyBrief,
      empty: i18n.emptyBrief,
      logoff: i18n.logoffBrief,
      payment: i18n.paymentBrief,
      redpacket: i18n.redpacketBrief,
    },
    countDownTitle: '',
  },
  didMount() {
    const { countDownText, isCountDown } = this.props;
    if (!isCountDown) {
      return;
    }
    let countDownTimes = COUNT_DOWN_TIMES;
    this._timer = null;
    const execCountDown = () => {
      this.setData({
        countDownTitle: `${countDownTimes} ${i18n.timeOut} ${countDownText}`,
      });
      countDownTimes -= 1;
      if (countDownTimes < 0) {
        clearTimeout(this._timer);
        this.setData({
          isCountDown: false,
        });
      } else {
        this._timer = setTimeout(execCountDown, 1000);
      }
    };
    execCountDown();
  },
  didUnmount() {
    if (this._timer) {
      clearTimeout(this._timer);
      this._timer = null;
    }
  },
  methods: {
    onDefaultTap(propName, ...args) {
      if (this.props.footer && this.props[propName]) {
        this.props[propName](...args);
      } else {
        defaultEvent();
      }
    },
    onLeftButton(...args) {
      this.onDefaultTap('onTapLeft', ...args);
    },
    onRightButton(...args) {
      this.onDefaultTap('onTapRight', ...args);
    },
  },
});
