# am-radio 单选框

单选框。具体用法和小程序框架中 radio 保持一致，在 radio 基础上做了样式的封装。

## 截图
<img src="https://gw.alipayobjects.com/mdn/rms_a02d41/afts/img/A*FIq6QqDQzaoAAAAAAAAAAABkARQnAQ" />

## 扫码体验

![image](http://mdn.alipayobjects.com/afts/img/A*2rsaS7d71tMAAAAAAAAAAABkAa8wAA/original?bz=openpt_doc&t=PuXwXDEBDTUYO98u1wbhSAAAAABkMK8AAAAA)



## 属性介绍
| 属性名 | 类型 | 默认值 | 可选值 | 描述 | 必填 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| value | String | - | - | 组件值，选中时 change 事件会携带的 value | - |
| checked | Boolean | false | true,false | 当前是否选中，可用来设置默认选中 | - |
| disabled | Boolean | false | true,false | 是否禁用 | - |
| id | String | - | - | 与label组件的for属性组合使用 | - |

## 示例

```json
{
  "defaultTitle": "am-radio",
  "usingComponents": {
    "am-radio": "mini-ali-ui/es/am-radio/index",
    "list": "mini-ali-ui/es/list/index",
    "list-item": "mini-ali-ui/es/list/list-item/index"
  }
}
```

```xml
<view class="page">
  <view class="page-description">单选框</view>
  <view class="page-section">
    <view class="section section_gap">
      <form onSubmit="onSubmit" onReset="onReset">
        <view class="page-section-demo">
          <radio-group class="radio-group" onChange="radioChange" name="lib">
            <label class="radio" a:for="{{items}}" key="label-{{index}}">
              <am-radio value="{{item.value}}" checked="{{item.checked}}" disabled="{{item.disabled}}" />
              <view style="display:inline-block;">{{item.desc}}</text>
            </label>
          </radio-group>
        </view>
        <view class="page-section-demo">
          <radio-group class="radio-group" onChange="radioChange" name="lib">
            <label class="radio" a:for="{{items1}}" key="label-{{index}}">
              <am-radio value="{{item.value}}" checked="{{item.checked}}" disabled="{{item.disabled}}" />
              <view style="display:inline-block;">{{item.desc}}</text>
            </label>
          </radio-group>
        </view>
      </form>
    </view>
  </view>
</view>
```
```css
.radio {
  display: flex; align-items: center;
}
.page-section-demo {
  padding: 24rpx;
}
```
```javascript
Page({
  data: {
    items: [
      { checked: true, disabled: false, value: 'a', desc: '单选框-默认选中', id: 'checkbox1' },
      { checked: false, disabled: false, value: 'b', desc: '单选框-默认未选中', id: 'checkbox2' },
    ],
    items1: [
      { checked: true, disabled: true, value: 'c', desc: '单选框-默认选中disabled', id: 'checkbox3' },
    ],
  },
  radioChange() {
  },
});

```