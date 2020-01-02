Component({
  props: {
    infinite: false,
    className: '',
    fillColor: '#ddd',
    frontColor: '#006EFF',
    pagerName: '',
    height: '100',
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

      infinitePageNumber[e.currentTarget.dataset.id] = {
        pageDeg: Math.round((scrollLeft) / (scrollWidth - viewWidth) * 16) > 16 ? 16 : Math.round((scrollLeft) / (scrollWidth - viewWidth) * 16),
      };

      this.setData({
        pageDeg: infinitePageNumber[e.currentTarget.dataset.id].pageDeg,
      });
    },
  },
});
