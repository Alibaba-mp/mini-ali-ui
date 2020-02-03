# Grid 宫格

按照不同的业务场景，可选择不同列数的宫格，包含了 2、3、4、5 列四种列数的宫格。

## 扫码体验

<img src="https://gw.alipayobjects.com/zos/rmsportal/ebqnVPiuCCoOKXwioUUH.jpeg" width="154" height="190" />

## 截图
![grid 宫格模块](https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*vQv9Qr8uHz8AAAAAAAAAAABkARQnAQ)

## 属性介绍

| 属性名 | 类型 | 默认值 | 可选项 | 描述 | 最低版本 | 必填 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| columnNum | Number | 3 | 2/3/4/5 | 设置宫格的列数 | - | true |
| circular | Boolean | false | - | item 图是否为圆形 | - | - |
| list | Array | - | - | 宫格数据 | - | true |
| onGridItemClick | EventHandle | (index: Number) => void | - | 点击宫格项回调 | - | - |
| hasLine | Boolean | true | - | 3 列宫格时才有的间隔线 | - | - |
| infinite | Boolean | false | - | 5 列宫格时是否为无限滚动模式 | - | - |
| infiniteHeight | String | 90px | - | 无限滚动模式时的宫格整体高度 | - | - |
| gridName | String | - | - | 无限滚动宫格的名称 | - | - |

## Bug & Tip
* `hasLine` 仅在 3 列宫格中才有效果；
* `circular` 圆角仅在 4/5 列宫格中才有效果；
* `infinite` 无限滚动模式的宫格仅在 5 列宫格，且列数超过 5 条之后才会有效果；
* 5 列宫格仅会显示一行，如果超过五个，且未设置 `infinite` 的话，最后一个将会改变 icon 的表现形式；
* 如在一个页面中有多个无限滚动的 5 列宫格，建议增加使用 `gridName` 属性，避免分页符表现错误；
* 当使用 5 列的无限滚动时，需要同时引入 **pagination** 组件；

## 代码示例

```json
{
  "defaultTitle": "5列宫格",
  "usingComponents":{
    "grid":"mini-ali-ui/es/grid/index",
    "pagination": "mini-ali-ui/es/pagination/index"
  }
}
```

```xml
<grid onGridItemClick="onItemClick" columnNum="{{5}}" list="{{list55}}" infinite="{{true}}" gridName="newGridName" circular="{{true}}" infiniteHeight="240rpx" />
```

```javascript
Page({
  data: {
    list55: [
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '标题文字',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '标题文字',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '标题文字',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '标题文字',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '标题文字',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '6标题文字',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '标题文字',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '标题文字',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '标题文字',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '标题文字',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '标题文字',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '标题文字',
      },
    ],
  },
  onItemClick(ev) {
    my.alert({
      content: ev.detail.index,
    });
  },
});
```