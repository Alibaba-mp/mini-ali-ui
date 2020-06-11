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
  },

  methods: {
    clacWidth(pagerName) {
      my.createSelectorQuery()
        .select(`#${pagerName}`)
        .boundingClientRect()
        .exec((ret) => {
          this.wrapWidth = (<my.IBoundingClientRect>ret[0]).width;
        });
      return this.wrapWidth;
    },
    onScroll(e) {
      const infinitePageNumber = {};
      const { scrollLeft, scrollWidth } = e.detail;
      const viewWidth = this.clacWidth(e.currentTarget.dataset.id);

      if (viewWidth) {
        infinitePageNumber[e.currentTarget.dataset.id] = {
          pageDeg: (((scrollLeft + viewWidth) / scrollWidth) * 26 - 13) < 0 ? 0 : ((scrollLeft + viewWidth) / scrollWidth) * 13,
        };

        this.setData({
          pageDeg: infinitePageNumber[e.currentTarget.dataset.id].pageDeg,
        });
      }
    },
  },
});
