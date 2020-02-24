# Loading 加载

loading 加载动画。

## 截图
![loading 加载动画](https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*yGirSonwGzAAAAAAAAAAAABkARQnAQ)

## 属性介绍

| 属性名 | 类型 | 默认值 | 可选项 | 描述 | 最低版本 | 必填 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| className | String| - | - | 自定义class | - | - |
| size | String | 100px | - | 设置 loading 尺寸大小 | - | - |
| color | String | #1677ff | - | 设置 loading 的颜色 | - | - |

## Bug & Tip
* `size` 的值需要带单位；
* `color` 的值仅支持颜色关键词和十六进制的颜色值表示方式，如 `red`、`#F00`等；

## 代码示例
```json
{
  "defaultTitle": "Loading",
  "usingComponents": {
    "loading": "mini-ali-ui/es/loading/index"
  }
}
```

```xml
<loading />
<loading size="50px" />
<loading size="400rpx" color="red" />
<loading size="{{loadSize}}" color="#f00" />
```

```javascript
Page({
  data: {
    loadSize: '180rpx',
  },
  onLoad() {},
});
```
