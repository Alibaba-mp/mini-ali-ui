# Tag 标签

突出利益点、以及属性说明的标签

## 预览

<img width="375" src="https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*DT2tRpvTjswAAAAAAAAAAABkARQnAQ">

## 扫码体验

![image](http://mdn.alipayobjects.com/afts/img/A*rZ49QIi3GLoAAAAAAAAAAABkAa8wAA/original?bz=openpt_doc&t=4uqeKb9sYskPuZ1kwVzoewAAAABkMK8AAAAA)



## 属性

| 属性名    | 类型   | 默认值    | 可选项                                        | 描述     | 最低版本 | 必填 |
| --------- | ------ | --------- | --------------------------------------------- | -------- | -------- | ---- |
| className | String | ''        | -                                             | 类名称   | -        | -    |
| type      | String | 'primary' | primary<br />success<br />warning<br />danger | 标签类型 | -        | -    |
| iconType  | String | ''        |                                               | 图标类型 | -        | -    |
| size      | String | 'lg'      | lg<br />sm                                    | 标签大小 | -        | -    |

## slots

| slotName | 说明         |
| -------- | ------------ |
| ''       | 标签内部文案 |

## 示例

```json
{
  "defaultTitle": "Tag",
  "usingComponents": {
    "tag": "mini-ali-ui/es/tag/index",
    "list-item": "mini-ali-ui/es/list/list-item/index",
    "am-switch": "mini-ali-ui/es/am-switch/index"
  }
}
```

```xml
<view style="padding: 12px;">
  <view style="display: flex; justify-content: space-evenly;">
    <tag size="lg" iconType="{{useIcon ? 'qr' : ''}}" ghost="{{ghost}}" type="primary">标签</tag>
    <tag size="lg" iconType="{{useIcon ? 'qr' : ''}}" ghost="{{ghost}}" type="warning">标签</tag>
    <tag size="lg" iconType="{{useIcon ? 'qr' : ''}}" ghost="{{ghost}}" type="danger">标签</tag>
    <tag size="lg" iconType="{{useIcon ? 'qr' : ''}}" ghost="{{ghost}}" type="success">标签</tag>
  </view>
  <view style="display: flex; justify-content: space-evenly; margin-top: 20px;">
    <tag size="sm" iconType="{{useIcon ? 'qr' : ''}}" ghost="{{ghost}}" type="primary">标签</tag>
    <tag size="sm" iconType="{{useIcon ? 'qr' : ''}}" ghost="{{ghost}}" type="warning">标签</tag>
    <tag size="sm" iconType="{{useIcon ? 'qr' : ''}}" ghost="{{ghost}}" type="danger">标签</tag>
    <tag size="sm" iconType="{{useIcon ? 'qr' : ''}}" ghost="{{ghost}}" type="success">标签</tag>
  </view>
  <view style="padding: 20px 10px;">
    <list-item>
      图标
      <am-switch slot="extra" onChange="setInfo" data-name="useIcon" checked="{{useIcon}}"/>
    </list-item>
    <list-item>
      线框样式
      <am-switch slot="extra" onChange="setInfo" data-name="ghost" checked="{{ghost}}"/>
    </list-item>
  </view>
</view>
```

```javascript
Page({
  data: {},
  onLoad() {},
  setInfo(e) {
    const { dataset } = e.target;
    const { name } = dataset;
    this.setData({
      [name]: e.detail.value,
    });
  },
});
```
