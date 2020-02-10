## PickerItem 选择输入

文本输入。

选择输入。

| 属性名 | 类型 | 默认值 | 可选项 | 描述 | 最低版本 | 必填 |
| --- | --- | --- | --- | --- | --- | --- |
| className | String |  |  | 自定义的class |  |  |
| labelCls | String |  |  | 自定义label的class |  |  |
| pickerCls | String |  |  | 自定义选择区域的class |  |  |
| last | Boolean | false |  | 是否最后一行 |  |  |
| value | String |  |  | 初始内容 |  |  |
| name | String |  |  | 组件名字，用于表单提交获取数据 |  |  |
| placeholder | String |  |  | 占位符 |  |  |
| onPickerTap | (e: Object) => void |  |  | 点击pickeritem时触发 |  |  |

## slots

| slotname | 说明 |
| ---- | ---- |
| extra | 可选，用于渲染picker-item项右边说明 |

## 示例

```json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents": {
    "list": "mini-ali-ui/es/list/index",
    "list-item": "mini-ali-ui/es/list/list-item/index",
    "picker-item": "mini-ali-ui/es/picker-item/index",
    "input-item": "mini-ali-ui/es/input-item/index"
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