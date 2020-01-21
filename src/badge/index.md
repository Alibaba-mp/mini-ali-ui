# Badge 徽标

红点、数字或文字。用于告诉用户待处理的事物或者更新数。

扫码体验：

<img src="https://gw.alipayobjects.com/zos/rmsportal/NQlAfTbzwLneEYbNYNht.jpeg" width="154" height="190" />

## 属性
| 属性名        | 类型            | 默认值   | 可选项 | 描述                                  | 最低版本 | 必填 |
| ------------- | --------------- | -------- | ------ | ------------------------------------- | -------- | ---- |
| className     | String          | ''       | -      | 类名称                                | -        | -    |
| text          | String / Number | ''       | -      | 展示的数字或文案                      | -        | -    |
| dot           | Boolean         | false    | -      | 不展示数字，只有一个小红点            | -        | -    |
| overflowCount | Number          | 99       | -      | 展示封顶的数字值，超出部分用“+”号表示 | -        | -    |
| withArrow     | Boolean         | false    | -      | 是否使用箭头                          | -        | -    |
| direction     | String          | 'middle' | middle, left, right | 箭头方向                              | -        | -    |
## slots

| slotName | 说明 |
| ---- | ---- |
| inner | 可选，badge作为wrapper时，用于渲染内部的区域 |

## 示例

```json
{
  "defaultTitle": "徽标",
  "usingComponents": {
    "list-item": "../../es/list/list-item/index",
    "badge": "../../es/badge/index"
  }
}
```

```html
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
  <list-item>
    list-item 
    <badge 
      slot="extra"
      text="text" 
      withArrow="{{true}}" 
      direction="right" />
  </list-item>
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
        text: 'middle arrow',
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