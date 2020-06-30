# Popup 弹出菜单

弹出菜单。

## 扫码体验

![image](http://mdn.alipayobjects.com/afts/img/A*ATcjRKr8C5AAAAAAAAAAAABkAa8wAA/original?bz=openpt_doc&t=i6VQeJ7lemdBInJkDOPs5QAAAABkMK8AAAAA)



## 属性介绍


| 属性名 | 描述 | 类型 | 默认值 | 必选 |
| ---- | ---- | ---- | ---- | ---- |
| className | 自定义class | String | | - |
| show | 是否显示菜单 | Boolean | false | - |
| animation | 是否开启动画 | Boolean | true | - |
| mask | 是否显示mask，不显示时点击外部不会触发onClose | Boolean| true | true |
| position | 控制从什么方向弹出菜单，bottom表示底部，left表示左侧，top表示顶部，right表示右侧 | String | bottom | true |
| disableScroll | 展示mask时是否禁止页面滚动 | Boolean | true | - |
| zIndex | 定义popup的层级 | Number | - | - |

### slots

可以在popup组件中定义要展示部分，具体可参看下面代码示例。

## 代码示例

```json
{
  "defaultTitle": "Popup",
  "usingComponents": {
    "popup": "mini-ali-ui/es/popup/index"
  }
}
```

```xml
<view>
  <view class="btn-container">
    <button onTap="onTopBtnTap">弹出popup</button>
  </view>
  <popup show="{{showTop}}" position="top" onClose="onPopupClose">
    <view style="height: 200px; background: #fff; display: flex; justify-content: center; align-items: center;">hello world</view>
  </popup>
</view>
```

```javascript
Page({
  data: {
    showTop: false,
  },
  onTopBtnTap() {
    this.setData({
      showTop: true,
    });
  },
  onPopupClose() {
    this.setData({
      showTop: false,
    });
  },
});
```
