## Modal 对话框

对话框。

扫码体验：

<img src="https://gw.alipayobjects.com/zos/rmsportal/heaiwgCysVcdCUYmUjri.jpeg" width="154" height="190" />

| 属性名 | 描述 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| className| 自定义class | String| |
| show | 是否展示`modal` | Boolean | false |
| showClose | 是否渲染`关闭` | Boolean | true |
| mask | 是否展示蒙层 | Boolean | true |
| closeType | 关闭图表类型 0：灰色图标 1：白色图标 | String | 0 |
| onModalClick | 点击`footer`部分的回调 | () => void |  |
| onModalClose | 点击`关闭`的回调, `showClose`为false时无需设置  | () => void |  |
| topImage | 顶部图片 | String |  |
| topImageSize | 顶部图片规则，可选值：`lg`、`md`、`sm`  | String | md |
| buttons| 底部自定义多按钮 | Array\<Object\> | 详情见buttons配置 |
| onButtonClick| 点击`buttons`部分的回调 | (e: Object) => void|  |
| buttonsLayout| 设置`buttons`的对齐方式，`vertical`和 `horizontal` | String | horizontal |
| advice| 是否是运营类弹窗 | Boolean | false |
| zIndex | 设置弹框层级 | String\|Number |  |
| disableScroll | modal展示时是否禁止页面滚动（**以真机效果为准**） | Boolean | true | false |

## buttons
提供按钮组配置，每一项表示一个按钮，每一项的属性为
| 属性名 | 描述 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| text| 按钮的文本 | String| |
| extClass | 按钮自定义Class，可用户定制按钮样式 | String |  |

## slots

| slotName | 说明 |
| ---- | ---- |
| header | 可选，modal头部 |
| footer | 可选，modal尾部 |


## 示例

```json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents": {
    "modal": "mini-ali-ui/dist/es/modal/index"
  }
}
```

```html
<view>
  <button onTap="openModal">打开modal</button>
  <modal
    show="{{modalOpened}}"
    onModalClick="onModalClick"
    onModalClose="onModalClose"
    topImage="https://gw.alipayobjects.com/zos/rmsportal/yFeFExbGpDxvDYnKHcrs.png"
  >
    <view slot="header">标题单行</view>
    说明当前状态、提示用户解决方案，最好不要超过两行。
    <view slot="footer">确定</view>
  </modal>
</view>
```

```javascript
Page({
  data: {
    modalOpened: false,
  },
  openModal() {
    this.setData({
      modalOpened: true,
    });
  },
  onModalClick() {
    this.setData({
      modalOpened: false,
    });
  },
  onModalClose() {
    this.setData({
      modalOpened: false,
    });
  }
});
```
