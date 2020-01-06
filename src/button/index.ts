import fmtClass from '../_util/fmtClass';

const SUPPORT_COMPONENT2 = my.canIUse('component2');
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
    dataName: '',
    disabled: false,
    subtitle: '',
    onTap: noop,
    capsuleMinWidth: false,
  },
  onInit() {
    if (!this.props.hoverClass) {
      this.props.hoverClass = 'am-button-active';
      if (this.props.type === 'text') {
        this.props.hoverClass = 'am-button-active-text';
      }
    }
    this.setData({ baseClass: this.wrapBaseCls(this.props) });
  },
  deriveDataFromProps(nextProps) {
    if (this.propsChange(this.props, nextProps)) {
      this.setData({ baseClass: this.wrapBaseCls(nextProps) });
    }
  },
  didMount() {
    if (!SUPPORT_COMPONENT2) {
      if (!this.props.hoverClass) {
        this.props.hoverClass = 'am-button-active';
        if (this.props.type === 'text') {
          this.props.hoverClass = 'am-button-active-text';
        }
      }
      this.setData({ baseClass: this.wrapBaseCls(this.props) });
    }
  },
  didUpdate(prevProps) {
    if (!SUPPORT_COMPONENT2 && this.propsChange(prevProps, this.props)) {
      this.setData({ baseClass: this.wrapBaseCls(this.props) });
    }
  },
  didUnmount() {},
  methods: {
    wrapBaseCls(props) {
      const {
        type,
        disabled,
        subtitle,
        shape,
        capsuleSize = 'medium',
        capsuleMinWidth,
      } = props;
      let capsuleMinWidthCls = '';
      if (capsuleMinWidth) {
        capsuleMinWidthCls = `${prefixCls}-capsule-${capsuleSize}-minwidth`;
      }

      const ret = fmtClass({
        [`${prefixCls}`]: true,
        [`${prefixCls}-primary`]: type === 'primary',
        [`${prefixCls}-ghost`]: type === 'ghost',
        [`${prefixCls}-warn`]: type === 'warn',
        [`${prefixCls}-warn-ghost`]: type === 'warn-ghost',
        [`${prefixCls}-text`]: type === 'text',
        [`${prefixCls}-light`]: type === 'light',
        [`${prefixCls}-capsule ${prefixCls}-capsule-${capsuleSize} ${capsuleMinWidthCls}`]:
          shape === 'capsule',
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-subtitle`]: subtitle,
      });
      return ret;
    },
    onButtonTap(...args) {
      this.props.onTap(...args);
    },
    propsChange(prevProps, nextProps) {
      const pProps = Object.getOwnPropertyNames(prevProps);
      const nProps = Object.getOwnPropertyNames(nextProps);
      if (pProps.length !== nProps.length) {
        return true;
      }
      for (let i = 0; i < pProps.length; i++) {
        const propName = pProps[i];
        if (prevProps[propName] !== nextProps[propName]) {
          return true;
        }
      }
      return false;
    },
  },
});
