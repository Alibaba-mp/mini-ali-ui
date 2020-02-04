# Flex Flex布局

CSS flex布局的封装。

## 截图
<img src="https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*4h5tRJZKSAcAAAAAAAAAAABkARQnAQ" alt="flex 布局" style="zoom:50%;" />

## 属性介绍
Flex 布局是由 `<flex>` 和 `<flex-item>` 两种标签组合的，相对应的属性值的情况也有所不同。

### flex
| 属性名 | 类型 | 默认值 | 可选项 | 描述 | 最低版本 | 必填 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| direction | String | row | row、row-reverse、column、column-reverse | 项目定位方向 | - | - |
| wrap | String | nowrap | nowrap、wrap、wrap-reverse | 子元素的换行方式 | - | - |
| justify | String | start | start、end、cener、between、around | 子元素在主轴上的对齐方式 | - | - |
| align | String | center | start、center、end、baseline、stretch | 子元素在交叉轴上的对齐方式 | - | - |
| alignContent | String | stretch | start、end、center、between、around、stretch | 有多跟轴线时的对齐方式 | - | - |

### flex-item

flex-item 组件默认加上了样式 flex:1，保证所有 item 平均分宽度，flex 容器的 children 不一定是 flex-item。

## 代码示例

```json
{
  "defaultTitle": "flex 布局",
  "usingComponents": {
    "flex": "mini-ali-ui/es/flex/index",
    "flex-item": "mini-ali-ui/es/flex/flex-item/index"
  }
}
```

```xml
<view class="flex-container">
  <view class="sub-title">Basic</view>
  <flex>
    <flex-item><view class="placeholder">Block</view></flex-item>
    <flex-item><view class="placeholder">Block</view></flex-item>
  </flex>
  <view style="height: 20px;" />
  <flex>
    <flex-item><view class="placeholder">Block</view></flex-item>
    <flex-item><view class="placeholder">Block</view></flex-item>
    <flex-item><view class="placeholder">Block</view></flex-item>
  </flex>
  <view style="height: 20px;" />
  <flex>
    <flex-item><view class="placeholder">Block</view></flex-item>
    <flex-item><view class="placeholder">Block</view></flex-item>
    <flex-item><view class="placeholder">Block</view></flex-item>
    <flex-item><view class="placeholder">Block</view></flex-item>
  </flex>
  <view className="sub-title">Wrap</view>
  <flex wrap="wrap">
    <view class="placeholder inline">Block</view>
    <view class="placeholder inline">Block</view>
    <view class="placeholder inline">Block</view>
    <view class="placeholder inline">Block</view>
    <view class="placeholder inline">Block</view>
  </flex>
  <view className="sub-title">Align</view>
  <flex justify="center">
    <view class="placeholder inline">Block</view>
    <view class="placeholder inline">Block</view>
    <view class="placeholder inline">Block</view>
  </flex>
  <flex justify="end">
    <view class="placeholder inline">Block</view>
    <view class="placeholder inline">Block</view>
    <view class="placeholder inline">Block</view>
  </flex>
  <flex justify="between">
    <view class="placeholder inline">Block</view>
    <view class="placeholder inline">Block</view>
    <view class="placeholder inline">Block</view>
  </flex>
  <flex align="start">
    <view class="placeholder inline">Block</view>
    <view class="placeholder inline small">Block</view>
    <view class="placeholder inline">Block</view>
  </flex>
  <flex align="end">
    <view class="placeholder inline">Block</view>
    <view class="placeholder inline small">Block</view>
    <view class="placeholder inline">Block</view>
  </flex>
  <flex align="baseline">
    <view class="placeholder inline">Block</view>
    <view class="placeholder inline small">Block</view>
    <view class="placeholder inline">Block</view>
  </flex>
</view>
```

```css
.flex-container {
  padding: 10px;
}

.sub-title {
  color: #888;
  font-size: 14px;
  padding: 30px 0 18px 0;
}

.placeholder {
  background-color: #ebebef;
  color: #bbb;
  text-align: center;
  height: 30px;
  line-height: 30px;
  width: 100%;
}

.placeholder.inline {
  width: 80px;
  margin: 9px 9px 9px 0;
}

.placeholder.small {
  height: 20px;
  line-height: 20px
}
```

```javascript
Page({});
```
