Component({
  props: {
    title: '',
    onCardClick: () => {},
    info: '',
  },
  methods: {
    onCardClick() {
      const { info, onCardClick } = this.props;
      onCardClick({ info });
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
