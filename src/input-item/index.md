# InputItem 文本输入框。
- 输入区内容不折行，如用户输入的字数超出显示区，输入框内的文字可左右滑动
- 如无特殊情况，清空按钮在框内有内容且获得焦点时默认出现
## 扫码体验
<img src="https://gw.alipayobjects.com/zos/rmsportal/HoUOLnPEOaymuHlbeyqR.jpeg" width="154" height="190" />

## 效果示例
![输入框.png](https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*DumuSohfeXQAAAAAAAAAAABkARQnAQ) 

## 属性
| 属性名           | 类型                | 默认值 | 可选值                      | 描述                                                      | 最低版本 | 必填 |
| ---------------- | ------------------- | ------ | --------------------------- | --------------------------------------------------------- | -------- | ---- |
| className        | String              | ''     | -                           | 自定义的class                                             |          | 否   |
| labelCls         | String              | ''     | -                           | 自定义label的class                                        |          | 否   |
| inputCls         | String              | ''     | -                           | 自定义input的class                                        |          | 否   |
| last             | Boolean             | false  | -                           | 是否最后一行                                              |          | 否   |
| value            | String              | ''     | -                           | 初始内容                                                  |          | 否   |
| name             | String              | ''     | -                           | 组件名字，用于表单提交获取数据                            |          | 否   |
| type             | String              | text   | text, number, idcard, digit | input 的类型，有效值：`text`, `number`, `idcard`, `digit` |          | 否   |
| password         | Boolean             | false  | -                           | 是否是密码类型                                            |          | 否   |
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
// API-DEMO pages/input-item/index.json
{
  "defaultTitle": "input-item",
  "usingComponents":{
    "list": "min-ali-ui/es/list/index",
    "input-item": "min-ali-ui/es/input-item/index"
  }
}
```

```html
<!-- API-DEMO pages/input-item/index.axml -->
<view>
  <view style="margin-top: 10px;" />
  <list>
    <input-item data-field="cardNo" 
      clear="{{true}}" 
      value="{{cardNo}}" 
      className="dadada" 
      placeholder="银行卡号" 
      onInput="onItemInput"
      onBlur="onItemBlur" 
      onConfirm="onItemConfirm" 
      onClear="onClear" >
      卡号
      <view slot="extra" 
        class="extra" 
        onTap="onExtraTap"></view>
    </input-item>
    <input-item data-field="name" 
      placeholder="姓名" 
      type="text" 
      value="{{name}}" 
      clear="{{true}}" 
      onInput="onItemInput" 
      onClear="onClear" >
      姓名
    </input-item>
    <input-item data-field="password" 
      placeholder="密码" 
      password >
      密码
    </input-item>
    <input-item data-field="remark" 
      placeholder="备注" />
  </list>
</view>
```

```javascript
// API-DEMO pages/input-item/index.js

Page({
  data: {
    cardNo: '1234****',
    name: '',
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
  onItemFocus(e) {
    this.setData({
      [e.target.dataset.name]: true,
    });
    debugger;
  },
  onItemBlur(e) {
    this.setData({
      [e.target.dataset.name]: false,
    });
  },
  onItemConfirm() {},
  onClear(e) {
    this.setData({
      [e.target.dataset.field]: '',
    });
  },
  onSend() {
    my.alert({
      title: 'verify code sent',
    });
  },
});

```

```css
/* API-DEMO page/input-item/index.acss */
.extra {
  background-image: url('https://gw.alipayobjects.com/zos/rmsportal/dOfSJfWQvYdvsZiJStvg.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right center;
  opacity: 0.2;
  height: 22px;
  width: 22px;
}
```