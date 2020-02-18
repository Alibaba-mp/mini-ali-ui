const defaultEvent = () => {};
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
    countDownText: '重新刷新',
  },
  data: {
    defaultTitle: {
      network: '网络不给力',
      error: '页面遇到一些小问题',
      busy: '请稍等哦，马上出来',
      empty: '什么都没有',
      logoff: '此用户已注销',
      payment: '付款没成功',
      redpacket: '什么都没有',
    },
    defaultBrief: {
      network: '世界上最遥远的距离莫过于此',
      error: '请稍后刷新',
      busy: '前面还有很多朋友在排队',
      empty: '前不见古人，后不见来者',
      logoff: '',
      payment: '请重新付款',
      redpacket: '红包已领空',
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
        countDownTitle: `${countDownTimes} 秒后${countDownText}`,
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
