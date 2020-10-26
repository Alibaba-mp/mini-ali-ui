import fmtEvent from '../_util/fmtEvent';

const SUPPORT_COMPONENT2 = my.canIUse('component2');
const TYPE_MAP = {
  success: 'check_',
  fail: 'close_',
  cancel: 'close_',
  info: 'help_',
  warn: 'warn_',
  waiting: 'time-5_',
};

Component({
  props: {
    className: '',
    type: 'success',
    title: '',
    onTapMain: () => {},
    onTapSub: () => {},
  },
  data: {
    // message 的 icon 图标样式
    iconType: 'check_',
    // message 的 icon 类型（颜色）
    iconType_: 'success',
  },
  onInit() {
    this.setType(this.props.type);
  },
  didMount() {
    if (!SUPPORT_COMPONENT2) {
      this.setType(this.props.type);
    }
  },
  didUpdate(prevProps) {
    if (!SUPPORT_COMPONENT2 && this.props.type !== prevProps.type) {
      this.setType(this.props.type);
    }
  },
  deriveDataFromProps(nextProps) {
    if (this.props.type !== nextProps.type) {
      this.setType(nextProps.type);
    }
  },
  methods: {
    tapMain(e) {
      const event = fmtEvent(this.props, e);
      this.props.onTapMain(event);
    },
    tapSub(e) {
      const event = fmtEvent(this.props, e);
      this.props.onTapSub(event);
    },
    setType(type) {
      const realType = TYPE_MAP[type] || 'check_';
      // 根据 props 中的 type 值选择 icon 的图标以及颜色
      this.setData({
        iconType: realType,
        iconType_: type,
      });
    },
  },
});
