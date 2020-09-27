Component({
  props: {
    className: '',
    shape: 'circle',
    size: 'md',
    src: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*2iXlQLntttsAAAAAAAAAAAAAARQnAQ',
    name: '',
    desc: '',
  },
  didMount() {
    const { name, desc } = this.props;
    if (!name && desc) {
      console.error('Avatar: 不允许设置 desc 但不定义 name');
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
