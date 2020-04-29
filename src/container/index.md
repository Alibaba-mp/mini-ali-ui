# Container 容器

容器依据最佳实践统一了子元素的间距、圆角。


## 截图
<img src="https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*IaaZSYKZltoAAAAAAAAAAABkARQnAQ" />

## 扫码体验

![image](http://mdn.alipayobjects.com/afts/img/A*pwAATYMd1QrJDSpHuG3BmgBkAa8wAA/original?bz=openpt_doc&t=vlZyr3VNmNSzHO8POSLb0wAAAABkMK8AAAAA)



## 属性介绍
| 属性名 | 类型 | 默认值 | 可选值 | 描述 | 必填 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| className | String | - | - | 自定义样式名 | - |
| type | String | line | line, onewithtwo | 容器排版类型 | - |

## tips
type 为 line 时会等分所有子元素。

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
  <container className="container-item">
    <view class="item">a1</view>
  </container>
  <container className="container-item">
    <view class="item">b1</view>
    <view class="item">b2</view>
  </container>
  <container className="container-item">
    <title slot="header" hasLine="true" showIcon="true" xcxPath="https://gw.alipayobjects.com/mdn/miniProgram_mendian/afts/img/A*wiFYTo5I0m8AAAAAAAAAAABjAQAAAQ/original">内部标题无操作</title>
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
}

.grid-item {
  background: #eeeeee;
  text-align: center;
}

```