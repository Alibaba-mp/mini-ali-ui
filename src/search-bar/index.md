# SearchBar 搜索栏

搜索栏。


## 截图
<img src="https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*uaJMRY6kMXkAAAAAAAAAAABkARQnAQ"/>

## 扫码体验

![image](http://mdn.alipayobjects.com/afts/img/A*cFR6T6YDzqIAAAAAAAAAAABkAa8wAA/original?bz=openpt_doc&t=ygcRtsAdl4OZ4KWbaCFW8QAAAABkMK8AAAAA)



## 属性介绍

| 属性名 | 类型 | 默认值 | 可选项 | 必选 | 描述 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| value | String | -| - | - | 搜索框的当前值 |
| placeholder | String | - | - | - | placeholder |
| focus | Boolean | false | true,false |- | 自动获取光标 |
| showVoice | Boolean | false | true,false | - | 是否展示voice图标 |
| onInput | (value: String) => void | - | -| - | 键盘输入时触发 |
| onClear | (val: String) => void | - | -| - | 点击 clear 图标触发 |
| onFocus | () => void | - | -| - | 获取焦点时触发 |
| onBlur | () => void | - | -| - | 失去焦点时触发 |
| onCancel | () => void | - | -| - | 点击取消时触发 |
| onVoiceClick | () => void | - | -| - | 点击voice图标时触发 |
| onSubmit | (val: String) => void | - | -| - |点击键盘的 enter 时触发 |
| disabled | Boolean | false |true,false | - | 设置禁用 |
| maxLength | Number | - | - | - | 最多允许输入的字符个数 |
| showCancelButton | Boolean | false | true,false | - | 是否一直显示取消按钮 |
| borderColor | String | #1677ff | - | - | 搜索输入框边框色 |
| enableNative | Boolean | true | - | - | 如为 false 可处理 fixed 定位后输入框内容闪动的问题 |

### tips & bug
* searchBar 输入框在个别情况下会出现闪动的情况，需要使用 `enableNative` 进行处理，具体可参考 [input 输入框的使用限制](https://opendocs.alipay.com/mini/component/input#%E4%BD%BF%E7%94%A8%E9%99%90%E5%88%B6)说明，以及 [FAQ](https://opendocs.alipay.com/mini/component/input#FAQ) 部分的说明；

## 示例

```json
{
  "defaultTitle": "Search-bar",
  "usingComponents": {
    "search-bar": "mini-ali-ui/es/search-bar/index"
  }
}
```

```xml
<view>
  <search-bar
    value="{{value}}"
    focus="{{true}}"
    disabled="{{false}}"
    maxLength="{{20}}"
    showVoice="{{showVoice}}"
    placeholder="搜索"
    onInput="handleInput"
    onClear="handleClear"
    onFocus="handleFocus"
    onBlur="handleBlur"
    onCancel="handleCancel"
    onSubmit="handleSubmit"
    showCancelButton="{{false}}" />
</view>
<view>是否展示Voice图标
<checkbox onChange='onChange'/>
</view>
```

```javascript
Page({
  data: {
    value: '',
    showVoice: false,
  },
  handleInput(value) {
    this.setData({
      value,
    });
  },
  handleClear() {
    this.setData({
      value: '',
    });
  },
  handleFocus() {},
  handleBlur() {},
  handleCancel() {
    this.setData({
      value: '',
    });
  },
  onChange(e) {
    this.setData({
      showVoice: e.detail.value,
    });
  },
});

```
