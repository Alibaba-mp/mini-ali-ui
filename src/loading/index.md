# Loading 加载

loading 加载动画。

## 扫码体验

![image](http://mdn.alipayobjects.com/afts/img/A*8spKR7IFKE0AAAAAAAAAAABkAa8wAA/original?bz=openpt_doc&t=4jH-vtQojHPwBwOHtiLKtwAAAABkMK8AAAAA)

## 属性介绍

| 属性名 | 类型 | 默认值 | 可选项 | 描述 | 最低版本 | 必填 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| className | String| - | - | 自定义class | - | - |
| size | String | 100px | - | 设置 loading 尺寸大小 | - | - |
| color | String | #1677ff | - | 设置 loading 的颜色 | - | - |

## Bug & Tip
* `size` 的值需要带单位；
* `color` 的值仅支持颜色关键词和十六进制的颜色值表示方式，如 `red`、`#F00`等；
* [loading 组件有关 size 属性的说明](https://github.com/Alibaba-mp/mini-ali-ui/blob/master/CHANGELOG.md#123)；

## 代码示例
```json
{
  "defaultTitle": "Loading",
  "usingComponents": {
    "loading": "mini-ali-ui/es/loading/index",
    "container": "mini-ali-ui/es/container/index"
  }
}
```

```xml
加载中<loading size="80rpx" className="inlineBlock" />
<container hasTitle='{{true}}' title='loading size="6rpx"'>
  <loading size="6rpx" color="red" />
</container>
<container hasTitle='{{true}}' title='loading height="36rpx"'>
  <loading height="36rpx" color="red" />
</container>
<container hasTitle='{{true}}' title='loading height="36rpx" size="6rpx"'>
  <loading height="36rpx" size="6rpx" color="red" />
</container>
<container hasTitle='{{true}}' title='loading size="100px"'>
  <loading size="100px" color="red" />
</container>
<container hasTitle='{{true}}' title='loading'>
  <loading color="blue" />
</container>
```

```css
.inlineBlock {
  display: inline-block;
  vertical-align: middle;
}
```