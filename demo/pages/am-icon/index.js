Page({
  data: {
    iconTypes: [
      'add',
      'add1',
      'addFriends',
      'alipay',
      'alipay_',
      'ant',
      'arrow-left',
      'arrow-right',
      'call',
      'chat',
      'chat_',
      'chatAdd',
      'close',
      'collect',
      'collect_',
      'collectMoney',
      'contacts',
      'contacts_',
      'content',
      'del',
      'del_',
      'down',
      'down_',
      'downland',
      'eye-open',
      'eye-open_',
      'eye-close',
      'eye-close_',
      'file',
      'font',
      'friendSetting',
      'gift',
      'global',
      'good',
      'help',
      'help_',
      'help1',
      'help1_',
      'home',
      'key',
      'koubei',
      'koubei_',
      'like',
      'like_',
      'link',
      'location',
      'location_',
      'lock',
      'mail',
      'member',
      'member_',
      'memberDel_',
      'memberDelete_',
      'miniApp',
      'miniApp_',
      'minus',
      'money',
      'more',
      'mute',
      'mute_',
      'person',
      'person_',
      'phonebook',
      'phonebook_',
      'pic',
      'play',
      'qr',
      'receipt',
      'receipt1',
      'receipt2',
      'refresh',
      'sad',
      'sad_',
      'scan',
      'scanning',
      'search',
      'selected',
      'send',
      'setting',
      'stop_',
      'success',
      'success_',
      'text',
      'time',
      'time_',
      'trash',
      'voice',
      'voice_',
      'wallet',
      'wait_',
      'wait1_',
      'warn',
      'warn_',
      'warning',
      'wealth',
      'zoom',
      'zoomOut',
      'safety_',
      'unsafety_',
    ],
    searchIcon: [],
  },
  searchIcon(e) {
    const inputValue = e.detail.value;
    const _this = this;
    const searchIcon = [];
    this.data.iconTypes.forEach((evalue) => {
      if (evalue.match(inputValue)) {
        searchIcon.push(evalue);
        _this.setData({
          searchIcon,
        });
      }
    });
  },
});
