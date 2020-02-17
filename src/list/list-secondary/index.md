## ListSecondary 列表次级信息子组件

位于列表右侧的次级信息组件，用于列表项的extra插槽。

## 属性

| 属性名        | 类型    | 默认值 | 可选值                     | 描述                                               | 最低版本 | 必填           |
| ------------- | ------- | ------ | -------------------------- | -------------------------------------------------- | -------- | -------------- |
| thumb         | String  | -      | -                          | 缩略图地址                                         | -        | -              |
| title         | String  | -      | -                          | 标题 | -        | -              |
| subtitle      | String  | -      | -                          | 副标题                                           | -        | -              |
| thumbSize     | String  | - | - | 缩略图大小，建议手动设值。<br/> 不设值时图片的高度会有一定的自适应能力，**但不能保证跟文案内容高度完全一致** | - | 有缩略图时必填 |



## Slot

list-item共有6个插槽，位置和名称如下图所示

![img](https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*iw6UQKNO-MAAAAAAAAAAAABkARQnAQ)

list-secondary用于放在**extra**插槽

具体可以查看list-item组件

## 示例
### json
```json
{
  "defaultTitle": "List",
  "usingComponents":{
    "list": "mini-ali-ui/es/list/index",
    "list-item": "mini-ali-ui/es/list/list-item/index",
    "list-secondary": "mini-ali-ui/es/list/list-secondary/index",
  }
}
```

### axml
```xml
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
    <list-secondary 
      title="次级标题" 
      subtitle="次级副标题" 
      thumb="http://thumb.url.jpg"
      thumbSize="20"
      slot="extra" />
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