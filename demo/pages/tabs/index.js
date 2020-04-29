Page({
  data: {
    tabs2: [
      {
        title: '选项',
        subTitle: '描述文案',
      },
      {
        title: '选选',
        subTitle: '描述文案',
      },
      {
        title: '二二',
        subTitle: '描述文案',
      },
      {
        title: '选二',
        subTitle: '描述文案',
      },
      {
        title: '项二',
        subTitle: '描述文案',
        number: '6',
      },
      {
        title: '二二',
        subTitle: '描述文案',
      },
      {
        title: '选二',
        subTitle: '描述文案',
      },
      {
        title: '项二',
        subTitle: '描述文案',
        number: '6',
      },
    ],
    activeTab2: 0,
    tabs: [
      {
        title: '选项选项二选项二选项二',
        subTitle: '描述文案',
        number: '6',
        showBadge: true,
        badge: {
          arrow: true,
          stroke: true,
        },
      },
      {
        title: '选项二',
        subTitle: '描述文案描述',
        number: '66',
        showBadge: true,
        badge: {
          arrow: false,
          stroke: true,
        },
      },
      {
        title: '3 Tab',
        subTitle: '描述',
        number: '文字',
        showBadge: true,
        badge: {
          arrow: true,
        },
      },
      { title: '4 Tab',
        subTitle: '描述',
        showBadge: true,
        number: 0,
      },
      { title: '5 Tab5 Tab5 Tab',
        subTitle: '描述描述描述',
        number: '99+',
        showBadge: false,
      },
      { title: '3 Tab',
        subTitle: '描述',
        showBadge: false,
      },
      { title: '4 Tab选项二选项二选项二选项二',
        subTitle: '描述',
      },
      { title: '15 Tab',
        subTitle: '描述',
      },
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
    tabsNumber: [
      { name: '1', value: '一条' },
      { name: '2', value: '两条' },
      { name: '3', value: '三条' },
      { name: '-1', value: '很多', checked: true },
    ],
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
  handleTabClick({ index, tabsName }) {
    this.setData({
      [tabsName]: index,
    });
  },
  handleTabChange({ index, tabsName }) {
    this.setData({
      [tabsName]: index,
    });
  },
  handlePlusClick() {
    my.alert({
      content: 'plus clicked',
    });
  },
  tabsNumberChange(e) {
    if (e.detail.value === '1') {
      this.setData({
        tabs: [
          {
            title: '选项',
            subTitle: '描述文案',
            number: '6',
          },
        ],
      });
    } else if (e.detail.value === '2') {
      this.setData({
        tabs: [
          {
            title: '选项',
            subTitle: '描述文案',
            number: '6',
            showBadge: true,
            badge: {
              arrow: true,
              stroke: true,
            },
          },
          {
            title: '选项二',
            subTitle: '描述文案描述',
            number: '66',
            showBadge: true,
          },
        ],
      });
    } else if (e.detail.value === '3') {
      this.setData({
        tabs: [
          {
            title: '选项',
            subTitle: '描述文案',
            number: '6',
            showBadge: true,
            badge: {
              arrow: true,
              stroke: true,
            },
          },
          {
            title: '选项二',
            subTitle: '描述文案描述',
            number: '66',
            showBadge: true,
          },
          {
            title: 'Tab',
            subTitle: '描述',
            number: '99+',
            showBadge: true,
            badge: {
              arrow: true,
              stroke: false,
            },
          },
        ],
      });
    } else {
      this.setData({
        tabs: [
          {
            title: '选项选项二选项二选项二',
            subTitle: '描述文案',
            number: '6',
            showBadge: true,
            badge: {
              arrow: true,
              stroke: true,
            },
          },
          {
            title: '选项二',
            subTitle: '描述文案描述',
            number: '66',
            showBadge: true,
            badge: {
              arrow: false,
              stroke: true,
            },
          },
          {
            title: '3 Tab',
            subTitle: '描述',
            number: '99+',
            showBadge: true,
            badge: {
              arrow: true,
            },
          },
          { title: '4 Tab',
            subTitle: '描述',
            showBadge: true,
            number: 0,
          },
          { title: '5 Tab5 Tab5 Tab',
            subTitle: '描述描述描述',
            number: '99+',
            showBadge: false,
          },
          { title: '3 Tab',
            subTitle: '描述',
            showBadge: false,
          },
          { title: '4 Tab选项二选项二选项二选项二',
            subTitle: '描述',
          },
          { title: '15 Tab',
            subTitle: '描述',
          },
        ],
      });
    }
  },
});
