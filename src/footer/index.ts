import fmtUnit from '../_util/fmtUnit';

Component({
  props: {
    className: '',
    // normal: 基础样式；
    // guide：文案加引导；
    // copyright：声明；
    // brand：带品牌；
    // link：带链接
    // end: 没有更多
    type: 'normal',
    content: '',
    extend: [],
    onBrandTap: () => { },
    showEndIcon: false,
    iconName: 'selected',
    // 为了兼容 mini-antui 转 mini-ali-ui 而添加的 props
    copyright: '',
    links: [],
  },
  data: {
    defaultSize: fmtUnit(18),
    maxSize: fmtUnit(22),
    valueUnit: fmtUnit('px'),
  },
  didMount() {
    this.compatAntui();
  },
  didUpdate() {
    this.compatAntui();
  },
  methods: {
    compatAntui() {
      // 兼容 mini-antui 升级到 mini-ali-ui 后分页符的页数使用
      const { copyright, links } = this.props;
      const changeLinks = [];
      // footer 的文案内容
      if (copyright !== '') {
        this.setData({
          content: copyright,
        });
      }
      // footer 的链接元素
      if (links.length > 0) {
        // eslint-disable-next-line guard-for-in
        for (const i in links) {
          changeLinks[i] = { link: links[i].url, text: links[i].text };
        }
        this.setData({
          extend: changeLinks,
          type: 'link',
        });
      }
    },
    onBrandClick(e) {
      const brandLink = e.currentTarget.dataset.url;
      const { onBrandTap, extend } = this.props;
      if (onBrandTap !== '' && brandLink) {
        my.navigateTo({
          url: brandLink,
        });
      }
      if (onBrandTap !== '' && !brandLink && typeof onBrandTap === 'function') {
        onBrandTap(extend[e.currentTarget.dataset.index]);
      }
    },
  },
});
