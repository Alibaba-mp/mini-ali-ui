## ListItem 列表项

列表。


## 属性

| 属性名      | 类型   | 默认值                               | 可选值 | 描述                                                         | 最低版本 | 必填 |
| ----------- | ------ | ------------------------------------ | ------ | ------------------------------------------------------------ | -------- | ---- |
| className   | String | -                                    | -      | 自定义class                                                  |          | 否   |
| loadMore    | String | -                                    | -      | 显示加载更多 item。`load`：显示加载更多；`over`：显示加载完成无更多 |          | 否   |
| loadContent | Array  | ['加载更多...','-- 数据加载完了 --'] | -      | 需结合 `loadMore` 属性使用，用于文案展示                     |          | 否   |


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
