## ListItem 列表项

列表项

## 属性

| 属性名        | 类型    | 默认值 | 可选值                     | 描述                                               | 最低版本 | 必填           |
| ------------- | ------- | ------ | -------------------------- | -------------------------------------------------- | -------- | -------------- |
| arrow         | Boolean | true   | -                          | 是否启用箭头                                       | -        | -              |
| thumb         | String  | -      | -                          | 缩略图地址                                         | -        | -              |
| index         | String  | -      | -                          | 用于记录位置的index, 在事件回调中会将这个index回传 | -        | -              |
| borderRadius  | Boolean | false  | -                          | 列表项是否圆角                                     | -        | -              |
| upperSubtitle | String  | -      | -                          | 上副标题                                           | -        | -              |
| lowerSubtitle | String  | -      | -                          | 下副标题                                           | -        | -              |
| titlePosition | String  | top    | top<br/> middle<br/>bottom | 主标题位置                                         | -        | -              |
| thumbSize     | String  | - | - | 缩略图大小，建议手动设值。<br/> 不设值时图片的高度会有一定的自适应能力，**但不能保证跟文案内容高度完全一致** | - | 有缩略图时必填 |
| onClick       | Function| -      | -                          | 点击列表项事件                                       | -        | -              |



## Slot

list-item共有6个插槽，位置和名称如下图所示

![img](https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*iw6UQKNO-MAAAAAAAAAAAABkARQnAQ)



| 插槽名称           | 描述                                     |
| ------------------ | ---------------------------------------- |
| supporting         | 列表头部插槽                             |
| default            | 默认插槽，用于放置主标题                 |
| afterTitle         | 主标题后面的插槽，可用于放置标签，图标   |
| afterUpperSubtile  | 上副标题后面的插槽，可用于放置标签，图标 |
| afterLowerSubtitle | 下副标题后面的插槽，可用于放置标签，图标 |
| extra              | 列表尾部插槽，用于放置辅助信息           |

## 代码示例
### json
```json
{
  "defaultTitle": "List",
  "usingComponents":{
    "list": "../../es/list/index",
    "list-item": "../../es/list/list-item/index",
  }
}
```

### axml
```html
<list>
  <view slot="header">
    列表头部
  </view>
  <list-item thumb="http://thumb.link.png" 
    arrow="{{true}}" 
    onClick="onItemClick" 
    upperSubtitle="上副标题" 
    lowerSubtitle="下副标题" >
    主标题
    <view slot="extra">
      辅助信息
    </view>
  </list-item>
  <view slot="footer">
    列表尾部
  </view>
</list>
```

### js
```javascript
Page({
  onItemClick() {
    my.alert({
      content: '列表项点击事件'
    })
  }
})
```