## Message 结果页

结果页。

## 截图
<img src="https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*ppExSYkhPKsAAAAAAAAAAABkARQnAQ"/>

## 属性介绍

| 属性名 |  类型 | 默认值 | 可选项 | 必选 | 描述 |
| ----- | ----- | ----- | ---- | ---- | ---- |
| className| String | - | | - | 自定义的class |
| type | String | success|success、fail、info、warn、waiting | - | 五种状态类型，默认为success |
| title | String  | -|- | yes | 主标题 |
| subTitle | String  | - | - | - | 副标题 |
| mainButton | Object<buttonText, disabled> | - | - | - | 主按钮的文本和可用性相关 |
| subButton | Object<buttonText, disabled>  | - | - | - | 副按钮的文本和可用性相关 |
| onTapMain | () => {}  | - | - | - | 主按钮的点击函数 |
| onTapSub | () => {}  | - | - | - | 副按钮的点击函数 |

## 示例

```json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents": {
    "message": "mini-ali-ui/es/message/index"
  }
}
```

```xml
<view>
  <message
    title="{{title}}"
    subTitle="{{subTitle}}"
    type="{{type}}"
    mainButton="{{mainButton}}" 
    subButton="{{subButton}}" 
    onTapMain="goBack">
  </message>
  <radio-group class="radio-group" onChange="radioChange" name="lib">
    <label class="radio" a:for="{{items}}" key="label-{{index}}">
      <radio value="{{item.name}}" checked="{{item.checked}}" />
      <text class="radio-text">{{item.value}}</text>
    </label>
 </radio-group>
 <view>主标题</view>
 <input value="{{title}}" onInput="titleChange"/>
 <view>副标题</view>
 <textarea value="{{subTitle}}" onInput="subtitleChange"/>
 <checkbox onChange='onChange'/>显示按钮
</view>

``` 

```javascript
Page({
  data: {
    title: '操作成功',
    subTitle: '内容详情可折行，建议不超过两内容详情可折行，建议不超过两行',
    type: 'success',
    items: [
      { name: 'success', value: 'success', checked: true },
      { name: 'fail', value: 'fail' },
      { name: 'info', value: 'info' },
      { name: 'warn', value: 'warn' },
      { name: 'waiting', value: 'waiting' },
    ],
  },
  onLoad() {
  },
  goBack() {
    my.navigateBack();
  },
  radioChange(e) {
    this.setData({
      type: e.detail.value,
    });
  },
  titleChange(e) {
    this.setData({
      title: e.detail.value,
    });
  },
  subtitleChange(e) {
    this.setData({
      subTitle: e.detail.value,
    });
  },
  onChange(e) {
    if (e.detail.value) {
      this.setData({
        mainButton: {
          buttonText: '主要操作',
        },
        subButton: {
          buttonText: '辅助操作',
        },
      });
    } else {
      this.setData({
        mainButton: null,
        subButton: null,
      });
    }
  },
});

```