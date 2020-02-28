# vtabs 纵向选项卡

用于让用户在不同的视图中进行切换。

## 截图
![vtabs 纵向选项卡](https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*Z1-_Qpx1nVwAAAAAAAAAAABkARQnAQ)

## 扫码体验

![](http://mdn.alipayobjects.com/afts/img/A*WsyHSJGoGNMAAAAAAAAAAABkAa8wAA/original?bz=openpt_doc&t=a8iGRMQiins5W8ZubeTGcQAAAABkMK8AAAAA)



## 属性介绍
vtabs 纵向选项卡包含了 `<vtabs>` 和 `<vtab-content>` 两部分。

### vtabs

| 属性名 | 类型 | 默认值 | 可选项 | 描述 | 最低版本 | 必填 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| className | String | - | - | 自定义 class | - | - |
| activeTab | Number | 0 | - | 当前激活 Tab 索引 | - | - |
| tabs | Array | - | - | tab 数据 | - | true |
| animated | Boolean | false | - | 是否开启动画 | - | - |
| swipeable | Boolean | true | - | 是否可滑动切换 | - | - |
| tabBarActiveTextColor | String | #1677FF | - | tabBar 激活状态文字颜色 | - | - |
| tabBarActiveBgColor | String | #ffffff | - | tabBar 激活状态背景色 | - | - |
| tabBarInactiveTextColor | String | #333333 | - | tabBar 非激活状态文字颜色 | - | - |
| tabBarInactiveBgColor | String | #f5f5f5 | - | tabBar 非激活状态背景色 | - | - |
| tabBarlineColor | String | #1677FF | - | tabBar 激活状态边线 | - | - |
| onTabClick | EventHandle | (index: Number) => void | - | tab 被点击时的回调 | - | - |
| onChange | EventHandle | (index: Number) => void | - | vtab-content变化时触发 | - | - |

### vtab-content

| 属性名 | 类型 | 默认值 | 可选项 | 描述 | 最低版本 | 必填 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| anchor | String | - | - | 列表唯一锚点值 | - | true |

## Bug & Tip
* `tabs` 的数组中需要包含 **vtab-content** 中的 `anchor`；
* `tabs` 数组的数据格式：`[{ title: '', anchor: '', number: '99+',},]`；

## 代码示例

```json
{
  "defaultTitle": "Vtabs",
  "usingComponents": {
    "vtabs": "mini-ali-ui/es/vtabs/index",
    "vtab-content": "mini-ali-ui/es/vtabs/vtab-content/index"
  }
}
```

```xml
<vtabs
  tabs="{{tabs}}"
  onTabClick="handleChange"
  onChange="onChange"
  activeTab="{{activeTab}}"
>
  <block a:for="{{tabs}}">
    <vtab-content anchor="{{item.anchor}}">
      <view style="height: {{item.anchor === 'b'?'50vh':'100vh'}};background-color: {{item.anchor === 'b'?'#ccc':''}};">
        <text>content of {{item.title}}</text>
      </view>
    </vtab-content>
  </block>
</vtabs>
```

```javascript
Page({
  data: {
    activeTab: 2,
    tabs: [
      { title: '选项二', anchor: 'a', number: '6' },
      { title: '选项', anchor: 'b', number: '66' },
      { title: '不超过五字', anchor: 'c', number: '99+' },
      { title: '选项四选项四选项四选项四', anchor: 'd' },
      { title: '选项五', anchor: 'e' },
      { title: '选项六', anchor: 'f' },
    ],
  },
  handleChange(index) {
    this.setData({
      activeTab: index,
    });
  },
  onChange(index) {
    this.setData({
      activeTab: index,
    });
  },
});
```
