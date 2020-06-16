# am-checkBox 复选框

复选框。 对齐 ant design checkbox 的设计，当 `ctrlChecked === undefined` (默认)时 am-checkbox 是非受控组件，否则是一个受控组件。

## 截图
<img src="https://gw.alipayobjects.com/mdn/rms_a02d41/afts/img/A*f3-xS7ChP58AAAAAAAAAAABkARQnAQ"/>

## 扫码体验

![image](http://mdn.alipayobjects.com/afts/img/A*2utdSJ4pVQIAAAAAAAAAAABkAa8wAA/original?bz=openpt_doc&t=YNFG8j9uSgTPpwzq-7EBRAAAAABkMK8AAAAA)

## 属性介绍
| 属性名 | 类型 | 默认值 | 可选值 | 描述 | 必填 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| value | String | - | - | 组件值，选中时 change 事件会携带的 value | - |
| ctrlChecked | Boolean | undefined | true,false | 当 ctrlChecked 不等于 undefined 时 am-checkbox 是受控组件。需要启用 component2 编译。 | - |
| checked | Boolean | false | true,false | 默认是否选中 | - |
| disabled | Boolean | false | true,false | 是否禁用 | - |
| onChange | (e: Object) => void |  | - | change 事件触发的回调函数 | - |
| id | String | - | - | 与 label 组件的 for 属性组合使用 | - |

## 示例

```json
{
  "defaultTitle": "am-checkbox",
  "usingComponents": {
    "list": "mini-ali-ui/es/list/index",
    "list-item": "mini-ali-ui/es/list/list-item/index",
    "am-checkbox": "mini-ali-ui/es/am-checkbox/index",
    "button": "mini-ali-ui/es/button/index"
  }
}
```

```xml
<list>
  <view slot="header">
    列表+复选框（非受控）
  </view>
  <block a:for="{{items}}">
    <list-item
      thumb=""
      arrow="{{false}}"
      index="{{index}}"
      key="items-{{index}}"
      last="{{index === (items.length - 1)}}"
    >
      <view style="display: flex; align-items: center;">
        <am-checkbox data-id="{{item.id}}" id="{{item.id}}" value="{{item.value}}" disabled="{{item.disabled}}" checked="{{item.checked}}" />
        <label for="{{item.id}}">{{item.title}}</label>
      </view>
    </list-item>
  </block>
</list>

<view style="padding: 24rpx 0 0 24rpx;">
  <button capsuleSize="small" shape="capsule" type="primary" onTap="checkedON" style="margin-left: 20rpx;">全选</button>
  <button capsuleSize="small" shape="capsule" type="primary" onTap="checkedOFF" style="margin-left: 20rpx;">不全选</button>
</view>

<list>
  <view slot="header">
    列表+复选框（受控）
  </view>
  <block a:for="{{items1}}">
    <list-item
      thumb=""
      arrow="{{false}}"
      index="{{index}}"
      key="items-{{index}}"
      last="{{index === (items.length - 1)}}"
    >
      <view style="display: flex; align-items: center;">
        <am-checkbox data-id="{{item.id}}" id="{{item.id}}" value="{{item.value}}" disabled="{{item.disabled}}" ctrlChecked="{{item.ctrlChecked}}" onChange="onChange" />
        <label for="{{item.id}}">{{item.title}}</label>
      </view>
    </list-item>
  </block>
</list>
```

```javascript
Page({
  data: {
    items: [
      { value: 'a', title: '复选框-默认未选中', id: 'checkbox1' },
      { checked: true, value: 'b', title: '复选框-默认选中', id: 'checkbox2' },
      { checked: true, disabled: true, value: 'c', title: '复选框-默认选中disabled', id: 'checkbox3' },
    ],
    items1: [
      { ctrlChecked: false, disabled: false, value: 'd', title: '复选框-默认未选中', id: 'checkbox4' },
      { ctrlChecked: true, disabled: true, value: 'e', title: '复选框-默认未选中disabled', id: 'checkbox5' },
      { ctrlChecked: true, value: 'f', title: '复选框-默认选中', id: 'checkbox6' },
    ],
  },
  onChange(e) {
    const { id } = e.currentTarget.dataset;
    const { value } = e.detail;
    const { items1 } = this.data;
    items1.forEach((element) => {
      if (element.id === id) {
        // eslint-disable-next-line no-param-reassign
        element.ctrlChecked = value;
      }
    });
    this.setData({
      items1
    });
  },
  // 全选
  checkedON() {
    this.checkedAll(true);
  },
  // 全不选
  checkedOFF() {
    this.checkedAll(false);
  },
  checkedAll(status) {
    const { items1 } = this.data;
    items1.forEach((element) => {
      // eslint-disable-next-line no-param-reassign
      element.ctrlChecked = status;
    });
    this.setData({
      items1
    });
  },
});
```