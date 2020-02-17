# AmountInput 金额输入

金额输入框。


| 属性名 | 类型 | 默认值 | 可选项 | 描述 | 最低版本 | 必填 |
| --- | --- | --- | --- | --- | --- | --- |
| type | String | number |  | input 的类型，有效值：digit、number |  | false |
| title | String |  |  | 左上角标题 |  | false |
| extra | String |  |  | 左下角说明 |  | false |
| value | String |  |  | 输入框当前值 |  | false |
| btnText | String |  |  | 右下角按钮文案 |  | false |
| placeholder | String |  |  | placeholder |  | false |
| focus | Boolean | false |  | 自动获取光标 |  | false |
| onInput | (e: Object) => void |  |  | 键盘输入时触发 |  | false |
| onFocus | (e: Object) => void |  |  | 获取焦点时触发 |  | false |
| onBlur | (e: Object) => void |  |  | 失去焦点时触发 |  | false |
| onConfirm | (e: Object) => void |  |  | 点击键盘完成时触发 |  | false |
| onClear | () => void |  |  | 点击 clear 图标触发 |  | false |
| onButtonClick | () => void |  |  | 点击右下角按钮时触发 |  | false |
| maxLength | Number |  |  | 最多允许输入的字符个数 |  | false |
| controlled | Boolean | false |  | 是否为受控组件。为 true时，value内容会完全受setData控制 |  | false |


## 示例

```json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents": {
    "amount-input": "mini-ali-ui/es/amount-input/index"
  }
}
```

```xml
<view>
  <amount-input
    type="digit"
    title="转入金额"
    extra="建议转入¥100以上金额"
    placeholder="输入转入金额"
    value="{{value}}"
    maxLength="5"
    focus="{{true}}"
    btnText="全部提现"
    onClear="onInputClear"
    onInput="onInput"
    onConfirm="onInputConfirm" />
</view>
```

```javascript
Page({
  data: {
    value: 200,
  },
  onInputClear() {
    this.setData({
      value: '',
    });
  },
  onInputConfirm() {
    my.alert({
      content: 'confirmed',
    });
  },
  onInput(e) {
    const { value } = e.detail;
    this.setData({
      value,
    });
  },
  onButtonClick() {
    my.alert({
      content: 'button clicked',
    });
  },
  onInputFocus() {},
  onInputBlur() {},
});
```
