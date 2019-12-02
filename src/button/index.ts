import fmtClass from '../_util/fmtClass';

const prefixCls = 'am-button';
const noop = () => {};
Component({
  mixins: [],
  data: {
    baseClass: prefixCls,
  },
  props: {
    className: '',
    type: '',
    disabled: false,
    subtitle: '',
    onTap: noop,
  },
  didMount() {
    if (!this.props.hoverClass) {
      this.props.hoverClass = 'am-button-active';
      if (this.props.type === 'text') {
        this.props.hoverClass = 'am-button-active-text';
      }
    }
    this.setData({ baseClass: this.wrapBaseCls(), ...this.props });
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    wrapBaseCls() {
      const {
        type,
        disabled,
        subtitle,
        shape,
        capsuleSize = 'medium',
      } = this.props;

      const ret = fmtClass({
        [`${prefixCls}`]: true,
        [`${prefixCls}-primary`]: type === 'primary',
        [`${prefixCls}-ghost`]: type === 'ghost',
        [`${prefixCls}-warn`]: type === 'warn',
        [`${prefixCls}-warn-ghost`]: type === 'warn-ghost',
        [`${prefixCls}-text`]: type === 'text',
        [`${prefixCls}-light`]: type === 'light',
        [`${prefixCls}-capsule ${prefixCls}-capsule-${capsuleSize}`]:
          shape === 'capsule',
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-subtitle`]: subtitle,
      });
      return ret;
    },
    onButtonTap(...args) {
      this.props.onTap(...args);
    },
  },
});
