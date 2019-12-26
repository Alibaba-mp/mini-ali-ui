const SUPPORT_COMPONENT2 = my.canIUse('component2');
const TYPE_MAP = {
  success: 'success_',
  fail: 'del_',
  info: 'help1_',
  warn: 'warn_',
  waiting: 'time_',
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
    iconType: 'success_',
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
    tapMain() {
      this.props.onTapMain();
    },
    tapSub() {
      this.props.onTapSub();
    },
    setType(type) {
      const realType = TYPE_MAP[type] || 'success_';
      this.setData({ iconType: realType });
    },
  },
});
