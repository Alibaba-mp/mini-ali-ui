# VerifyCode 验证码输入。

验证码输入框。  

受控模式，使用时需要用onInput事件来回设value。

## 预览
<img width="375" src="https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*7T1KQp58uCkAAAAAAAAAAABkARQnAQ">

## 扫码体验

![image](http://mdn.alipayobjects.com/afts/img/A*0FtBQ5-KZ58AAAAAAAAAAABkAa8wAA/original?bz=openpt_doc&t=ptMqEchgrzRIQ4B5--IstQAAAABkMK8AAAAA)



## 属性
| 属性名           | 类型                | 默认值 | 可选值                      | 描述                                                      | 最低版本 | 必填 |
| ---------------- | ------------------- | ------ | --------------------------- | --------------------------------------------------------- | -------- | ---- |
| className        | String              | ''     | -                           | 自定义的class                                             |          | 否   |
| label            | String              | '验证码'| -                           | 自定义label文案                                           |          | 否   |
| labelCls         | String              | ''     | -                           | 自定义label的class                                        |          | 否   |
| inputCls         | String              | ''     | -                           | 自定义input的class                                        |          | 否   |
| last             | Boolean             | false  | -                           | 是否最后一行                                              |          | 否   |
| value            | String              | ''     | -                           | 输入框值                                                 |          | 否   |
| name             | String              | ''     | -                           | 组件名字，用于表单提交获取数据                            |          | 否   |
| placeholder      | String              | ''     | -                           | 占位符                                                    |          | 否   |
| placeholderStyle | String              | ''     | -                           | 指定 placeholder 的样式                                   |          | 否   |
| placeholderClass | String              | ''     | -                           | 指定 placeholder 的样式类                                 |          | 否   |
| disabled         | Boolean             | false  | -                           | 是否禁用                                                  |          | 否   |
| maxlength        | Number              | 140    | -                           | 最大长度                                                  |          | 否   |
| focus            | Boolean             | false  | -                           | 获取焦点                                                  |          | 否   |
| clear            | Boolean             | true   | -                           | 是否带清除功能，仅disabled为false才生效                   |          | 否   |
| onInput          | (e: Object) => void |        | -                           | 键盘输入时触发input事件                                   |          | 否   |
| onConfirm        | (e: Object) => void |        | -                           | 点击键盘完成时触发                                        |          | 否   |
| onFocus          | (e: Object) => void |        | -                           | 聚焦时触发                                                |          | 否   |
| onBlur           | (e: Object) => void |        | -                           | 失去焦点时触发                                            |          | 否   |
| onClear          | () => void          |        | -                           | 点击清除icon时触发                                        |          | 否   |
| countDown | Number | 60 | - | 发送倒计时时间，单位秒 | - | 否 |
| txtSend | String | '发送验证码' | - | 发送按钮的默认文案 | [1.1.2](https://www.npmjs.com/package/mini-ali-ui?activeTab=versions) | 否 |
| txtSendAgain | String | '重发验证码' | - | 重发按钮的默认文案 | [1.1.2](https://www.npmjs.com/package/mini-ali-ui?activeTab=versions) | 否 |
| txtCountDown | String | '秒后重试' | - | 按钮倒计时的默认文案（不包含倒计时） | [1.1.2](https://www.npmjs.com/package/mini-ali-ui?activeTab=versions) | 否 |
| initActive | Boolean | false | - | 是否主动触发发送按钮 | [1.1.3](https://www.npmjs.com/package/mini-ali-ui?activeTab=versions) | 否 |

## 示例

### json
```json
{
  "defaultTitle": "Verify-code",
  "usingComponents": {
    "verify-code": "mini-ali-ui/es/verify-code/index"
  }
}
```
### axml
```xml
<view>
  <view style="margin-top: 10px;" />
  <view style="padding: 0 10px;">验证码框</view>
  <view style="margin-top: 10px;" />
  <verify-code
    onInput="onInput" 
    value="{{verifyCode}}" 
    onClear="onClear" 
    last="{{true}}" 
    countDown="{{10}}" 
    onSend="onSend"></verify-code>
</view>
```

### js
```javascript
Page({
  data: {
    verifyCode: '',
  },
  onSend() {
    my.alert({
      title: 'verify code sent',
    });
  },
  onInput(e) {
    this.setData({
      verifyCode: e.detail.value,
    });
  },
});
```
