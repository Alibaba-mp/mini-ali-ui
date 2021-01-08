import getI18n from '../_util/getI18n';

const i18n = getI18n().avatar;

Component({
  props: {
    className: '',
    shape: 'circle',
    size: 'md',
    src: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*2iXlQLntttsAAAAAAAAAAAAAARQnAQ',
    name: '',
    desc: '',
    lazyLoad: false,
  },
  didMount() {
    const { name, desc } = this.props;
    if (!name && desc) {
      console.error(i18n.error);
    }
  },
  methods: {
    // 图片加载失败
    _onError(e) {
      const { onError } = this.props;
      if (onError) {
        onError(e);
      }
    },
  },
});
