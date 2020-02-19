# Popover 气泡

气泡。

## 预览
<img src="https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*vTy0QqLynmQAAAAAAAAAAABkARQnAQ" width="375" />


## popover 属性

| 属性名    | 类型    | 默认值      | 可选项                                                       | 描述           | 最低版本 | 必填 |
| --------- | ------- | ----------- | ------------------------------------------------------------ | -------------- | -------- | ---- |
| className | String  |             | -                                                            | 最外层覆盖样式 | -        | -    |
| show      | Boolean | false       | -                                                            | 气泡是否展示   | -        | true |
| showMask  | Boolean | true        | -                                                            | 蒙层是否展示   | -        | -    |
| position  | String  | bottomRight | `top`<br/>`topRight`<br/>`topLeft`<br/> `bottom`<br/>`bottomLeft`<br/>`bottomRight`<br/>`right`<br/>`rightTop`<br/>`rightBottom`<br/>`left`<br/>`leftBottom`<br/> `leftTop` | 气泡位置       | -        | -    |

## popover-item 属性

| 属性名      | 类型       | 默认值 | 可选项 | 描述         | 最低版本 | 必填 |
| ----------- | ---------- | ------ | ------ | ------------ | -------- | ---- |
| className   | String     | -      | -      | 单项样式     | -        | -    |
| onItemClick | () => void | -      | -      | 单项点击事件 | -        | -    |
| iconType | String | - | 参考 icon 组件 | 所有的 type 值均来自 icon 组件 | - | - |


## 示例

### json
```json
{  
  "usingComponents": {
    "popover": "mini-ali-ui/es/popover/index",
    "popover-item": "mini-ali-ui/es/popover/popover-item/index"
  }
}
```

### axml
```xml
<popover
  position="{{position}}"
  show="{{show}}"
  showMask="{{showMask}}"
  onMaskClick="onMaskClick"
>
  <view onTap="onShowPopoverTap">点击显示</view>
  <view slot="items">
    <popover-item onItemClick="itemTap1">
      <text>line1</text>
    </popover-item>
    <popover-item>
      <text>line2</text>
    </popover-item>
  </view>
</popover>
```

### js
```javascript
Page({
  data: {
    position: 'bottomRight',
    show: false,
    showMask: true,
  },
  onMaskClick() {
    this.setData({
      show: false,
    });
  },
  onShowPopoverTap() {
    this.setData({
      show: true,
    });
  },
  itemTap1() {
    my.alert({
      content: '点击1',
    });
  },
});
```