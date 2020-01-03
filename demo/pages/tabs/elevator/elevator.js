Page({
  data: {
    tabs: [
      {
        title: '1选项选项二选项二选项二',
        subTitle: '描述文案',
        number: '6',
      },
      {
        title: '2选项二',
        subTitle: '描述文案描述',
        number: '66',
      },
      {
        title: '3 Tab',
        subTitle: '描述',
        number: '99+',
      },
      { title: '4 Tab',
        subTitle: '描述',
      },
      { title: '5 Tab',
        subTitle: '描述描述描述',
      },
      { title: '6 Tab',
        subTitle: '描述',
      },
      { title: '7 Tab选项二选项二选项二选项二',
        subTitle: '描述',
      },
      { title: '8 Tab',
        subTitle: '描述',
      },
    ],
    activeTab: 0,
  },
  onLoad() {},
  handleTabClick({ index, tabsName }) {
    this.setData({
      [tabsName]: index,
    });
  },
  onPageScroll({ scrollTop }) {
    for (let i = 0; i <= this.data.floorNumber.length; i++) {
      if (scrollTop >= this.data.floorNumber[i]) {
        this.setData({
          activeTab: i,
          getFloorNumber: i,
        });
      }
    }
  },
});
