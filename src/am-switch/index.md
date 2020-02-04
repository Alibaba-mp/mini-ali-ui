# AMSwitch 开关

开关。具体用法和小程序框架中 switch 保持一致，在 switch 基础上做了样式的封装。


## 截图
<img src="https://gw.alipayobjects.com/mdn/rms_a02d41/afts/img/A*O6T9QJCWXxoAAAAAAAAAAABkARQnAQ" />

## 属性介绍
| 属性名 | 类型 | 默认值 | 可选值 | 描述 | 必填 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| name | String | - | - | 组件名字，用于表单提交获取数据 | - |
| checked | Boolean | false | false, true | 当前是否选中，可用来设置默认选中 | - |
| disabled | Boolean | false | false, true | 是否禁用 | - |
| onChange | (e: Object) => void | - | - | change 事件触发的回调函数 | - |
| color | String | - | 同 CSS 色值 | 组件颜色 | - |
| controlled | Boolean | false | false, true| 是否为受控组件，为 true 时，checked 会完全受 setData 控制	| - |

## tips
iOS 和安卓展现样式有所差异。iOS 单选开关为圆形；安卓单选开关为方形。
## 示例

```json
{
  "usingComponents": {
    "am-switch": "mini-ali-ui/es/am-switch/index"
  }
}
```

```html
<view class="page">
  <view class="page-description">开关</view>
  <view class="page-section">
    <view class="page-section-demo switch-list">
      <view class="switch-item">
        <am-switch checked onChange="switch1Change"/>
      </view>
      <view class="switch-item">
        <am-switch color="red" checked />
      </view>
    </view>
  </view>
</view>
```
```javascript
Page({
  switch1Change(e) {
    console.log('switch1 发生 change 事件，携带值为', e.detail.value);
  },
});
```