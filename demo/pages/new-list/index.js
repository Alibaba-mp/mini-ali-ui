Page({
  data: {
    title: '单行列表1',
    extra: '详细信息',
    arrow: true,
    upperSubtitle: '上副标题',
    // lowerSubtitle: '下副标题',
    lowerSubtitle: '',
    thumb:
      'https://gw-office.alipayobjects.com/basement_prod/47775269-5c8e-40b8-bcda-43380022f311.jpg',
    useThumb: false,
    thumbSize: undefined,
    primarySlotTypes: ['无内容', '标签', '问号图标'],
    supSlotTypes: ['无内容', '标签', '问号图标', '勾图标', '文字内容'],
    secSlotTypes: [
      '无内容',
      '文字内容',
      '标签',
      '问号图标',
      '勾图标',
      '开关',
      '胶囊按钮',
      'list-secondary',
    ],
    supSlotIndex: 0,
    secSlotIndex: 0,
    titleSlotIndex: 0,
    upperSlotIndex: 0,
    lowerSlotIndex: 0,
    titleTagText: '标签',
    upperTagText: '标签',
    lowerTagText: '标签',
    supTagText: '标签',
    supText: '文字内容',
    secTagText: '标签',
    secText: '详细信息',
    titleIconSize: 17,
    upperIconSize: 17,
    lowerIconSize: 17,
    supIconSize: 17,
    secIconSize: 17,
    titlePositions: ['top', 'middle', 'bottom'],
    titlePosIndex: 0,
  },
  setInfo(e) {
    const { dataset } = e.target;
    const { name } = dataset;
    if (name) {
      this.setData({
        [name]: e.detail.value,
      });
    }
  },
  setThumbSize(e) {
    this.setData({
      thumbSize: e.detail.value,
    });
  },
});
