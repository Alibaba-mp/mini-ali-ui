Component({
  props: {
    show: true,
    className: '',
    type: 'dialog',
    iconSize: 20,
    arrowPosition: 'bottom-left',
  },
  methods: {
    onCloseTap() {
      const { onCloseTap } = this.props;

      if (onCloseTap) {
        onCloseTap();
      }
    },
  },
});
