Page({
  data: {
    list: [
      {
        url: 'https://gw.alipayobjects.com/as/g/dnestFEGroup/dnestCompetFE/0.3.54/public/ii_bg1.49350b69.jpg',
        x: '150rpx',
        y: '100rpx',
        width: '200px',
        height: '300px',
      },
      {
        url: 'https://gw.alipayobjects.com/as/g/dnestFEGroup/dnestCompetFE/0.3.54/public/ii_bg1.49350b69.jpg',
        x: '250rpx',
        y: '50rpx',
        width: '200px',
        height: '100px',
      },
      {
        url: 'https://gw.alipayobjects.com/as/g/dnestFEGroup/dnestCompetFE/0.3.54/public/ii_bg1.49350b69.jpg',
        x: '350rpx',
        y: '200rpx',
        width: '100px',
        height: '300px',
      },
      {
        url: 'https://gw.alipayobjects.com/as/g/dnestFEGroup/dnestCompetFE/0.3.54/public/ii_bg1.49350b69.jpg',
        x: '400rpx',
        y: '200rpx',
        width: '200rpx',
        height: '300rpx',
      },
    ],
    guideShow: false,
    guideJump: true,
  },
  onLoad() {},
  closeGuide() {
    this.setData({
      guideShow: false,
    });
  },
  onShowJumpGuide() {
    this.setData({
      guideShow: true,
      guideJump: true,
    });
  },
  onShowGuide() {
    this.setData({
      guideShow: true,
      guideJump: false,
    });
  },
});
