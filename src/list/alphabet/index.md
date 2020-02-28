## Alphabet 字母检索表

字母检索表

## 预览
<img src="https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*dxUqTYRYZBsAAAAAAAAAAABkARQnAQ" alt="img" style="zoom:50%;" />

## 扫码体验

![image](http://mdn.alipayobjects.com/afts/img/A*KNOYT4LW3VEAAAAAAAAAAABkAa8wAA/original?bz=openpt_doc&t=LvZJ0dVW6YGHzehjluyj7wAAAABkMK8AAAAA)



## 属性介绍

| 属性名        | 类型    | 默认值 | 可选值                     | 描述                                               | 最低版本 | 必填           |
| ------------- | ------- | ------ | -------------------------- | -------------------------------------------------- | -------- | -------------- |
| alphabet      | Array   | -      | -                       | 字母表内容 | -        | -              |


## 代码示例
```json
{
  "defaultTitle": "Alphabet",
  "usingComponents":{
    "alphabet": "mini-ali-ui/es/list/alphabet/index",
    "am-icon": "mini-ali-ui/es/am-icon/index"
  }
}
```

```xml
<view style="position: relative; height: 100vh;">
	<alphabet alphabet="{{alphabet}}" onClick="onAlphabetClick" >
		<view slot="prefix"><am-icon size="12" type="check_"/></view>
	</alphabet>
</view>
```

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