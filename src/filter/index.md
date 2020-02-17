# Filter 筛选

用作标签卡筛选。

## 截图
<img src="https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*QVA0RZfaWkAAAAAAAAAAAABkARQnAQ"/>
## 属性介绍

### filter

| 属性名 | 类型 | 默认值 | 可选项 | 必选 | 描述 |
| ---- | ---- | ---- | ---- | ---- |---- |
| show | String | hide | show, hide | - | 是否显示 |
| max |  Number | 10000 | - | - | 可选数量最大值，1为单选 |
| equalRows |  Number | - | 2,3 | - | 把filter-item等分成2或者3列 |
| onChange | (e: Object) => void |- | - | - | 多选时提交选中回调 |
| onMaskTap | () => void | -| - | - | 点击遮罩层时触发，可用于关闭 filter |

### filter-item

| 属性名 | 类型 | 默认值 | 可选项 |必选 | 描述 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| className | String | - | - | - | 自定义样式 |
| value | String | - | - | yes | 值 |
| id | String | - | - | - | 自定义标识符 |
| selected | Boolean | false | true,false | - | 默认选中 |
| onChange | (e: Object) => void | - | - | - | 单选时提交选中回调 |

## 示例

```json
{
  "defaultTitle": "单选",
  "usingComponents": {
    "filter": "mini-ali-ui/es/filter/index",
    "filter-item": "mini-ali-ui/es/filter/filter-item/index"
  }
}
```

```xml
<filter show="{{show}}" max="{{1}}" equalRows="{{3}}">
  <block a:for="{{items}}">
    <filter-item value="{{item.value}}" subtitle="{{item.subtitle}}" id="{{item.id}}" onChange="handleCallBack" selected="{{item.selected}}" key="filter-item-{{key}}" />
  </block>
</filter>

```

```javascript
Page({
  data: {
    show: true,
    items: [
      { id: 1, value: '衣服啊', selected: true },
      { id: 1, value: '橱柜' },
      { id: 1, value: '衣服' },
      { id: 1, value: '橱柜' },
      { id: 1, value: '衣服' },
      { id: 1, value: '橱柜' },
      { id: 1, value: '衣服' },
      { id: 1, value: '橱柜' },
      { id: 1, value: '橱柜' },
    ],
  },
  handleCallBack(data) {
    my.alert({
      content: data,
    });
  },
  toggleFilter() {
    this.setData({
      show: !this.data.show,
    });
  },
});

```
