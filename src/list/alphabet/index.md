## Alphabet 字母检索表

位于列表右侧的次级信息组件，用于列表项的extra插槽。

## 预览
![img](https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*dxUqTYRYZBsAAAAAAAAAAABkARQnAQ)

## 属性

| 属性名        | 类型    | 默认值 | 可选值                     | 描述                                               | 最低版本 | 必填           |
| ------------- | ------- | ------ | -------------------------- | -------------------------------------------------- | -------- | -------------- |
| thumb         | String  | -      | -                          | 缩略图地址                                         | -        | -              |
| alphabet      | Array   | -      | -                       | 字母表内容 | -        | -              |


## 示例
### json
```json
{
  "defaultTitle": "Alphabet",
  "usingComponents":{
    "alphabet": "../../es/list/alphabet/index",
    "am-icon": "../../es/am-icon/index"
  }
}
```

### axml
```xml
<view style="position: relative; height: 100vh;">
	<alphabet alphabet="{{alphabet}}" onClick="onAlphabetClick" >
		<view slot="prefix"><am-icon size="12" type="success_"/></view>
	</alphabet>
</view>
```

### js
```javascript
Page({
  data: {
    alphabet: [],
  },
  onLoad() {
    const charCode = 65;
    const charList = [];
    for (let i = 0; i < 26; i++) {
      charList.push(String.fromCharCode(charCode + i));
    }
    this.setData({
      alphabet: charList,
    });
  },
  onAlphabetClick(ev) {
    my.alert({
      content: JSON.stringify(ev.data),
    });
  },
});
```