import fmtUnit from '../_util/fmtUnit';

Component({
  props: {
    type: 'primary',
    iconType: '',
    className: '',
    size: 'lg',
  },
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
    iconSizeSm: fmtUnit(10),
    iconSize: fmtUnit(12),
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
});
