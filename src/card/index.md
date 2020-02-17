# Card 卡片

卡片。



## 预览
<img src="https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*pn46SLaFl_IAAAAAAAAAAABkARQnAQ" width="375" />


## 属性

| 属性名             | 类型     | 默认值 | 可选值 | 描述                                           | 必选 |
| ------------------ | -------- | ------ | ------ | ---------------------------------------------- | ---- |
| thumb              | String   | -      | -      | Card缩略图地址                                 | -    |
| bgImg              | String   | -      | -      | Card背景图地址                                 | -    |
| title              | String   | -      | -      | Card标题                                       | true |
| subTitle           | String   | -      | -      | Card副标题                                     | -    |
| action             | String   | -      | -      | 按钮文案, 当有两个按钮时action在左侧           | -    |
| extraAction        | String   | -      | -      | 额外按钮文案， 当有两个按钮时extraAction在右侧 | -    |
| info               | String   | -      | -      | 用于点击卡片时往外传递数据                     | -    |
| expand             | Boolean  | false  | -      | 卡片是否展开                                   | -    |
| onActionClick      | Function | -      | -      | action的点击事件回调                           | -    |
| onExtraActionClick | Function | -      | -      | extraAction的点击事件回调                      | -    |
| onCardClick        | Function | -      | -      | Card点击的回调                                 | -    |



## 示例


### json
```json
{
  "defaultTitle": "Card",
  "usingComponents":{
    "card":"min-ali-ui/es/card/index"
  }
}
```


### axml
```xml
<view class="container">
  <card title="卡片标题1" 
    onCardClick="onCardClick" 
    info="点击了第一个card" />
  <view style="margin-top: 10px;" />
  <card thumb="{{thumb}}" 
    title="卡片标题2" 
    subTitle="副标题非必填2" 
    onCardClick="onCardClick" 
    info="点击了第二个card" />
  <view style="margin-top: 10px;" />
  <view>
    <card thumb="{{thumb}}" 
      title="卡片标题3" 
      subTitle="副标题非必填3" 
      onCardClick="toggle" 
      action="描述文字" 
      onActionClick="onActionClick" 
      extraAction="点击卡片展开/收起↑" 
      onExtraActionClick="onExtraActionClick" 
      info="点击了第三个card" 
      expand="{{expand3rd}}" 
      bgImg="https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*OjyRRqjLM6MAAAAAAAAAAABkARQnAQ" />
  </view>
  <view style="margin-top: 10px;" />
  <view>
    <card thumb="{{thumb}}" 
      title="卡片标题3" 
      subTitle="副标题非必填3" 
      onCardClick="onCardClick" 
      info="点击了第三个card" 
      bgImg="https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*OjyRRqjLM6MAAAAAAAAAAABkARQnAQ"
      expand
      />
</view>

```


### js
```javascript
Page({
  data: {
    thumb: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*b-kqQ4RZgsYAAAAAAAAAAABkARQnAQ',
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
```

