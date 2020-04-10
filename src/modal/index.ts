import fmtUnit from '../_util/fmtUnit';

Component({
  data: {
    _buttonsLayout: '',
    adviceClose: fmtUnit(26),
    normalClose: fmtUnit(18),
  },
  props: {
    className: '',
    topImageSize: 'md',
    showClose: false,
    closeType: '0',
    mask: true,
    buttonsLayout: 'horizontal',
    disableScroll: true,
  },
  didMount() {
    const { buttons, buttonsLayout } = this.props;
    // button数目大于 2 个，则强制使用竖排结构
    if (buttons && buttons.length > 2) {
      this.setData({
        _buttonsLayout: 'vertical',
      });
    } else {
      this.setData({
        _buttonsLayout: buttonsLayout,
      });
    }
  },
  methods: {
    // footer点击
    _onModalClick() {
      const { onModalClick } = this.props;
      if (onModalClick) {
        onModalClick();
      }
    },
    // buttons点击
    _onButtonClick(e) {
      const { onButtonClick } = this.props;
      if (onButtonClick) {
        onButtonClick(e);
      }
    },
    // 关闭按钮点击
    _onModalClose() {
      const { onModalClose } = this.props;
      if (onModalClose) {
        onModalClose();
      }
    },
  },
});
