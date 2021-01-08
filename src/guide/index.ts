import fmtEvent from '../_util/fmtEvent';
import getI18n from '../_util/getI18n';

const i18n = getI18n().guide;

Component({
  props: {
    btn_next: i18n.nextBtn,
    btn_jump: i18n.jumpBtn,
    btn_over: i18n.overBtn,
    hasJump: false,
    show: false,
    guideList: [],
    onGuideOver: () => { },
    maskClick: false,
  },
  data: {
    guideNumber: 1,
    guideCurrent: 1,
    guideLast: 1,
    showGuideList: [],
  },
  didMount() {
    const { guideList } = this.props;
    this.setData({
      guideNumber: guideList.length,
      guideCurrent: guideList.length,
      showGuideList: guideList[this.data.guideNumber - this.data.guideCurrent],
    });
  },
  didUpdate() {
    const { guideList } = this.props;
    if (this.data.guideCurrent - 1 >= 0) {
      this.setData({
        guideCurrent: this.data.guideCurrent,
        showGuideList: guideList[this.data.guideNumber - this.data.guideCurrent],
      });
    }
  },
  methods: {
    onBtnClick() {
      if (this.data.guideCurrent > this.data.guideLast) {
        this.setData({
          guideCurrent: this.data.guideCurrent - 1,
        });
      } else {
        this.props.show = false;
      }
    },
    onGuideClick(e) {
      this.props.show = false;
      const { onGuideOver } = this.props;
      if (onGuideOver !== '' && typeof onGuideOver === 'function') {
        const event = fmtEvent(this.props, e);
        onGuideOver(event);
      }
    },
    onMaskTap(e) {
      const { maskClick } = this.props;
      const event = fmtEvent(this.props, e);
      if (maskClick === true) {
        if (this.data.guideCurrent > this.data.guideLast) {
          this.onBtnClick();
        } else {
          this.onGuideClick(event);
        }
      }
    },
  },
});
