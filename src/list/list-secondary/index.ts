Component({
  props: {
    title: '',
    subtitle: '',
    thumb: '',
  },
  didMount() {
    const { title = '', subtitle = '' } = this.props;
    const thumbPlaceholder = title.slice(0, 1) + subtitle.slice(0, 1);
    this.setData({
      // thumbPlaceholder: thumbPlaceholder.slice(1),
      thumbPlaceholder,
    });
  },
});
