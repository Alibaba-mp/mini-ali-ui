Component({
  data: {
    _buttonsLayout: '',
  },
  props: {
    className: '',
    topImageSize: 'md',
    showClose: true,
    closeType: '0',
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
    _onModalClick() {
      const { onModalClick } = this.props;
      if (onModalClick) {
        onModalClick();
      }
    },
    _onButtonClick(e) {
      const { onButtonClick } = this.props;
      if (onButtonClick) {
        onButtonClick(e);
      }
    },
    _onModalClose() {
      const { onModalClose } = this.props;
      if (onModalClose) {
        onModalClose();
      }
    },
  },
});
