# PageResult 异常页面

异常页面。

扫码体验：

<img src="https://gw.alipayobjects.com/zos/rmsportal/ZCkOkoTgcKkhEhqHbnBL.jpeg" width="154" height="190" />


| 属性名 | 描述 | 类型 | 默认值 | 必选 | 说明 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| type | 异常页面类型，可选，网络异常`network`, 服务繁忙`busy`, 服务异常`error`, 空状态`empty`, 用户注销`logoff`, 付款失败`payment`, 红包领空`redpacket` | String | network | false | 无 |
| local | 是否是局部异常内容 | Boolean | false | false | 无  |
| title | 错误提示标题 | String |  | false | 最多一行 |
| brief | 错误提示简要 | String |  | false | 最多两行 | 
| footer | 错误处理按钮文案及是否禁用（仅支持一个或两个按钮，若数组长度超出只取前两个） | `Array<Object<text, disabled>>` | null | false | 无 |
| onTapLeft | （左侧）按钮事件处理函数 | (e) => {}  | (e) => {} | false | 无 | 
| onTapRight | （右侧）按钮事件处理函数 | (e) => {}  | (e) => {} | false | 无 | 

> ⚠️ `升级提示`：
>
> 异常组件新增了三个非必选属性 `footer`, `onTapLeft`, `onTapRight`;  
> 组件提供默认 slot 的处理按钮（至多两个按钮），开发者也可自定义 slot 覆盖默认内容；  
> 如使用组件规范的处理按钮，需在 `footer<>` 定义按钮的文案和是否禁用属性，配合 `onTapLeft` 和 `onTapRight` 方法，分别对应 `footer[0]` 和 `footer[1]` 的按钮实例（若只有一个按钮，只需定义`onTapLeft`属性）。


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
      disabled: true,
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