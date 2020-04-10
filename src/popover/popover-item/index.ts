Component({
  props: {
    className: '',
  },
  methods: {
    onItemClick(e) {
      if (this.props.onItemClick && typeof this.props.onItemClick === 'function') {
        this.props.onItemClick(e);
      }
    },
  },
});
