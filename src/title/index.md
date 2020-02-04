# title 标题模块

页面内每个容器模块中的标题模块。


## 截图
![title 标题模块](https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*ykKWRYvzEM8AAAAAAAAAAABkARQnAQ)

## 属性介绍

| 属性名 | 类型 | 默认值 | 可选项 | 描述 | 最低版本 | 必填 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| className | String| - | - | 自定义class | - | - |
| hasLine | Boolean| false | - | 是否有下划线 | - | - |
| iconURL | String | - | - | 标题旁边的 icon URL | - | - |
| type | String| - | arrow、close、more | 标题可操作区域类型，包含：`arrow`：箭头；`close`：关闭；`more`：更多；默认为空。 | - | - |
| onActionTap | EventHandle | () => {} | - | type 属性有具体值时可点击事件 | - | - |

## Bug & Tip
* `iconURL` 是默认以背景图的方式展示在一个正方形的元素中；
* 如 `type` 为空，`onActionTap` 将无效；

## 代码示例
```json
{
  "defaultTitle": "title 组件",
  "usingComponents": {
    "title": "mini-ali-ui/es/title/index"
  }
}
```

```xml
<title
  hasLine="true"
  type="more"
  onActionTap="titleMore"
>内部标题无 icon 展开气泡菜单</title>

<title
  hasLine="true"
  iconURL="https://t.alipayobjects.com/images/T1HHFgXXVeXXXXXXXX.png"
  type="close"
  onActionTap="titleClose"
>内部标题可关闭</title>

<title
  hasLine="true"
  className="changeColor"
  iconURL="https://gw.alipayobjects.com/mdn/miniProgram_mendian/afts/img/A*wiFYTo5I0m8AAAAAAAAAAABjAQAAAQ/original"
  type="arrow"
  onActionTap="titleGo"
>使用class修改样式</title>
```

```css
.changeColor {
  font-size: 30px;
  color: #f32600;
}
```

```javascript
Page({
  data: {},
  onLoad() {},
  titleGo() {
    my.showToast({
      content: '点击箭头，可设置跳转',
    });
  },
  titleMore() {
    my.showToast({
      content: '点击更多，展开气泡菜单',
    });
  },
  titleClose() {
    my.showToast({
      content: '点击关闭，可设置关闭',
    });
  },
});
```