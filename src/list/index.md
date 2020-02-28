## List 列表

列表。

## 扫码体验

![](http://mdn.alipayobjects.com/afts/img/A*4q61RJSr6m4AAAAAAAAAAABkAa8wAA/original?bz=openpt_doc&t=JVlQE2VGLHmBy7Lm0u4fegAAAABkMK8AAAAA)




## list

| 属性名      | 类型   | 默认值                               | 可选值 | 描述                                                         | 最低版本 | 必填 |
| ----------- | ------ | ------------------------------------ | ------ | ------------------------------------------------------------ | -------- | ---- |
| className   | String | -                                    | -      | 自定义class                                                  | - | -  |
| loadMore    | String | -                                    | -      | 显示加载更多 item。`load`：显示加载更多；`over`：显示加载完成无更多 | - | -  |
| loadContent | Array  | ['加载更多...','-- 数据加载完了 --'] | -      | 需结合 `loadMore` 属性使用，用于文案展示                     | - | -  |
| loadingSize | String | 16px | - | loading icon 的大小 | - | - |

### loadMore 使用介绍
当需要使用无限循环列表时，可将 `list` 组件放置入到 [`scroll-view`](https://docs.alipay.com/mini/component/scroll-view) 中，根据需求对 [`scroll-view`](https://docs.alipay.com/mini/component/scroll-view) 添加相对应的属性，比如：
```xml
<scroll-view style="height: 80vh;" scroll-y onScrollToLower="onScrollToLower" enable-back-to-top="true">
  <list loadMore="{{loadMore}}" loadContent="{{loadContent}}">
    <list-item>...</list-item>
  </list>
</scroll-view>
```
```javascript
Page({
  data: {
    loadMore: '',
    loadContent: [
      '马不停蹄加载更多数据中...',
      '-- 已经到底了，加不了咯 --',
    ],
  },
  onScrollToLower() {
    // 根据实际数据加载情况设定 loadMore 的值即可，分别为 load 和 over
    this.setData({
      loadMore: 'load',
    })
  },
})
```

### slots

| slotName | 说明 |
| ---- | ---- |
| header | 可选，列表头部 |
| footer | 可选，用于渲染列表尾部 |
