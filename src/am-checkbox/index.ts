import fmtEvent from '../_util/fmtEvent';

/**
 * 对齐 ant design checkbox 的设计，增加 ctrlChecked 属性
 * 当 props 中有 checked 传入时，am-checkbox 是非受控组件
 * 当 props 中不传入 checked 而使用 ctrlChecked 时，am-checkbox 是受控组件
 */
Component({
  props: {
    value: '',
    checked: false,
    ctrlChecked: undefined,
    disabled: false,
    onChange: () => {},
    id: '',
  },
  data: {
    // 组件内维护的 chackbox 勾选状态
    _checked: false,
  },
  onInit() {
    const { checked } = this.props;
    this.setData({
      _checked: checked,
    });
  },
  didMount() {
    const { checked } = this.props;
    this.setData({
      _checked: checked,
    });
  },
  // props 改变时
  deriveDataFromProps(nextProps) {
    const { _checked } = this.data;
    const { ctrlChecked: oldChecked } = this.props;
    const { ctrlChecked } = nextProps;
    // oldChecked===undefined 说明未传入 checked 属性，am-checkbox 将成为不受控组件
    // oldChecked 有传入值 _checked 受外部 checked 属性控制
    if (_checked !== ctrlChecked && oldChecked !== undefined) {
      this.setData({
        _checked: ctrlChecked,
      });
    }
  },
  methods: {
    onChange(e) {
      const { detail = {} } = e;
      const { value } = detail;
      this.setData({
        _checked: value,
      });
      const event = fmtEvent(this.props, e);
      this.props.onChange(event);
    },
  },
});
