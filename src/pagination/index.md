# Pagination 分页

分页标识符。

## 扫码体验

待统一截图添加

## 截图
![pagination 分页符](https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*Rx1NSbwPvYsAAAAAAAAAAABkARQnAQ)

## 属性介绍

| 属性名 | 类型 | 默认值 | 可选项 | 描述 | 最低版本 | 必填 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| className | String | - | - | 自定义 class | - | - |
| infinite | Boolean | false | - | 是否无限滚动分页 | - | - |
| fillColor | String | #ddd | - | 无限滚动分页符背景色 | - | - |
| frontColor | String | #006EFF | - | 无限滚动分页符颜色，当前页高亮颜色 | - | - |
| pagerName | String | - | - | 无限滚动分页符名称 | - | - |
| height | String | 100px | - | 无限滚动分页容器的高度 | - | - |
| white | Boolean | false | - | 是否显示反白分页符 | - | - |
| max | Number | 5 | - | 常规分页符最大显示数量 | - | - |
| currentPage | Number | 1 | - | 常规分页符当前页 | - | - |

## Bug & Tip
* 分页符组件共有两种模式：无限滚动模式和常规分页符：
  * 无限滚动模式 `<pagination infinite="{{true}}"></pagination>`；
  * 常规分页符：`<pagination />`；
* 无限滚动模式可通过 `fillColor` 和 `frontColor` 设置颜色；
* 常规分页符可通过 `frontColor` 改变当前页 icon 颜色；
* 当 `white` 反白为 `true` 时，不可再修改颜色；
* 无限滚动模式是双标签形式包含内容，可通过 `height` 设置容器高度；
* 如一个页面中存在多个无限滚动分页符，建议设置 `pagerName`，避免分页效果显示错误；

## 代码示例

```json
{
  "defaultTitle": "pagination 分页",
  "usingComponents": {
    "pagination": "mini-ali-ui/es/pagination/index"
  }
}
```

```xml
<pagination pagerName='test1' infinite="true">
  <view style="display: flex;">
    <view style="flex: 0 0 auto;width: 100vw;background-color: yellow;">文字</view>
    <view style="flex: 0 0 auto;width: 90vw;background-color: blue;">文字</view>
    <view style="flex: 0 0 auto;width: 50vw;background-color: red;">文字</view>
    <view style="flex: 0 0 auto;width: 120vw;background-color: green;">文字</view>
    <view style="flex: 0 0 auto;width: 20vw;background-color: grey;">文字</view>
  </view>
</pagination>

<view style="width: 50vw;">
  <pagination pagerName='test2' height="300px" white="true" infinite="true">
    <view style="width: 110vw;height: 100%;background-color: #f32600;color: #fff;">反白的无极翻页</view>
  </pagination>
</view>

<view style="margin-top: 20px;">正常翻页样式</view>
<view style="padding: 20px 20px 0;background-color: yellow;">
  <pagination currentPage="{{3}}" max="{{10}}" height="200px" />
</view>

<view style="margin-top: 20px;">反白翻页样式</view>
<view style="padding: 20px 20px 0;background-color: red;">
  <pagination currentPage="{{5}}" white="true" />
</view>
```
