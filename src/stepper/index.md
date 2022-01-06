# Stepper 步进器

用作增加或者减少当前数值。

**注意：**
* 输入最大值无提示，超过最大值时系统会自动回显数值为最大值。
* 不支持输入小数，可通过 + 和 - 改变数值大小。

## 截图
![stepper 步进器](https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*KMc7RKB9ZfAAAAAAAAAAAABkARQnAQ)

## 扫码体验

![image](http://mdn.alipayobjects.com/afts/img/A*gqXoR7cfXEIAAAAAAAAAAABkAa8wAA/original?bz=openpt_doc&t=4OayCa-_FTmgpn0bxjykTQAAAABkMK8AAAAA)



## 属性介绍
| 属性名 | 类型 | 默认值 | 可选项 | 描述 | 最低版本 | 必填 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| className | String | - | - | 自定义 class | - | - |
| min | Number | 0 | - | 最小值 | - | - |
| max | Number | 100000 | - | 最大值 | - | - |
| value | Number | 10 | - | 初始值 | - | - |
| step | Number | 1 | - | 每次改变步数，可以为小数 | Number | - | - |
| disabled | Boolean | false | - | 是否禁用 | - | - |
| readOnly | Boolean | false | - | 是否只读 | - | - |
| showNumber | Boolean | false | - | 是否显示数值 | - | - |
| onChange | EventHandle | (value: Number, mode: String, props: Object) => void | - | 变化时回调函数 | - | - |
| inputWidth | String | 36px | - | 输入框的宽度 | - | - |

## Bug & Tip
* `readOnly` 为 `true` 后，只可通过 + - 按钮来控制数字增加；
* `disabled` 为 `true` 后，步进器将不可用；
* 输入框的宽度由开发者自行设置，默认宽度为 `36px`；
* `onChange` 在 [1.0.11](https://www.npmjs.com/package/mini-ali-ui?activeTab=versions) 版本中新增一个 `mode` 的返回值，用于判断用户是通过**点击**（`click`）还是通过**输入**（`input`）的方式改变值，两者之外就是 `undefined`；新增第三个参数返回当前组件实例的props；

## 代码示例
```json
{
  "defaultTitle": "Stepper",
  "usingComponents":{
    "stepper": "mini-ali-ui/es/stepper/index",
    "list": "mini-ali-ui/es/list/index",
    "list-item": "mini-ali-ui/es/list/list-item/index"
  }
}
```

```xml
<list>
  <list-item disabled="{{true}}">
    Show number value
    <view slot="extra">
      <stepper
        onChange="callBackFn"
        step="{{1}}"
        showNumber
        readOnly="{{false}}"
        value="{{value}}"
        inputWidth="60px"
        min="{{2}}"
        />
    </view>
  </list-item>
  <list-item disabled="{{true}}">
    step: 0.01
    <view slot="extra">
      <stepper
        onChange="callBackFn"
        step="{{0.01}}"
        showNumber
        readOnly="{{false}}"
        value="{{value}}"
        min="{{2}}"
        />
    </view>
  </list-item>
  <list-item disabled="{{true}}">
    Do not show number value
    <view slot="extra">
      <stepper
        onChange="callBackFn"
        step="{{1}}"
        readOnly="{{false}}"
        value="{{value}}"
        min="{{2}}"
        />
    </view>
  </list-item>
  <list-item disabled="{{true}}">
    Disabled
    <view slot="extra">
      <stepper
        onChange="callBackFn"
        showNumber
        value="{{11}}"
        min="{{2}}"
        disabled
        />
    </view>
  </list-item>
  <list-item disabled="{{true}}">
    readOnly
    <view slot="extra">
      <stepper
        onChange="callBackFn"
        showNumber
        value="{{11}}"
        min="{{2}}"
        readOnly
        />
    </view>
  </list-item>
</list>
<button onTap="modifyValue">修改setper初始值</button>
```

```javascript
Page({
  data: {
    value: 8,
  },
  callBackFn(value) {
    console.log(value);
  },
  modifyValue() {
    this.setData({
      value: 9,
    });
  },
});
```