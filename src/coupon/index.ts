Component({
  props: {
    title: '',
    onCouponClick: () => {},
  },
  methods: {
    onCouponClick(e) {
      const { onCouponClick } = this.props;
      onCouponClick(e);
    },
    catchActionTap() {

    },
  },
});
