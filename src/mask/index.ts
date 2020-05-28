import fmtEvent from '../_util/fmtEvent';

Component({
  props: {
    maskZindex: '',
    // product: 产品弹窗蒙层；market：营销弹窗蒙层；
    type: 'product',
    onMaskTap: () => { },
    show: true,
  },
  methods: {
    onMaskClick(e) {
      const { onMaskTap } = this.props;
      if (onMaskTap !== '' && typeof onMaskTap === 'function') {
        const event = fmtEvent(this.props, e);
        onMaskTap(event);
      }
    },
  },
});
