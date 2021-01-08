import fmtUnit from '../_util/fmtUnit';
import getI18n from '../_util/getI18n';

const i18n = getI18n().list;

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
      i18n.loadMore,
      i18n.loadOver,
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
