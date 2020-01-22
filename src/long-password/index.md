# LongPassword 长密码框

长密码框  
受控模式，使用时需要用onInput事件来回设value。

## 预览
<img width="375" src="https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*zDnVSq3-tiUAAAAAAAAAAABkARQnAQ">

## 属性
| 属性名           | 类型                | 默认值 | 可选值                      | 描述                                                      | 最低版本 | 必填 |
| ---------------- | ------------------- | ------ | --------------------------- | --------------------------------------------------------- | -------- | ---- |
| className        | String              | ''     | -                           | 自定义的class                                             |          | 否   |
| inputCls         | String              | ''     | -                           | 自定义input的class                                        |          | 否   |
| last             | Boolean             | false  | -                           | 是否最后一行                                              |          | 否   |
| value            | String              | ''     | -                           | 初始内容                                                  |          | 否   |
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

## 示例代码

### json
```json
{
  "defaultTitle": "verify-code",
  "usingComponents":{
    "long-password": "../../es/long-password/index"
  }
}
```

### axml
```html
<view>
  <view style="margin-top: 10px;" />
  <view style="padding: 0 10px;">长密码框</view>
  <view style="margin-top: 10px;" />
  <long-password
    placeholder="" 
    value="{{longPassword}}" 
    clear="{{true}}" 
    onInput="onInput" 
    onClear="onClear" />
</view>
```

### js
```javascript
Page({
  data: {
    longPassword: '',
  },
  onInput(e) {
    this.setData({
      longPassword: e.detail.value,
    });
  },
  onClear() {
    this.setData({
      longPassword: '',
    });
  },
});
```