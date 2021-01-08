import getI18n from '../_util/getI18n';

const i18n = getI18n().coupon;

Component({
  props: {
    title: '',
    used: false,
    onCouponClick: () => {},
    // 票券的扩展类型
    extra: true,
    moreBtn: i18n.ruleBtn,
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
