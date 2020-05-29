Component({
  props: {
    show: false,
    className: '',
    showMask: true,
    position: 'bottomRight',
    fixMaskFull: false,
  },
  methods: {
    onMaskClick() {
      if (this.props.onMaskClick && typeof this.props.onMaskClick === 'function') {
        this.props.onMaskClick();
      }
    },
  },
});

