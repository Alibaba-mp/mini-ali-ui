# Loading 加载

loading 加载动画。

## 扫码体验

![image](http://mdn.alipayobjects.com/afts/img/A*8spKR7IFKE0AAAAAAAAAAABkAa8wAA/original?bz=openpt_doc&t=4jH-vtQojHPwBwOHtiLKtwAAAABkMK8AAAAA)

## 属性介绍

| 属性名 | 类型 | 默认值 | 可选项 | 描述 | 最低版本 | 必填 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| className | String| - | - | 自定义class | - | - |
| size | String | - | - | 设置 loading 尺寸大小 | - | - |
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
<loading color="rgba(255, 0, 0, .3)" />
<loading color="#1677ff" />
```
