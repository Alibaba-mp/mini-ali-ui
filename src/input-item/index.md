文本输入。


## 效果示例
![输入框.png](https://intranetproxy.alipay.com/skylark/lark/0/2019/png/188518/1564389321807-3fdc73ec-f8c4-454b-aa2b-69121edd0d25.png) 

## 属性
| 属性名 | 描述 | 类型 | 默认值 |
| ---- |----|----|----|
| className | 自定义的class | String| '' |
| labelCls | 自定义label的class | String | '' |
| inputCls | 自定义input的class | String | '' |
| last | 是否最后一行 | Boolean | false |
| value | 初始内容 | String | '' |
| name | 组件名字，用于表单提交获取数据 | String | '' |
| type | input 的类型，有效值：`text`, `number`, `idcard`, `digit`  | String | text |
| password | 是否是密码类型 | Boolean | false |
| placeholder | 占位符 | String | '' |
| placeholderStyle | 指定 placeholder 的样式 | String | '' |
| placeholderClass | 指定 placeholder 的样式类 | String | '' |
| disabled | 是否禁用 | Boolean | false |
| maxlength | 最大长度 | Number | 140 |
| focus | 获取焦点 | Boolean | false |
| clear | 是否带清除功能，仅disabled为false才生效 | Boolean | false |
| onInput | 键盘输入时触发input事件 | (e: Object) => void |  |
| onConfirm | 点击键盘完成时触发 | (e: Object) => void |  |
| onFocus | 聚焦时触发 | (e: Object) => void |  |
| onBlur | 失去焦点时触发 | (e: Object) => void |  |
| onClear | 点击清除icon时触发 | () => void |  |

### type 属性值介绍
* `text`： 字符输入框
* `number`： 纯数字输入框（ 0-9 之间的数字）
* `idcard`：身份证输入框（ 0-9 之间的数字，以及字符 x）
* `digit`：数字输入框，（ 0-9 之间的数字，以及小数点 . 字符，可用于含有小数的数字）

**注**：`type` 的属性值影响的是真机中的键盘类型，在模拟器中并不一定会有效果。

## slots

| slotname | 说明 |
| ---- | ---- |
| extra | 可选，用于渲染input-item项右边说明 |

## 示例代码

```json
// API-DEMO page/component/input-item/input-item.json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents": {
    "list": "mini-ali-ui/es/list/index",
    "list-item": "mini-ali-ui/es/list/list-item/index",
    "input-item": "mini-ali-ui/es/input-item/index",
    "picker-item": "mini-ali-ui/es/picker-item/index"
  }
}
```

```html
<!-- API-DEMO page/component/input-item/input-item.axml -->
<view>
  <view style="margin-top: 10px;" />
  <list>
    <input-item
      data-field="cardNo"
      clear="{{true}}"
      value="{{cardNo}}"
      className="dadada"
      placeholder="银行卡号"
      focus="{{inputFocus}}"
      onInput="onItemInput"
      onFocus="onItemFocus"
      onBlur="onItemBlur"
      onConfirm="onItemConfirm"
      onClear="onClear"
    >
      卡号
      <view slot="extra" class="extra" onTap="onExtraTap"></view>
    </input-item>
    <picker-item
      data-field="bank"
      placeholder="选择发卡银行"
      value="{{bank}}"
      onPickerTap="onPickerTap"
    >
      发卡银行
    </picker-item>
    <input-item
      data-field="name"
      placeholder="姓名"
      type="text"
      value="{{name}}"
      clear="{{true}}"
      onInput="onItemInput"
      onClear="onClear"
    >
      姓名
    </input-item>
    <input-item
      data-field="password"
      placeholder="密码"
      password
    >
      密码
    </input-item>
    <input-item
      data-field="remark"
      placeholder="备注"
      last="{{true}}"
    />
  </list>
  <view style="margin: 10px;">
    <button type="primary" onTap="onAutoFocus">聚焦</button>
  <view>
</view>
```

```javascript
// API-DEMO page/component/input-item/input-item.js
const banks = ['网商银行', '建设银行', '工商银行', '浦发银行'];

Page({
  data: {
    cardNo: '1234****',
    inputFocus: true,
    bank: '',
    name: '',
  },
  onAutoFocus() {
    this.setData({
      inputFocus: true,
    });
  },
  onExtraTap() {
    my.alert({
      content: 'extra tapped',
    });
  },
  onItemInput(e) {
    this.setData({
      [e.target.dataset.field]: e.detail.value,
    });
  },
  onItemFocus() {
    this.setData({
      inputFocus: false,
    });
  },
  onItemBlur() {},
  onItemConfirm() {},
  onClear(e) {
    this.setData({
      [e.target.dataset.field]: '',
    });
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

```css
/* API-DEMO page/component/input-item/input-item.acss */
.extra {
  background-image: url('https://gw.alipayobjects.com/zos/rmsportal/dOfSJfWQvYdvsZiJStvg.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right center;
  opacity: 0.2;
  height: 20px;
  width: 20px;
  padding-left: 10px;
}
```