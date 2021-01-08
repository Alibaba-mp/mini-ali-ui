import lifecycle from './mixins/lifecycle';
import getI18n from '../_util/getI18n';

const i18n = getI18n().filter;

Component({
  mixins: [lifecycle],
  data: {
    maxHeight: 0,
    _i18nReset: i18n.reset,
    _i18nConfirm: i18n.confirm,
  },
  props: {
    className: '',
    onChange: () => {},
    max: 10000,
    equalRows: 0,
  },
  didMount() {
    const { commonProps } = this.data;
    const { max } = this.props;
    commonProps.max = max;
  },
  methods: {
    resetFn() {
      const { items, results } = this.data;
      items.forEach((element) => {
        element.setData({
          confirmStyle: '',
        });
      });
      results.splice(0, results.length);
    },
    confirmFn() {
      const { onChange } = this.props;
      const { results } = this.data;
      onChange(results);
    },
    maskTap() {
      if (this.props.onMaskTap) {
        this.props.onMaskTap();
      }
    },
  },
});
