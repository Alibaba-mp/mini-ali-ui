# Popover 气泡

气泡。

## 预览
<img src="https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*vTy0QqLynmQAAAAAAAAAAABkARQnAQ" width="375" />

## 扫码体验

![image](http://mdn.alipayobjects.com/afts/img/A*KRs3QZ_zR8AAAAAAAAAAAABkAa8wAA/original?bz=openpt_doc&t=HwC0KCFWIPKOGVKzvlzw9gAAAABkMK8AAAAA)




## popover 属性

| 属性名    | 类型    | 默认值      | 可选项                                                       | 描述           | 最低版本 | 必填 |
| --------- | ------- | ----------- | ------------------------------------------------------------ | -------------- | -------- | ---- |
| className | String  |             | -                                                            | 最外层覆盖样式 | -        | -    |
| show      | Boolean | false       | -                                                            | 气泡是否展示   | -        | true |
| showMask  | Boolean | true        | -                                                            | 蒙层是否展示   | -        | -    |
| position  | String  | bottomRight | `top`<br/>`topRight`<br/>`topLeft`<br/> `bottom`<br/>`bottomLeft`<br/>`bottomRight`<br/>`right`<br/>`rightTop`<br/>`rightBottom`<br/>`left`<br/>`leftBottom`<br/> `leftTop` | 气泡位置       | -        | -    |
| fixMaskFull | Boolean | false | - | 用以解决遮罩层受到 `transform` 影响而显示不全的问题 | [1.0.11](https://www.npmjs.com/package/mini-ali-ui?activeTab=versions) | - |

## popover-item 属性

| 属性名      | 类型       | 默认值 | 可选项 | 描述         | 最低版本 | 必填 |
| ----------- | ---------- | ------ | ------ | ------------ | -------- | ---- |
| className   | String     | -      | -      | 单项样式     | -        | -    |
| onItemClick | () => void | -      | -      | 单项点击事件 | -        | -    |
| iconType | String | - | 参考 icon 组件 | 所有的 type 值均来自 icon 组件 | - | - |
| iconURL | String | - | - | 图片的URL | [1.1.1](https://www.npmjs.com/package/mini-ali-ui?activeTab=versions) | - |


## 示例

### json
```json
{
  "defaultTitle": "Popover",
  "usingComponents": {
    "popover": "mini-ali-ui/es/popover/index",
    "popover-item": "mini-ali-ui/es/popover/popover-item/index"
  }
}
```

### axml
```xml
<view class="demo-popover">
  <popover
    position="{{position}}"
    show="{{show}}"
    showMask="{{showMask}}"
    onMaskClick="onMaskClick"
  >
    <view class="demo-popover-btn" onTap="onShowPopoverTap">点击{{show ? '隐藏' : '显示'}}</view>
    <view slot="items">
      <popover-item onItemClick="itemTap1" iconURL="{{showIcon ? 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ' : ''}}" data-direction="{{position}}">
        <text>{{position}}</text>
      </popover-item>
      <popover-item onItemClick="itemTap2" iconType="{{showIcon ? 'qr' : ''}}" data-index="{{2}}">
        <text>line2</text>
      </popover-item>
    </view>
  </popover>
</view>
<view class="demo-popover-test-btns">
  <button class="demo-popover-test-btn" onTap="onNextPositionTap">下个位置</button>
  <button class="demo-popover-test-btn" onTap="onMaskChangeTap">蒙层{{showMask ? '隐藏' : '显示'}}</button>
  <button class="demo-popover-test-btn" onTap="onIconChangeTap">显示/隐藏图标</button>
</view>
```

### js
```javascript
const position = ['top', 'topRight', 'rightTop', 'right', 'rightBottom', 'bottomRight', 'bottom', 'bottomLeft', 'leftBottom', 'left', 'leftTop', 'topLeft'];
Page({
  data: {
    position: position[0],
    show: false,
    showMask: true,
    showIcon: true,
  },
  onShowPopoverTap() {
    this.setData({
      show: !this.data.show,
    });
  },
  onNextPositionTap() {
    let index = position.indexOf(this.data.position);
    index = index >= position.length - 1 ? 0 : index + 1;
    this.setData({
      show: true,
      position: position[index],
    });
  },
  onMaskChangeTap() {
    this.setData({
      showMask: !this.data.showMask,
    });
  },
  onIconChangeTap() {
    this.setData({
      showIcon: !this.data.showIcon,
    });
  },
  onMaskClick() {
    this.setData({
      show: false,
    });
  },
  itemTap1(e) {
    my.alert({
      content: `点击_${e.currentTarget.dataset.direction}`,
    });
  },
  itemTap2(e) {
    my.alert({
      content: `点击_${e.currentTarget.dataset.index}`,
    });
  },
});
```

### acss
```css
.demo-popover {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;
}
.demo-popover-btn {
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  background-color: #fff;
  border: 1px solid #dddddd;
  border-radius: 2px;
}
.demo-popover-test-btns {
  display: flex;
  justify-content: space-around;
}
.demo-popover-test-btn {
  width: 45%;
}
```