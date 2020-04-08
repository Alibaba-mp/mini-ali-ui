# Collapse 折叠面板

可以折叠 / 展开的内容区域。
* 对复杂区域进行分组和隐藏，保持页面的整洁。
* **手风琴模式**是一种特殊的折叠面板，只允许单个内容区域展开。


## 截图
![collapse 折叠面板](https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*cPXdQZmoXfIAAAAAAAAAAABkARQnAQ)



## 扫码体验

![image](http://mdn.alipayobjects.com/afts/img/A*zPrfTYBFXaQAAAAAAAAAAABkAa8wAA/original?bz=openpt_doc&t=6VlOp_JCeXb8UFqBpZsovAAAAABkMK8AAAAA)



## 属性介绍
Collapse 折叠面板主要是有 `<collapse>` 和 `<collapse-item>` 两部分组成，所以，属性也有所不同。

### collapse
| 属性名 | 类型 | 默认值 | 可选项 | 描述 | 最低版本 | 必填 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| className | String | - | - | 自定义 class | - | - |
| activeKey | Array / String | 默认无，accordion模式下默认第一个元素 | - | 当前激活 tab 面板的 key | - | - |
| accordion | Boolean | false | - | 是否为手风琴模式 | - | - |
| collapseKey | String | - | - | 唯一标识 collapse 所对应的 collapse-item | - | - |
| onChange | EventHandle | (activeKeys: Array): void | - | 切换面板的回调 | - | - |

### collapse-item
| 属性名 | 类型 | 默认值 | 可选项 | 描述 | 最低版本 | 必填 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| className | String | - | - | 自定义 class | - | - |
| titleClass | String | - | - | 自定义标题的 class | - | - |
| contentClass | String | - | - | 自定义内容区域的 class | - | - |
| isOpen | Boolean | false | - | 面板内容是否展开 | - | - |
| showArrow | Boolean | true | - | 是否显示箭头 | - | - |
| itemKey | String | - | - | 对应 activeKey，组件唯一标识 | - | - |
| header | String | - | - | 面板头内容 | - | - |
| collapseKey | String | - | - | 唯一标识 collapse-item 所对应的 collapse | - | - |
| disabled | Boolean | false | - | 当前面板是否可点击使用 | - | - |

## Bug & Tip

当页面中存在多个 collapse 组件时，collapse 所对应的collapse-item 的 collapseKey 属性为必选值并且必须相等；
当页面中只有一个 collapse 组件时，collapseKey 不需要提供。

## 代码示例

```json
{
  "defaultTitle": "Collapse",
  "usingComponents": {
    "collapse": "mini-ali-ui/es/collapse/index",
    "collapse-item": "mini-ali-ui/es/collapse/collapse-item/index"
  }
}
```

```xml
<view>
  <view class="demo-title">基础用法</view>
  <collapse
    className="demo-collapse"
    collapseKey="collapse1"
    activeKey="{{['item-11', 'item-13']}}"
    onChange="onChange"
  >
    <collapse-item header="标题1" itemKey="item-11" collapseKey="collapse1">
      <view class="item-content">
        <block a:for="{{randomLine}}">
          <view>自适应高度的内容区域 共 {{index + 1}} 行</view>
        </block>
      </view>
    </collapse-item>
    <collapse-item header="标题2" itemKey="item-12" collapseKey="collapse1">
      <view class="item-content content2">
        <view>内容区域</view>
      </view>
    </collapse-item>
    <collapse-item header="标题3" itemKey="item-13" collapseKey="collapse1">
      <view class="item-content content3">
        <view>内容区域</view>
      </view>
    </collapse-item>
  </collapse>
  <view class="demo-title">手风琴模式</view>
  <collapse
    className="demo-collapse"
    collapseKey="collapse2"
    activeKey="{{['item-21', 'item-23']}}"
    onChange="onChange"
    accordion="{{true}}"
  >
    <collapse-item header="标题1" itemKey="item-21" collapseKey="collapse2">
      <view class="item-content">
        <block a:for="{{randomLine}}">
          <view>自适应高度的内容区域 共 {{index + 1}} 行</view>
        </block>
      </view>
    </collapse-item>
    <collapse-item header="标题2" itemKey="item-22" collapseKey="collapse2">
      <view class="item-content content2">
        <view>内容区域</view>
      </view>
    </collapse-item>
    <collapse-item header="标题3" itemKey="item-23" collapseKey="collapse2">
      <view class="item-content content3">
        <view>内容区域</view>
      </view>
    </collapse-item>
  </collapse>  
</view>
```

```css
.item-content {
  padding: 14px 16px;
  font-size: 17px;
  color: #333;
  line-height: 24px;
}

.content1 {
  height: 200px;
}

.content2 {
  height: 50px;
}

.content3 {
  height: 100px;
}

.demo-title {
  padding: 14px 16px;
  color: #999;
}

.demo-collapse {
  border-bottom: 1px solid #eee;
}
```

```javascript
Page({
  data: {
    randomLine: 0,
  },
  onShow() {
    this.setData({
      randomLine: parseInt(Math.random()*20 + 1, 0),
    })
  },
  onChange(e) {
    console.log('collapse change', e);
  },
});
```
