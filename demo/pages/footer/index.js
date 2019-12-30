Page({
  data: {
    copyright: '© 2004-2017 Alipay.com. All rights reserved.',
    links: [
      { text: '底部链接', url: '/pages/list/index' },
      { text: '底部链接', url: '/pages/card/index' },
    ],
    singleLink: [
      { text: '底部链接', url: '/pages/list/index' },
    ],
    footerInfo1: {
      type: 'normal',
      content: '底部文案置底说明',
    },
    footerInfo2: {
      type: 'guide',
      content: '没找到需要的？搜一下试试',
      extend: [
        {
          link: '/pages/list/app',
          text: '蚂蚁借呗',
        },
        {
          link: '/pages/list/app',
          text: '备用金',
        },
        {
          link: '/pages/list/app',
          text: '花呗收钱',
        },
      ],
    },
    footerInfo3: {
      type: 'copyright',
      content: '© 2004-2020 Alipay.com. All rights reserved.',
    },
    footerInfo4: {
      type: 'brand',
      content: '过往业绩不预示产品未来表现，市场有风险，投资需谨慎',
      extend: [
        {
          logo: 'https://gw.alipayobjects.com/mdn/miniProgram_mendian/afts/img/A*wiFYTo5I0m8AAAAAAAAAAABjAQAAAQ/original',
          width: '80',
          height: '24',
          link: '/pages/list/app',
        },
        {
          logo: 'https://gw.alipayobjects.com/mdn/miniProgram_mendian/afts/img/A*wiFYTo5I0m8AAAAAAAAAAABjAQAAAQ/original',
          width: '150',
          height: '54',
        },
      ],
    },
    footerInfo5: {
      type: 'link',
      content: '© 2004-2020 Alipay.com. All rights reserved.',
      extend: [
        {
          link: '/pages/list/app',
          text: '底部链接',
        },
      ],
    },
    footerInfo6: {
      type: 'link',
      content: '© 2004-2020 Alipay.com. All rights reserved.',
      extend: [
        {
          link: '/pages/list/app',
          text: '底部链接',
        },
        {
          link: '/pages/list/app',
          text: '底部链接',
        },
      ],
    },
  },
  brandClick() {
    my.alert({
      content: '这个品牌 logo 没有链接，可通过 js 自定义点击事件。',
    });
  },
});
