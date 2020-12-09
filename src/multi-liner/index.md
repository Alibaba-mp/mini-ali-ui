# Multi-liner 多行文本

多行输入框，可输入多行内容。

## 预览

<img width="375" src="https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*dRDqR7zAUwsAAAAAAAAAAABkARQnAQ">

## 扫码体验

![image](http://mdn.alipayobjects.com/afts/img/A*OqeGSr9t7GQAAAAAAAAAAABkAa8wAA/original?bz=openpt_doc&t=rfUxcdEKBHcjZxSKOvVjQAAAAABkMK8AAAAA)



## 属性
| 属性名 | 类型 | 默认值 | 可选项 | 描述 | 最低版本 | 必填 |
| --- | --- | --- | --- | --- | --- | --- |
| className | String | '' |  | 自定义的class |  |  |
| inputCls | String | '' |  | 自定义input的class |  |  |
| last | Boolean | false |  | 是否最后一行 |  |  |
| value | String | '' |  | 初始内容 |  |  |
| name | String | '' |  | 组件名字，用于表单提交获取数据 |  |  |
| placeholder | String | '' |  | 占位符 |  |  |
| placeholderStyle | String | '' |  | 指定 placeholder 的样式 |  |  |
| placeholderClass | String | '' |  | 指定 placeholder 的样式类 |  |  |
| disabled | Boolean | false |  | 是否禁用 |  |  |
| maxlength | Number | 140 |  | 最大长度 |  |  |
| focus | Boolean | false |  | 获取焦点 |  |  |
| auto-height | Boolean | false |  | 是否自动增高 |  |  |
| show-count | Boolean | true |  | 是否渲染字数统计功能（**是否删除默认计数器/是否显示字数统计**） |  |  |
| controlled | Boolean |  |  | 是否为受控组件。为 true 时，value 内容会完全受 setData 控制 |  |  |
| onInput | (e: Object) => void |  |  | 键盘输入时触发input事件 |  |  |
| onConfirm | (e: Object) => void |  |  | 点击键盘完成时触发 |  |  |
| onFocus | (e: Object) => void |  |  | 聚焦时触发 |  |  |
| onBlur | (e: Object) => void |  |  | 失去焦点时触发 |  |  |

### bug & tips
* multi-liner 组件的特性主要来源于 [textarea](https://opendocs.alipay.com/mini/component/textarea)，当有光标或者文字输入相关疑惑，可查阅 [textarea](https://opendocs.alipay.com/mini/component/textarea) 相关介绍，或查阅[表单组件常见问题](https://opensupport.alipay.com/support/helpcenter/144/201602630402)

## 示例代码

```json
{
  "defaultTitle": "Multi-liner",
  "usingComponents": {
    "multi-liner": "mini-ali-ui/es/multi-liner/index"
  }
}
```

```xml
<view>
  <view style="margin-top: 10px;" />
  <view class="title">多行输入</view>
  <multi-liner data-field="area" 
    placeholder="字数统计↘" 
    type="text" 
    value="{{value}}" 
    onInput="onInput" 
    last="{{true}}" 
    auto-height="{{true}}" 
    controlled="{{controlled}}"/>
  <view style="margin: 10px;" />
</view>
```

```javascript
Page({
  data: {
    value: '内容',
    controlled: true,
  },
  onInput(e) {
    this.setData({
      value: e.detail.value,
    });
  },
});

```