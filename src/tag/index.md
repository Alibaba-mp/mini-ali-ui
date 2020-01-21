# Tag 标签

突出利益点、以及属性说明的标签

## 演示

<video width="375" autoplay muted loop controls >
  <source src="https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/file/A*pgTFTqfq44IAAAAAAAAAAABkARQnAQ">
  Sorry, your browser doesn't support embedded videos.
</video>

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
// pages/tag/index.json
{
  "defaultTitle": "小程序 mini-ali-ui 库",
  "usingComponents": {
    "tag": "../../es/tag/index",
    "list-item": "../../es/list/list-item/index",
    "am-switch": "../../es/am-switch/index"
  }
}
```

```html
<!-- pages/tag/index.axml -->
<view style="padding: 12px;">
  <view style="display: flex; justify-content: space-evenly;">
    <tag
      size="lg"
      iconType="{{useIcon ? 'qr' : ''}}"
      ghost="{{ghost}}"
      type="primary"
      >标签</tag
    >
    <tag
      size="lg"
      iconType="{{useIcon ? 'qr' : ''}}"
      ghost="{{ghost}}"
      type="warning"
      >标签</tag
    >
    <tag
      size="lg"
      iconType="{{useIcon ? 'qr' : ''}}"
      ghost="{{ghost}}"
      type="danger"
      >标签</tag
    >
    <tag
      size="lg"
      iconType="{{useIcon ? 'qr' : ''}}"
      ghost="{{ghost}}"
      type="success"
      >标签</tag
    >
  </view>
  <view style="display: flex; justify-content: space-evenly; margin-top: 20px;">
    <tag
      size="sm"
      iconType="{{useIcon ? 'qr' : ''}}"
      ghost="{{ghost}}"
      type="primary"
      >标签</tag
    >
    <tag
      size="sm"
      iconType="{{useIcon ? 'qr' : ''}}"
      ghost="{{ghost}}"
      type="warning"
      >标签</tag
    >
    <tag
      size="sm"
      iconType="{{useIcon ? 'qr' : ''}}"
      ghost="{{ghost}}"
      type="danger"
      >标签</tag
    >
    <tag
      size="sm"
      iconType="{{useIcon ? 'qr' : ''}}"
      ghost="{{ghost}}"
      type="success"
      >标签</tag
    >
  </view>
  <view style="padding: 20px 10px;">
    <list-item>
      图标
      <am-switch
        slot="extra"
        onChange="setInfo"
        data-name="useIcon"
        checked="{{useIcon}}"
      />
    </list-item>
    <list-item>
      线框样式
      <am-switch
        slot="extra"
        onChange="setInfo"
        data-name="ghost"
        checked="{{ghost}}"
      />
    </list-item>
  </view>
</view>
```

```javascript
// pages/tag/index.js
Page({
  data: {
    items: [
      {
        dot: true,
        text: "",
        isWrap: true,
        intro: "Dot Badge"
      },
      {
        dot: false,
        text: 1,
        isWrap: true,
        intro: "Text Badge"
      },
      {
        dot: false,
        text: 99,
        isWrap: false,
        intro: "数字"
      },
      {
        dot: false,
        text: 100,
        overflowCount: 99,
        isWrap: false,
        intro: "数字超过overflowCount"
      },
      {
        dot: false,
        text: "new",
        isWrap: false,
        intro: "文字"
      },
      {
        dot: false,
        text: "middle arrow",
        isWrap: false,
        intro: "箭头中",
        withArrow: true,
        direction: "middle"
      },
      {
        dot: false,
        text: "left arrow",
        isWrap: false,
        intro: "箭头左",
        withArrow: true,
        direction: "left"
      },
      {
        dot: false,
        text: "right arrow",
        isWrap: false,
        intro: "箭头右",
        withArrow: true,
        direction: "right"
      }
    ]
  }
});
```
