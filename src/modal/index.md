## Modal 对话框

对话框，当应用中需要比较明显的对用户当前的操作行为进行警示或提醒时，可以使用对话框。用户需要针对对话框进行操作后方可结束。


## 截图
<img src="https://gw.alipayobjects.com/mdn/rms_349abe/afts/img/A*mVtGR7j1kU0AAAAAAAAAAABkARQnAQ" />

## 属性介绍
| 属性 | 类型 | 默认值 | 可选值 | 描述 | 必填 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| className | String | - | - | 自定义class | - |
| show | Boolean | false | true, false | 是否展示`modal` | - |
| showClose | Boolean | false | true, false | 是否渲染`关闭` | - |
| mask | Boolean | true | true, false | 是否展示蒙层 | - |
| closeType | String | 0 | 0, 1 | 关闭图表类型 0：灰色图标 1：白色图标 | - |
| onModalClick | EventHandle | () => void | - | 选择区间时的回调 | - |
| onModalClose | EventHandle | () => void | - | 点击`关闭`的回调, `showClose`为false时无需设置 | - |
| topImage | String | - | - | 顶部图片 | - |
| topImageSize | String | md | lg, md, sm | 顶部图片规则 | - |
| buttons | Array\<Object\> | md | - | 底部自定义多按钮, 详情见buttons配置 | - |
| onButtonClick | EventHandle | (e: Object) => void | - | 点击`buttons`部分的回调 | - |
| buttonsLayout | String | horizontal | horizontal, vertical | 设置`buttons`的对齐方式 | - |
| advice | Boolean | false | true, false | 是否是运营类弹窗 | - |
| zIndex | String\|Number | - | - | 设置弹框层级 | - |
| disableScroll | Boolean | false | true, false | modal展示时是否禁止页面滚动（**以真机效果为准**） | - |

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
