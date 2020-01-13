Component({
  props: {
    show: true,
    className: '',
    type: 'dialog',
    iconSize: 20,
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
