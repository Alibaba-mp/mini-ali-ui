Component({
  props: {
    btn_next: '下一步',
    btn_jump: '跳过',
    btn_over: '知道了',
    hasJump: false,
    show: false,
    guideList: [],
    onGuideOver: () => { },
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
        onGuideOver(e);
      }
    },
  },
});
