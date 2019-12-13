Component({
  props: {
    title: '',
    onClick: () => {},
    info: '',
  },
  methods: {
    onCardClick() {
      const { info, onClick } = this.props;
      if (onClick) {
        onClick({ info });
      }
    },
    onActionClick() {
      const { info, onActionClick } = this.props;
      if (onActionClick) {
        onActionClick({ info });
      }
    },
    onExtraActionClick() {
      const { info, onExtraActionClick } = this.props;
      if (onExtraActionClick) {
        onExtraActionClick({ info });
      }
    },
  },
});
