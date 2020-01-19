# PageResult 异常页面

小程序异常页面 / 局部异常组件。

## 扫码体验：

<img src="https://gw.alipayobjects.com/zos/rmsportal/ZCkOkoTgcKkhEhqHbnBL.jpeg" width="154" height="190" />

## 截图

<img src="https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*JEeUR5IS5uoAAAAAAAAAAABkARQnAQ" width="187" height="333" />

## 属性介绍
| 属性名 | 类型 | 默认值 | 可选项 | 描述 | 最低版本 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| type | String | network | 网络异常`network`、服务繁忙`busy`、服务异常`error`、空状态`empty`、用户注销`logoff`、付款失败`payment`、红包领空`redpacket` | 异常页面类型 | - |
| local | Boolean | false | - | 是否是局部异常内容 | - |
| title | String | 默认文案 | - | 错误提示标题 (最多一行) | - |
| brief | String | 默认文案 | - | 错误提示简要 (最多两行) | - |
| footer | Array[{text}] | - | - | 错误处理按钮文案（一个或两个按钮） | - |
| onTapLeft | EventHandle | e => {} | - |（左侧）按钮事件处理函数 | - |
| onTapRight | EventHandle | e => {} | - |（右侧）按钮事件处理函数 | - |
| isCountDown | Boolean | false | - | 是否设置倒计时模式 | - |
| countDownText | String | `重新刷新` | - | 倒计时提示的文案 | - |




### 属性注意事项说明

- 异常组件新增了五个非必选属性 `footer`, `onTapLeft`, `onTapRight`, `isCountDown`, `countDownText`;
- 组件提供默认 slot 的处理按钮（至多两个按钮），开发者也可自定义 slot 覆盖默认内容;
- 如使用组件规范的处理按钮，需在 `footer<>` 定义按钮的文案，配合 `onTapLeft` 和 `onTapRight` 方法，分别对应 `footer[0]` 和 `footer[1]` 的按钮实例（若只有一个按钮，只需定义`onTapLeft`属性）;
- 如需将操作按钮设置倒计时模式（仅一个按钮），可配置 `isCountDown` 属性，约定 10 秒的倒计时按钮（与 native 规范一致），默认文案为 `10秒后重新刷新`，可通过 `countDownText` 配置替代 `重新刷新` 文案;
- 设置了倒计时模式，需要配合 `footer` 和 `onTapLeft` 属性定义倒计时后的处理按钮。


## 示例

```json
{
  "defaultTitle": "异常反馈",
  "usingComponents": {
    "page-result": "mini-ali-ui/es/page-result/index"
  }
}
```

```html
<page-result
  type="network"
  title="网络不给力"
  brief="世界上最遥远的距离莫过于此"
  footer="{{footer}}"
  onTapLeft="onTapLeft"
  onTapRight="onTapRight"
/>
<!-- 兼容原组件写法 -->
<page-result
  type="network"
  title="网络不给力"
  brief="世界上最遥远的距离莫过于此"
>
  <view class="am-page-result-btns">
    <view onTap="backHome">回到首页</view>
    <view>示例按钮</view>
  </view>
</page-result>
```

```js
Page({
  data: {
    footer: [{
      text: '修复',
    }, {
      text: '刷新',
    }],
  },
  onTapLeft(e) {
    console.log(e, 'onTapLeft');
  },
  onTapRight(e) {
    console.log(e, 'onTapRight');
  },
});

```

> 倒计时模式，10 秒后可点击按钮（与 native 规范一致）
```html
<!-- 倒计时模式 -->
<page-result
  type="busy"
  footer="{{footer}}"
  isCountDown="{{true}}"
  onTapLeft="onTapLeft"
/>

```

```js
Page({
  data: {
    footer: [{
      text: '刷新',
    }],
  },
  onTapLeft(e) {
    console.log(e, 'onTapLeft');
  },
});
```