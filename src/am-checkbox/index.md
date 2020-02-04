# AMCheckBox 复选框

复选框。具体用法和小程序框架中checkbox保持一致，在checkbox基础上做了样式的封装。


## 截图
<img src="https://gw.alipayobjects.com/mdn/rms_a02d41/afts/img/A*f3-xS7ChP58AAAAAAAAAAABkARQnAQ"/>

## 属性介绍
| 属性名 | 类型 | 默认值 | 可选值 | 描述 | 必填 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| value | String | - | - | 组件值，选中时 change 事件会携带的 value | - |
| checked | Boolean | false | true,false | 当前是否选中，可用来设置默认选中 | - |
| disabled | Boolean | false | true,false | 是否禁用 | - |
| onChange | (e: Object) => void |  | - | change 事件触发的回调函数 | - |
| id | String | - | - | 与label组件的for属性组合使用 | - |

## 示例

```json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents": {
    "list": "mini-ali-ui/es/list/index",
    "list-item": "mini-ali-ui/es/list/list-item/index",
    "am-checkbox": "mini-ali-ui/es/am-checkbox/index"
  }
}
```

```html
<list>
  <view slot="header">
    列表+复选框
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
        <am-checkbox id="{{item.id}}" data-name="{{item.value}}" type="{{item.type}}" disabled="{{item.disabled}}" checked="{{item.checked}}" onChange="onChange" />
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
      { checked: true, disabled: false, value: 'a', title: '复选框-默认选中', id: 'checkbox1' },
      { checked: false, disabled: false, value: 'b', title: '复选框-默认未选中', id: 'checkbox2' },
      { checked: true, disabled: true, value: 'c', title: '复选框-默认选中disabled', id: 'checkbox3' },
      { checked: false, disabled: true, value: 'd', title: '复选框-默认未选中disabled', id: 'checkbox4' },
    ],
  },
  onChange() {
  },
});
```