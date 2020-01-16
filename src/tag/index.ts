Component({
  props: {
    // title component have boder-bottom line
    hasLine: false,
    // type: arrow、close、more、'';
    type: 'primary',
    // if type="arrow", need to write path
    iconURL: '',
    iconType: '',
    onActionTap: () => {},
    // developer can use class for style
    className: '',
    color: 'blue',
  },
  // TODO
  data: {
    bgClass: {
      primary: 'am-tag-bg-primary',
      warning: 'am-tag-bg-warning',
      success: 'am-tag-bg-success',
      danger: 'am-tag-bg-danger',
    },
    iconClass: {
      primary: 'am-tag-icon-primary',
      warning: 'am-tag-icon-warning',
      success: 'am-tag-icon-success',
      danger: 'am-tag-icon-danger',
    },
    ghostClass: {
      primary: 'am-tag-ghost-primary',
      warning: 'am-tag-ghost-warning',
      success: 'am-tag-ghost-success',
      danger: 'am-tag-ghost-danger',
    },
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onClick() {
      const { type, onActionTap } = this.props;
      if (
        (type === 'arrow' || type === 'more' || type === 'close') &&
        typeof onActionTap === 'function'
      ) {
        onActionTap();
      }
    },
  },
});
