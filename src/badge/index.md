# Badge 徽标

红点、数字或文字。用于告诉用户待处理的事物或者更新数。

## 扫码体验

![image](http://mdn.alipayobjects.com/afts/img/A*OPTsT7uTzEkAAAAAAAAAAABkAa8wAA/original?bz=openpt_doc&t=QWjAorNavfdXv5ASjtEz7wAAAABkMK8AAAAA)




## 属性
| 属性名        | 类型            | 默认值   | 可选项 | 描述                                  | 最低版本 | 必填 |
| ------------- | --------------- | -------- | ------ | ------------------------------------- | -------- | ---- |
| className     | String          | ''       | -      | 类名称                                | -        | -    |
| text          | String / Number | ''       | -      | 展示的数字或文案                      | -        | -    |
| dot           | Boolean         | false    | -      | 不展示数字，只有一个小红点            | -        | -    |
| overflowCount | Number          | 99       | -      | 展示封顶的数字值，超出部分用“···”号表示 | -        | -    |
| withArrow     | Boolean         | false    | -      | 是否使用箭头                          | -        | -    |
| direction     | String          | 'middle' | middle<br/> left<br/> right | 箭头方向                              | -        | -    |
| stroke | Boolean | false | - | 是否带描边的气泡 | [1.0.6](https://www.npmjs.com/package/mini-ali-ui?activeTab=versions) | - |

## slots

| slotName | 说明 |
| ---- | ---- |
| inner | 可选，badge作为wrapper时，用于渲染内部的区域 |

## Bug & Tip
* 当使用 slot 时，且 `withArrow` 为 `true` 的情况下使用 `direction` 时，`right`、`left` 以及 `middle` 所代表是的箭头的方向，同时会改变 badge 在 slot 中的位置；

## 示例

```json
{
  "defaultTitle": "Badge",
  "usingComponents": {
    "list-item": "mini-ali-ui/es/list/list-item/index",
    "badge": "mini-ali-ui/es/badge/index"
  }
}
```

```xml
<view>
  <block a:for="{{items}}">
    <view class="list-like" 
      index="{{index}}" 
      key="items-{{index}}">
      <view>
        <badge a:if="{{item.isWrap}}" 
          text="{{item.text}}" 
          dot="{{item.dot}}">
          <view slot="inner" 
            style="height: 24px; width: 24px; background-color: #ddd;"></view>
        </badge>
        <text style="margin-left: {{ item.isWrap ? '12px' : '0' }}">{{item.intro}}</text>
      </view>
      <view >
        <badge a:if="{{!item.isWrap}}" 
          text="{{item.text}}" 
          dot="{{item.dot}}" 
          overflowCount="{{item.overflowCount}}" 
          withArrow="{{item.withArrow}}" 
          direction="{{item.direction}}" />
      </view>
    </view>
  </block>
</view>
<view style="
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #333;
  color: #f8f8f8;">
    深色底时，stroke 可设为 true
    <badge 
      slot="extra"
      text="深色底时加描边"
      stroke="{{true}}" 
      withArrow="{{true}}" 
      direction="left" />
</view>
```

```javascript
Page({
  data: {
    items: [
      {
        dot: true,
        text: '',
        isWrap: true,
        intro: 'Dot Badge',
      },
      {
        dot: false,
        text: 1,
        isWrap: true,
        intro: 'Text Badge',
      },
      {
        dot: false,
        text: 99,
        isWrap: false,
        intro: '数字',
      },
      {
        dot: false,
        text: 100,
        overflowCount: 99,
        isWrap: false,
        intro: '数字超过overflowCount',
      },
      {
        dot: false,
        text: 'new',
        isWrap: false,
        intro: '文字',
      },
      {
        dot: false,
        text: '22222222222222',
        isWrap: false,
        intro: '箭头中',
        withArrow: true,
        direction: 'middle',
      },
      {
        dot: false,
        text: 'left arrow',
        isWrap: false,
        intro: '箭头左',
        withArrow: true,
        direction: 'left',
      },
      {
        dot: false,
        text: 'right arrow',
        isWrap: false,
        intro: '箭头右',
        withArrow: true,
        direction: 'right',
      },
    ],
  },
});
```

```css
.list-like {
  display: flex;
  background: #fff;
  padding: 12px;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
}
```