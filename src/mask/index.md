# Mask 遮罩蒙层

可用于需要遮罩蒙层的弹层元素。

## 截图
![mask 遮罩蒙层](https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*Cu8kT4Xm8jcAAAAAAAAAAABkARQnAQ)

## 属性介绍

| 属性名 | 类型 | 默认值 | 可选项 | 描述 | 最低版本 | 必填 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| type | String | product | product、market | 显示不同透明度的蒙层 | - | true |
| maskZindex| Number | - | - | 自定义蒙层的 `z-index` 层级 | - | - |
| show | Boolean | true | - | 是否显示蒙层 | - | - |
| onMaskTap | EventHandle | () => { } | - | 蒙层点击事件 | - | - |

## 代码示例
```json
{
  "defaultTitle": "mask 遮罩蒙层",
  "usingComponents":{
    "mask": "mini-ali-ui/es/mask/index"
  }
}
```

```xml
<mask type="{{type}}" show="{{show}}" maskZindex="{{maskZindex}}" onMaskTap="maskClick"></mask>
```

```javascript
Page({
  data: {
    type: 'market',
    maskZindex: 10,
  },
  maskClick() {
    if (this.data.type === 'market') {
      this.setData({
        type: 'product',
      });
    } else {
      this.setData({
        type: 'market',
        show: false,
      });
    }
  },
});
```