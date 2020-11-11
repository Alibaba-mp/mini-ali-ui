# Container 容器

容器依据最佳实践统一了子元素的间距、圆角。


## 截图
<img src="https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*IaaZSYKZltoAAAAAAAAAAABkARQnAQ" />

## 扫码体验

![image](http://mdn.alipayobjects.com/afts/img/A*pwAATYMd1QrJDSpHuG3BmgBkAa8wAA/original?bz=openpt_doc&t=vlZyr3VNmNSzHO8POSLb0wAAAABkMK8AAAAA)



## 属性介绍
| 属性名 | 类型 | 默认值 | 可选值 | 描述 | 必填 | 最低版本 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| className | String | - | - | 自定义样式名 | - | - |
| type | String | line | line, onewithtwo | 容器排版类型 | - | - |
| title | String | '' | - | 当不为空时可展示 **title** 组件 | - | [1.2.0](https://www.npmjs.com/package/mini-ali-ui?activeTab=versions) |
| thumb | String | '' | - | 标题区域的 icon URL | - | [1.2.0](https://www.npmjs.com/package/mini-ali-ui?activeTab=versions) |
| icon | String | '' | arrow、close、more | 标题区域右侧的 icon 图标 | - | [1.2.0](https://www.npmjs.com/package/mini-ali-ui?activeTab=versions) |
| onActionTap | EventHandle | () => {} | - | 标题区域右侧可点击事件 | - | [1.2.0](https://www.npmjs.com/package/mini-ali-ui?activeTab=versions) |

## tips
* type 为 line 时会等分所有子元素；
* 当 `icon` 的值为空时，可添加 `slot="operation"` 元素展示在标题的右侧区域；
* 如使用 `title` 属性后，就不需要再在 json 中引入 **title** 组件；

## 示例

```json
{
  "defaultTitle": "Container",
  "usingComponents": {
    "container": "mini-ali-ui/es/container/index",
    "title": "mini-ali-ui/es/title/index"
  }
}
```

```xml
<view className="container">
  <container className="container-item"
    title="带有 title 标题，可自定义设置"
    thumb="https://img.alicdn.com/tfs/TB1Go8lh9R26e4jSZFEXXbwuXXa-84-84.png"
    onActionTap="titleClick"
  >
    <view slot="operation" style="color: red;">is slot</view>
    <view class="item">container 组件自带的 title 属性值效果。icon 无值或者为空时，可插入一个名为 operation 的 slot 元素。</view>
  </container>

  <container className="container-item"
    title="带有 title 标题，箭头"
    icon="arrow"
    thumb="https://img.alicdn.com/tfs/TB1Q19sTNv1gK0jSZFFXXb0sXXa-112-112.png"
    onActionTap="titleClick"
  >
    <view class="item">container 组件自带的 title 属性值效果</view>
  </container>

  <container className="container-item"
    title="带有 title 标题，关闭"
    icon="close"
    thumb="https://img.alicdn.com/tfs/TB1Go8lh9R26e4jSZFEXXbwuXXa-84-84.png"
    onActionTap="titleClick"
  >
    <view class="item">container 组件自带的 title 属性值效果</view>
  </container>

  <container className="container-item"
    title="带有 title 标题，更多"
    icon="more"
    thumb="https://img.alicdn.com/tfs/TB1Q19sTNv1gK0jSZFFXXb0sXXa-112-112.png"
    onActionTap="titleClick"
  >
    <view class="item">container 组件自带的 title 属性值效果</view>
  </container>

  <container className="container-item"
    title="带有 title 标题，无"
    thumb="https://img.alicdn.com/tfs/TB1Go8lh9R26e4jSZFEXXbwuXXa-84-84.png"
    onActionTap="titleClick"
  >
    <view class="item">container 组件自带的 title 属性值效果</view>
  </container>
</view>

<view className="container">
  <container className="container-item">
    <view class="item">a1</view>
  </container>
  <container className="container-item">
    <view class="item">b1</view>
    <view class="item">b2</view>
  </container>
  <container className="container-item">
    <title slot="header" hasLine="true" showIcon="true" iconURL="https://gw.alipayobjects.com/mdn/miniProgram_mendian/afts/img/A*wiFYTo5I0m8AAAAAAAAAAABjAQAAAQ/original">内部标题无操作</title>
    <view class="item">c1</view>
    <view class="item">c2</view>
    <view class="item">c3</view>
    <view slot="footer" class="footer" style="padding-left: 12px;">底部展示区</view>
  </container>
  <container className="container-item">
    <title slot="header">滑动</title>
    <swiper indicator-dots="{{true}}" class="item">
      <block a:for="{{['#0abc80','#00b7f4']}}">
        <swiper-item>
          <view style="background-color: {{item}};width:100%;height:300rpx;border-radius:16rpx;"/>
        </swiper-item>
      </block>
    </swiper>
  </container>
  <container className="container-item" type="onewithtwo">
    <view class="grid-item" style ="height: 300rpx;" slot="first">first</view>
    <view class="grid-item" slot="second">second</view>
    <view class="grid-item" slot="third">third</view>
  </container>
</view>
```

```javascript
Page({
  data: {},
  onLoad() {},
  titleClick() {
    my.alert({
      title: 'onActionTap 回调',
      content: '标题后面操作区域点击',
    });
  },
});
```

```css
.container {
  background: #F5F5F5;
  padding: 24rpx;
  height: 100%;
}

.container-item {
  margin-bottom: 24rpx;
}

.footer {
  color: #333;
  margin-top: 24rpx;
}

.item {
  background: #eeeeee;
  text-align: center;
  height: 200rpx;
  padding-top: 20rpx;
}

.grid-item {
  background: #eeeeee;
  text-align: center;
}
```