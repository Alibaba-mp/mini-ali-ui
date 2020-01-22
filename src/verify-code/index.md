# VerifyCode 验证码输入。

验证码输入。

## 属性
| 属性名           | 类型                | 默认值 | 可选值                      | 描述                                                      | 最低版本 | 必填 |
| ---------------- | ------------------- | ------ | --------------------------- | --------------------------------------------------------- | -------- | ---- |
| className        | String              | ''     | -                           | 自定义的class                                             |          | 否   |
| labelCls         | String              | ''     | -                           | 自定义label的class                                        |          | 否   |
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

## slots

| slotname | 说明 |
| ---- | ---- |
| extra | 可选，用于渲染picker-item项右边说明 |

## 示例

```json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents": {
    "verify-code": "mini-ali-ui/es/verify-code/index"
  }
}
```

```axml
<view>
  <list>
    <input-item
      data-field="password"
      placeholder="密码"
      password
    >
      密码
    </input-item>
    <picker-item
      data-field="bank"
      placeholder="选择发卡银行"
      value="{{bank}}"
      onPickerTap="onSelect"
    >
      发卡银行
    </picker-item>
  </list>
</view>
```

```javascript
const banks = ['网商银行', '建设银行', '工商银行', '浦发银行'];

Page({
  data: {
    bank: '',
  },
  onSelect() {
    my.showActionSheet({
      title: '选择发卡银行',
      items: banks,
      success: (res) => {
        this.setData({
          bank: banks[res.index],
        });
      },
    });
  },
});
```