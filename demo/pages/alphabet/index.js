Page({
  data: {
    maxList: 5,
    switchValues: {
      // switch: true,
      // check: false,
    },
    checkValues: {},
  },
  onLoad() {
    const charCode = 65;
    const charList = [];
    for (let i = 0; i < 26; i++) {
      charList.push(String.fromCharCode(charCode + i));
    }
    this.setData({
      alphabet: charList,
    });
  },
  onItemClick(ev) {
    if (ev.detail && ev.index === 'check') {
      this.setData({
        actionValues: {
          ...this.data.actionValues,
          [ev.index]: ev.detail.value,
        },
      });
    } else {
      my.alert({
        content: `点击了第${ev.index}行`,
      });
    }
  },
  onAlphabetClick(ev) {
    my.alert({
      content: JSON.stringify(ev.data),
    });
  },
});
