Page({
  data: {
    tabs: [
      {
        title: '选项',
        subTitle: '描述文案',
        badgeType: 'text',
        badgeText: '99+',
      },
      {
        title: '选项二',
        subTitle: '描述文案描述文案描述文案',
        badgeType: 'dot',
      },
      {
        title: '3 Tab',
        subTitle: '描述文案',
      },
      { title: '4 Tab' },
      { title: '5 Tab' },
      { title: '3 Tab' },
      { title: '4 Tab' },
      { title: '15 Tab' },
    ],
    activeTab: 0,
    type: [
      { name: 'normal', value: '普通', checked: true },
      { name: 'capsule', value: '胶囊' },
      { name: 'hasSubTitle', value: '带描述' },
    ],
    typeCapsule: false,
    typeHasSubTitle: false,
    plus: [
      { name: 'has', value: '是', checked: true },
      { name: 'hasnt', value: '否' },
    ],
    hasPlus: true,
    contentHeight: [
      { name: 'has', value: '是', checked: true },
      { name: 'hasnt', value: '否' },
    ],
    hasContentHeight: true,
  },
  typeChange(e) {
    if (e.detail.value === 'hasSubTitle') {
      this.setData({
        typeCapsule: true,
        typeHasSubTitle: true,
      });
    } else if (e.detail.value === 'capsule') {
      this.setData({
        typeCapsule: true,
        typeHasSubTitle: false,
      });
    } else {
      this.setData({
        typeCapsule: false,
        typeHasSubTitle: false,
      });
    }
  },
  plusChange(e) {
    if (e.detail.value === 'hasnt') {
      this.setData({
        hasPlus: false,
      });
    } else {
      this.setData({
        hasPlus: true,
      });
    }
  },
  heightChange(e) {
    if (e.detail.value === 'hasnt') {
      this.setData({
        hasContentHeight: false,
      });
    } else {
      this.setData({
        hasContentHeight: true,
      });
    }
  },
  handleTabClick({ index }) {
    this.setData({
      activeTab: index,
    });
  },
  handleTabChange({ index }) {
    this.setData({
      activeTab: index,
    });
  },
  handlePlusClick() {
    my.alert({
      content: 'plus clicked',
    });
  },
});
