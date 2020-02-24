# LongPassword 长密码框

长密码框  
受控模式，使用时需要用onInput事件来回设value。

## 截图
<img width="375" src="https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*zDnVSq3-tiUAAAAAAAAAAABkARQnAQ">

## 属性介绍
| 属性名           | 类型                | 默认值 | 可选值 | 描述                                    | 最低版本 | 必填 |
| ---------------- | ------------------- | ------ | ------ | --------------------------------------- | -------- | ---- |
| className        | String              | ''     | -      | 自定义的class                           |          |      |
| inputCls         | String              | ''     | -      | 自定义input的class                      |          | -    |
| last             | Boolean             | false  | -      | 是否最后一行                            |          | -    |
| value            | String              | ''     | -      | 初始内容                                |          | -    |
| name             | String              | ''     | -      | 组件名字，用于表单提交获取数据          |          | -    |
| placeholder      | String              | ''     | -      | 占位符                                  |          | -    |
| placeholderStyle | String              | ''     | -      | 指定 placeholder 的样式                 |          | -    |
| placeholderClass | String              | ''     | -      | 指定 placeholder 的样式类               |          | -    |
| disabled         | Boolean             | false  | -      | 是否禁用                                |          | -    |
| maxlength        | Number              | 140    | -      | 最大长度                                |          | -    |
| focus            | Boolean             | false  | -      | 获取焦点                                |          | -    |
| clear            | Boolean             | true   | -      | 是否带清除功能，仅disabled为false才生效 |          | -    |
| onInput          | (e: Object) => void |        | -      | 键盘输入时触发input事件                 |          | -    |
| onConfirm        | (e: Object) => void |        | -      | 点击键盘完成时触发                      |          | -    |
| onFocus          | (e: Object) => void |        | -      | 聚焦时触发                              |          | -    |
| onBlur           | (e: Object) => void |        | -      | 失去焦点时触发                          |          | -    |
| onClear          | () => void          |        | -      | 点击清除icon时触发                      |          | -    |

## 代码示例

### json
```json
{
  "defaultTitle": "Long-password",
  "usingComponents":{
    "long-password": "mini-ali-ui/es/long-password/index"
  }
}
```

### axml
```xml
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