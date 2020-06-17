## PickerItem 选择输入

选择输入。

## 扫码体验

![image](http://mdn.alipayobjects.com/afts/img/A*XwVVT66kNG0AAAAAAAAAAABkAa8wAA/original?bz=openpt_doc&t=p9aFDx4PxuycTqU6HHzUNAAAAABkMK8AAAAA)

## 属性介绍

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
| layer | String | '' | vertical | 文本输入框是否为垂直排列，`vertical` 时为垂直排列，空值为横向排列 | [1.0.4](https://www.npmjs.com/package/mini-ali-ui?activeTab=versions) | 否 |
| iconType | String | 'right' | - | 更改 picker-item 的 icon 类型，参考 am-icon 的 type 值 | [1.0.12](https://www.npmjs.com/package/mini-ali-ui?activeTab=versions) | - |

### slots

| slotname | 说明 |
| ---- | ---- |
| extra | 可选，用于渲染picker-item项右边说明 |

## 代码示例

```json
{
  "defaultTitle": "Picker-item",
  "usingComponents": {
    "list": "mini-ali-ui/es/list/index",
    "picker-item": "mini-ali-ui/es/picker-item/index"
  }
}
```

```xml
<view>
  <list>
    <picker-item
      data-field="bank"
      placeholder="选择发卡银行"
      value="{{bank}}"
      onPickerTap="onPickerTap"
    >
      发卡银行
    </picker-item>
    <picker-item
      data-field="bank"
      placeholder="选择发卡银行"
      value="{{bank}}"
      onPickerTap="onPickerTap"
      layer="vertical"
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
  onPickerTap() {
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