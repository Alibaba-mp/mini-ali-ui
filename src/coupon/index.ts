Component({
  props: {
    title: '',
    used: false,
    onCouponClick: () => {},
    // 票券的扩展类型
    extra: true,
    moreBtn: '规则详情',
    moreHide: true,
  },
  methods: {
    onCouponClick(e) {
      const { onCouponClick } = this.props;
      onCouponClick(e);
    },
    catchActionTap() { },
    changeMoreState() {
      const { moreHide } = this.props;
      this.props.moreHide = !moreHide;
      this.setData({
        moreHide: !moreHide,
      });
    },
  },
});
