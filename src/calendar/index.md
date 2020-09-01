# Calendar 日历

单日历组件。

## 截图
<img src="https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*aSuuRJJNNCkAAAAAAAAAAABkARQnAQ" alt="calendar 日历" style="zoom:50%;" />

## 扫码体验

![image](http://mdn.alipayobjects.com/afts/img/A*QTU7SIUZWwkAAAAAAAAAAABkAa8wAA/original?bz=openpt_doc&t=p-804BKLyQGDJy97jUCirwAAAABkMK8AAAAA)



## 属性介绍

| 属性名 | 类型 | 默认值 | 可选项 | 描述 | 最低版本 | 必填 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| className | String | - | - | 自定义 class | - | - |
| type | String | single | single、range | 日期选择模式 | - | - |
| haveYear | Boolean | false | - | 是否展示年份控制箭头 | - | - |
| prevMonthDisable | Boolean | false | - | 前一个月份箭头禁用 | - | - |
| prevYearDisable | Boolean | false | - | 前一个年份箭头禁用 | - | - |
| nextvMonthDisable | Boolean | false | - | 后一个月份箭头禁用 | - | - |
| nextYearDisable | Boolean | false | - | 后一个年份箭头禁用 | - | - |
| tagData | Array | - | `[{ date: '日期', tag: '标签', tagColor: 1, disable: true,},]`，可设置多个不同日期的标签内容，颜色以及是否禁用。| - | - |
| onSelect | EventHandle | ([startDate, endDate]) => void | - | 选择区间时的回调 | - | - |
| onMonthChange | EventHandle | (currentMonth, prevMonth) => void | - | 点击切换月份时回调，带两个参数currentMonth切换后月份和prevMonth切换前月份 | - | - |
| onYearChange | EventHandle | (currentYear, prevYear) => void | - | 点击切换年份时回调，带两个参数currentYear切换后年份和prevYear切换前年份 | - | - |
| onChange | EventHandle | (current, prev) => void | - | 年/月变化时回调，带两个对象，每个均携带year和month信息 | - | - |
| onSelectHasDisableDate | EventHandle | (currentMonth, prevMonth) => void | - | 选择区间包含不可用的日期 | - | - |

## Bug & Tip
* `tagColor` 共有 5 中颜色：
  * `1`: #ff6010,
  * `2`: #00b578,
  * `3`: #ff8f1f,
  * `4`: #1677ff,
  * `5`: #999,
* `prevMonthDisable`、`prevYearDisable`、`nextvMonthDisable` 以及 `nextYearDisable` 四个主要控制日历上的箭头是否可点击使用，可根据实际业务场景来使用；
* `tagData` 中的 `disable` 是可选项，如某日期需要提示禁用不可点时才需要增加，当不可用时，`tag` 以及 `tagColor` 将不会展示；
* 月份计数从 0 开始，即 0 代表 1 月份，以此类推，月份返回值 11 代表 12 月份；

## 代码示例

```json
{
  "defaultTitle": "Calendar",
  "usingComponents":{
    "calendar": "mini-ali-ui/es/calendar/index"
  }
}
```

```xml
<view>
  <calendar
    type="range"
    haveYear="{{true}}"
    tagData="{{tagData}}"
    onSelect="handleSelect"
    onMonthChange="onMonthChange"
    onYearChange="onYearChange"
    onChange="onChange"
    onSelectHasDisableDate="onSelectHasDisableDate" />
</view>
```

```javascript
Page({
  data: {
    tagData: [
      { date: '2020-02-14', tag: '颜色 1', tagColor: 1 },
      { date: '2020-02-28', tag: '公积金', tagColor: 2 },
      { date: '2020-02-24', tag: '颜色 3', tagColor: 3 },
      { date: '2020-02-18', tag: '颜色 4', tagColor: 4 },
      { date: '2020-02-4', tag: '还房贷', tagColor: 5 },
      { date: '2020-02-10', tag: '公积金', disable: true },
    ],
  },
  handleSelect() {},
  onMonthChange() {},
  onYearChange() {},
  onChange() {},
  onSelectHasDisableDate() {
    my.alert({
      content: 'SelectHasDisableDate',
    });
  },
});
```