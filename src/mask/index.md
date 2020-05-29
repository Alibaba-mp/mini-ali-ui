# Mask 遮罩蒙层

可用于需要遮罩蒙层的弹层元素。

## 截图
![mask 遮罩蒙层](https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*Cu8kT4Xm8jcAAAAAAAAAAABkARQnAQ)

## 扫码体验

![image](http://mdn.alipayobjects.com/afts/img/A*R7BBTYwB74oAAAAAAAAAAABkAa8wAA/original?bz=openpt_doc&t=sa6Mi3J_bvFm4MxiD-d6bwAAAABkMK8AAAAA)



## 属性介绍

| 属性名 | 类型 | 默认值 | 可选项 | 描述 | 最低版本 | 必填 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| type | String | product | product、market | 显示不同透明度的蒙层 | - | true |
| maskZindex| Number | - | - | 自定义蒙层的 `z-index` 层级 | - | - |
| show | Boolean | true | - | 是否显示蒙层 | - | - |
| onMaskTap | EventHandle | () => { } | - | 蒙层点击事件 | - | - |
| fixMaskFull | Boolean | false | - | 用以解决遮罩层受到 `transform` 影响而显示不全的问题 | [1.0.11](https://www.npmjs.com/package/mini-ali-ui?activeTab=versions) | - |

## 代码示例
```json
{
  "defaultTitle": "Mask",
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