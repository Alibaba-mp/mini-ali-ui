import fmtUnit from '../_util/fmtUnit';

Component({
  props: {
    className: '',
    loadMore: false,
    loadContent: [
      '',
      '',
    ],
    loadingSize: fmtUnit('16px'),
    loadingColor: '',
    loadingHeight: 'auto',
  },
  data: {
    loadContent: [
      '加载更多...',
      '-- 数据加载完了 --',
    ],
  },
  didMount() {
    const loadTxt = this.props.loadContent[0] ? this.props.loadContent[0] : this.data.loadContent[0];
    const overTxt = this.props.loadContent[1] ? this.props.loadContent[1] : this.data.loadContent[1];
    setTimeout(() => {
      this.setData({
        loadContent: [loadTxt, overTxt],
      });
    }, 0);
  },
  didUpdate() {
    const loadTxt = this.props.loadContent[0] ? this.props.loadContent[0] : this.data.loadContent[0];
    const overTxt = this.props.loadContent[1] ? this.props.loadContent[1] : this.data.loadContent[1];
    if (loadTxt !== this.data.loadContent[0] || overTxt !== this.data.loadContent[1]) {
      setTimeout(() => {
        this.setData({
          loadContent: [loadTxt, overTxt],
        });
      }, 0);
    }
  },
});
