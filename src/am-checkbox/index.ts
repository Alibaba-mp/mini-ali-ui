import fmtEvent from '../_util/fmtEvent';

/**
 * 对齐ant design checkbox的设计，增加defaultChecked属性
 * 当props中有checked传入时，am-checkbox是受控组件
 * 当props中不传入checked时，am-checkbox是非受控组件
 */
Component({
  props: {
    value: '',
    defaultChecked: false,
    checked: undefined,
    disabled: false,
    onChange: () => {},
    color: '',
    id: '',
  },
  data: {
    // 组件内维护的chackbox勾选状态
    _checked: false,
  },
  onInit() {
    const { defaultChecked } = this.props;
    this.setData({
      _checked: defaultChecked,
    });
  },
  // props改变时
  deriveDataFromProps(nextPrps) {
    const { _checked } = this.data;
    const { checked: oldChecked } = this.props;
    const { checked } = nextPrps;
    // oldChecked===undefined 说明未传入checked属性，am-checkbox将成为不受控组件
    // oldChecked有传入值_checked受外部checked属性控制
    if (_checked !== checked && oldChecked !== undefined) {
      this.setData({
        _checked: checked,
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
