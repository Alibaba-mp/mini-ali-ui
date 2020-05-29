Component({
  props: {
    maskZindex: '',
    // product: 产品弹窗蒙层；market：营销弹窗蒙层；
    type: 'product',
    onMaskTap: () => { },
    show: true,
    fixMaskFull: false,
  },
  methods: {
    onMaskClick() {
      const { onMaskTap } = this.props;
      if (onMaskTap !== '' && typeof onMaskTap === 'function') {
        onMaskTap();
      }
    },
  },
});
