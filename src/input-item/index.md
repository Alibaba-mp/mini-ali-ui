# InputItem 文本输入框。
- 输入区内容不折行，如用户输入的字数超出显示区，输入框内的文字可左右滑动
- 如无特殊情况，清空按钮在框内有内容且获得焦点时默认出现

## 截图
![输入框.png](https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*DumuSohfeXQAAAAAAAAAAABkARQnAQ)

## 扫码体验

![image](http://mdn.alipayobjects.com/afts/img/A*dxShQq_ajv0AAAAAAAAAAABkAa8wAA/original?bz=openpt_doc&t=2gtI9okdyKpu-Ah9sjky6wAAAABkMK8AAAAA)



## 属性介绍

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
| layer | String | '' | vertical | 文本输入框是否为垂直排列，`vertical` 时为垂直排列，空值为横向排列 | [1.0.4](https://www.npmjs.com/package/mini-ali-ui?activeTab=versions) | 否 |
| controlled | Boolean | false | - | 是否为受控组件。参考 [input 组件](https://opendocs.alipay.com/mini/component/input) | [1.0.9](https://www.npmjs.com/package/mini-ali-ui?activeTab=versions) | 否 |

### type 属性值介绍
* `text`： 字符输入框
* `number`： 纯数字输入框（ 0-9 之间的数字）
* `idcard`：身份证输入框（ 0-9 之间的数字，以及字符 x）
* `digit`：数字输入框，（ 0-9 之间的数字，以及小数点 . 字符，可用于含有小数的数字）

**注**：`type` 的属性值影响的是真机中的键盘类型，在模拟器中并不一定会有效果。

### bug & tips
* input-item 组件的特性主要来源于 [input](https://opendocs.alipay.com/mini/component/input)，当有光标或者文字输入相关疑惑，可查阅 [input](https://opendocs.alipay.com/mini/component/input) 相关介绍，或查阅[表单组件常见问题](https://opensupport.alipay.com/support/helpcenter/144/201602630402)

## slots

| slotname | 说明 |
| ---- | ---- |
| extra | 可选，用于渲染input-item项右边说明 |



## 代码示例

```json
{
  "defaultTitle": "input-item",
  "usingComponents":{
    "list": "mini-ali-ui/es/list/index",
    "input-item": "mini-ali-ui/es/input-item/index",
    "am-icon": "mini-ali-ui/es/am-icon/index"
  }
}
```

```xml
<view>
  <view style="margin-top: 10px;"></view>
  <list>
    <input-item data-field="cardNo" 
      clear="{{false}}" 
      value="{{cardNo}}" 
      className="dadada" 
      placeholder="银行卡号" 
      onInput="onItemInput" 
      onBlur="onItemBlur" 
      onConfirm="onItemConfirm" 
      onClear="onClear">
      卡号
      <view slot="extra" class="extra" onTap="onExtraTap"></view>
    </input-item>
    <input-item data-field="name" 
      placeholder="姓名" 
      type="text" 
      value="{{name}}" 
      clear="{{true}}" 
      onInput="onItemInput" 
      onClear="onClear">姓名</input-item>
    <input-item data-field="password" 
      placeholder="密码">密码</input-item>
    <input-item data-field="layerShow1" 
      placeholder="layer 为 vertical 的排列" 
      type="text" 
      layer="vertical"
      value="{{layerShow1}}" 
      clear="{{true}}" 
      onInput="onItemInput" 
      onClear="onClear">
      竖向表单
      <view onTap="onExtraTap" slot="extra">
        <am-icon type="phone-book_" size="24" color="#1677ef"></am-icon>
      </view>
    </input-item>
    <input-item data-field="layerShow2"
      placeholder="layer 为 vertical 的排列" 
      type="text" 
      layer="vertical"
      value="{{layerShow2}}" 
      clear="{{true}}" 
      onInput="onItemInput" 
      onClear="onClear">
      竖向表单
    </input-item>
    <input-item data-field="layerShow3" 
      placeholder="layer 为 vertical 的排列" 
      type="text" 
      layer="vertical"
      disabled="{{true}}"
      value="{{layerShow3}}" 
      clear="{{true}}" 
      onInput="onItemInput" 
      onClear="onClear">
      竖向表单
      <view onTap="onExtraTap" slot="extra">
        <am-icon type="phone-book_" size="24" color="#1677ef"></am-icon>
      </view>
    </input-item>
    <input-item data-field="remark" placeholder="备注"></input-item>
  </list>
</view>
```

```javascript
Page({
  data: {
    cardNo: '1234****',
    name: '',
    layerShow1: '',
    layerShow2: '垂直输入框的布局',
    layerShow3: 'disabled 状态的 input',
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
  onItemFocus() {},
  onItemBlur() {},
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