# Button 按钮

按钮，用户只需单击一下即可执行操作并做出选择。常用于表单提交、界面跳转、模块引导点击。具体用法和小程序框架中 button 保持一致，在 button 基础上做了样式的封装。


## 扫码体验：
待统一补充

## 截图
<img src="https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*ke0cQJqPhZwAAAAAAAAAAABkARQnAQ" />

## 属性介绍
| 属性 | 类型 | 默认值 | 可选值 | 描述 | 必填 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| type | String | default | default, primary, ghost, warn,  warn-ghost, text, light | 按钮样式 | - |
| subtitle | String | - | - | 子标题 | - |
| shape | String | default | default, capsule | 按钮形状 | - |
| capsuleSize | String | medium | large, medium, small | 胶囊按钮大小 | - | 
| capsuleMinWidth | Boolean | false | true, false | 是否启用胶囊按钮最小宽度 | - | 
| disabled | Boolean | false | true, false | 是否禁用 | - | 
| showLoading | Boolean | false | true, false | 按钮文字前是否带 loading 图标 | - |
| hover-class | String | button-hover | - |按钮按下去的样式类。`button-hover` 默认为 `{background-color: rgba(0, 0, 0, 0.1); opacity: 0.7;}`，`hover-class="none"` 时表示没有点击态效果 | - |
| hover-start-time | Number | 20 | - | 按住后多少事件后出现点击状态，单位毫秒 | -  |
| hover-stay-time | Number | 70 | - | 手指松开后点击状态保留时间，单位毫秒 | - |
| hover-stop-propagation | Boolean | false | true, false | 是否阻止当前元素的祖先元素出现点击态 [1.10.0](https://docs.alipay.com/mini/framework/compatibility) | - |
| form-type | String | - | - | 有效值：submit, reset，用于 `<form />` 组件，点击分别会触发 submit/reset 事件 | - |
| [open-type](#aaf4ca5e) | String | - | -| 开放能力 [1.1.0](https://docs.alipay.com/mini/framework/compatibility) | - |
| [scope](#13bf6c61) | String | - | - | 当 `open-type` 为 `getAuthorize` 时有效 [1.11.0](https://docs.alipay.com/mini/framework/compatibility) |- |
| onTap | EventHandle | - | - | 点击 | - |
| app-parameter | String | - | - | 打开 APP 时，向 APP 传递的参数，`open-type="launchApp"` 时有效 | - |
| public-id | String | - | - | 生活号 id, 必须是当前小程序同主体且已关联的生活号，`open-type="lifestyle"` 时有效 | - |


## 示例

```json
{
  "defaultTitle": "Button",
  "usingComponents": {
    "button": "mini-ali-ui/es/button/index",
    "radio": "mini-ali-ui/es/am-radio/index",
    "checkbox": "mini-ali-ui/es/am-checkbox/index"
  }
}

```

```html
<view class="container">
  <button onTap="onTest" showLoading="{{showLoading}}" dataName="{{dataName}}" type="{{type}}" subtitle="{{subtitle}}" disabled="{{disabled}}" shape="{{shape}}" capsuleSize="{{capsuleSize}}" capsuleMinWidth="{{capsuleMinWidth}}">
    {{title}}
  </button>

  <view>主标题</view>
  <input value="{{title}}" onInput="titleChange"/>
  <view>副标题</view>
  <input value="{{subtitle}}" onInput="subtitleChange"/>
  <view>按钮类型</view>
  <radio-group class="radio-group" onChange="typeChange" name="type">
    <label class="radio" a:for="{{types}}" key="label-{{index}}">
      <radio value="{{item.name}}" checked="{{item.checked}}" />
      <text class="radio-text">{{item.value}}</text>
    </label>
  </radio-group>
  <view>形状</view>
  <radio-group class="radio-group" onChange="shapeChange" name="shape">
    <label class="radio" a:for="{{shapes}}" key="label-{{index}}">
      <radio value="{{item.name}}" checked="{{item.checked}}" />
      <text class="radio-text">{{item.value}}</text>
    </label>
  </radio-group>
  <view>胶囊按钮大小</view>
  <radio-group class="radio-group" onChange="sizeChange" name="size">
    <label class="radio" a:for="{{capsuleSizes}}" key="label-{{index}}">
      <radio value="{{item.name}}" checked="{{item.checked}}" />
      <text class="radio-text">{{item.value}}</text>
    </label>
  </radio-group>
  <view>是否禁用</view>
  <checkbox onChange='onDisableChange'/>
  <view>是否限制胶囊按钮最小宽度</view>
  <checkbox onChange='onMinWidthChange'/>
  <view>是否现实loading</view>
  <checkbox onChange='onLoadingChange'/>
</view>
```
```css
.container {
  padding: 20rpx;
}

.container button {
  margin-bottom: 24rpx;
}
```
```javascript
Page({
  data: {
    title: '按钮操作 Normal',
    subtitle: '',
    disabled: false,
    dataName: '1',
    type: '',
    shape: 'default',
    capsuleSize: 'medium',
    capsuleMinWidth: false,
    showLoading: false,
    types: [
      { name: 'default', value: 'default', checked: true },
      { name: 'primary', value: 'primary' },
      { name: 'ghost', value: 'ghost' },
      { name: 'text', value: 'text' },
      { name: 'warn', value: 'warn' },
      { name: 'warn-ghost', value: 'warn-ghost' },
      { name: 'light', value: 'light' },
    ],
    shapes: [
      { name: 'default', value: 'default', checked: true },
      { name: 'capsule', value: 'capsule' },
    ],
    capsuleSizes: [
      { name: 'small', value: 'small' },
      { name: 'medium', value: 'medium', checked: true },
      { name: 'large', value: 'large' },
    ],
  },
  onLoad() {
  },
  typeChange(e) {
    this.setData({
      type: e.detail.value,
    });
  },
  shapeChange(e) {
    this.setData({
      shape: e.detail.value,
    });
  },
  sizeChange(e) {
    this.setData({
      capsuleSize: e.detail.value,
    });
  },
  titleChange(e) {
    this.setData({
      title: e.detail.value,
    });
  },
  subtitleChange(e) {
    this.setData({
      subtitle: e.detail.value,
    });
  },
  onDisableChange(e) {
    this.setData({
      disabled: e.detail.value,
    });
  },
  onMinWidthChange(e) {
    this.setData({
      capsuleMinWidth: e.detail.value,
    });
  },
  onTap() {
    // e.target.dataset.name
  },
  onLoadingChange(e) {
    this.setData({
      showLoading: e.detail.value,
    });
  },
});

```