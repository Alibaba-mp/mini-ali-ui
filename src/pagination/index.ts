import fmtUnit from '../_util/fmtUnit';

Component({
  props: {
    infinite: false,
    className: '',
    fillColor: '#ddd',
    frontColor: '#1677FF',
    pagerName: '',
    height: fmtUnit('100px'),
    white: false,
    max: 5,
    currentPage: 1,
    current: 0, // 兼容 mini-antui 而添加的属性
    total: 0, // 兼容 mini-antui 而添加的属性
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
      const { current, total } = this.props;
      if (current !== 0 || total !== 0) {
        this.setData({
          currentPage: current,
          max: total,
        });
      }
    },
    clacWidth(pagerName) {
      my.createSelectorQuery()
        .select(`#${pagerName}`)
        .boundingClientRect()
        .exec((ret) => {
          if (ret && ret[0]) {
            this.wrapWidth = (<my.IBoundingClientRect>ret[0]).width;
          }
        });
      return this.wrapWidth;
    },
    onScroll(e) {
      const infinitePageNumber = {};
      const { scrollLeft, scrollWidth } = e.detail;
      const viewWidth = this.clacWidth(e.currentTarget.dataset.id);

      if (viewWidth) {
        infinitePageNumber[e.currentTarget.dataset.id] = {
          pageDeg: Math.ceil(scrollLeft / (scrollWidth - viewWidth) * 100),
        };

        this.setData({
          pageDeg: infinitePageNumber[e.currentTarget.dataset.id].pageDeg,
        });
      }
    },
  },
});
