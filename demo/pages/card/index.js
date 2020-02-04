Page({
  data: {
    thumb: 'https://gw-office.alipayobjects.com/basement_prod/47775269-5c8e-40b8-bcda-43380022f311.jpg',
    footerImg: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
    expand3rd: false,
  },
  onCardClick(ev) {
    my.alert({
      content: ev.info,
    });
  },
  onActionClick() {
    my.alert({
      content: 'action clicked',
    });
  },
  onExtraActionClick() {
    my.alert({
      content: 'extra action clicked',
    });
  },
  toggle() {
    this.setData({
      expand3rd: !this.data.expand3rd,
    });
  },
});
