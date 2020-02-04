# Notice 通告栏组件

当应用有重要公告或者由于用户的刷新操作产生提示反馈时可以使用通告栏系统。通告栏不会对用户浏览当前页面内容产生影响，但又能明显的引起用户的注意。公告内容不超过一行。 说明：

* 仅用于 UI 展示没有对应的业务逻辑功能。
* notice 为瀑布流布局不会定位到页面头部，用户可以根据需求将它放在相应位置。

## 扫码体验

<img src="https://gw.alipayobjects.com/zos/rmsportal/DJfecsuPIyuOUHZtVFxG.jpeg" width="154" height="190" />

## 截图
![notice](https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*tumxSr-ODscAAAAAAAAAAABkARQnAQ)

## 属性介绍

| 属性名 | 类型 | 默认值 | 可选项 | 描述 | 最低版本 | 必填 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| className | String | - | - | 自定义 class | - | - |
| mode | String | - | closable、link | 右侧 icon 类型：关闭、箭头 | - | - |
| action | String | - | - | 右侧文本按钮文案 | - | - |
| actionLeft | String | - | - | 右侧第二个按钮文案 | - | - |
| onClick | EventHandle | () => {} | - | 点击右侧按钮回调 | - | - |
| onClickLeft | EventHandle | () => {} | - | 点击右侧第二个按钮回调 | - | - |
| show | Boolean | true | - | 是否显示 notice | - | - |
| enableMarquee | Boolean | false | - | 是否开启动画 | - | - |
| marqueeProps | Object | {loop: false, leading: 500, trailing: 800, fps: 40 } | - | marquee 参数，其中`loop`表示是否循环，`leading`表示动画开启前停顿，`trailing`表示`loop`为true时时，动画间停顿，`fps`表示动画帧率 | - | - |
| showIcon | Boolean | true | - | 是否显示 icon | - | - |
| capsuleItem | Array | - | - | 胶囊通告栏的业务 logo url | - | - |
| capsule | Boolean | false | - | 是否为胶囊通告栏 | - | - |
| type | String | normal | normal、error、active | 通告栏类型 | - | - |
| transparent | Boolean | false | - | active 通告栏是否具有半透明 | - | - |

## Bug & Tip
* 如果 `action` 没有任何值，那么 `actionLeft` 将不会显示；
* `onClick`、`onClickLeft` 相对应于 `action` 和 `actionLeft`；
* 当 `mode` 的值为 `link`，显示为一个箭头 icon 时，整条通告栏是可点击的；
* 当 `action` 有值时，将会代替 `mode` 中的 `closable` 和 `link`，只会显示文字；
* `capsuleItem` 在胶囊通告栏中只会显示 3 个，超过部分仅统计个数，但不会显示 logo；
* 当 `type` 的值为 `active` 时，`transparent` 才会有效果；

## 代码示例

```json
{
  "defaultTitle": "notice 通告栏",
  "usingComponents": {
    "notice": "mini-ali-ui/es/notice/index"
  }
}
```

```xml
<notice
  marqueeProps="{{marqueeProps}}"
  enableMarquee="{{true}}"
  show="{{true}}"
  type="error"
  mode="link"
  onClick="actionClick"
  actionLeft="文字按钮"
  onClickLeft="linkActionClick">
  无限循环滚动的通告栏展示情况。文字不够继续添加文字凑数。
</notice>
<notice
  show="{{true}}"
  type="active"
  onClick="actionClick"
  capsule="{{true}}"
  capsuleItem="{{['https://img.alicdn.com/tfs/TB1yTvnfQY2gK0jSZFgXXc5OFXa-145-145.png','https://img.alicdn.com/tfs/TB1egTmfNz1gK0jSZSgXXavwpXa-145-145.png','https://img.alicdn.com/tfs/TB1l36mfQP2gK0jSZPxXXacQpXa-145-145.png','https://img.alicdn.com/tfs/TB1uCUdfND1gK0jSZFyXXciOVXa-151-164.png']}}"
  transparent="{{true}}">4 个优惠信息推荐
</notice>
```

```javascript
Page({
  data:{
    marqueeProps: {
      loop: true,
      leading: 1000,
      trailing: 800,
      fps: 40,
    },
  },
  linkActionClick() {
    my.showToast({
      content: '左侧操作区被点击了',
      duration: 1000,
    });
  },
  actionClick() {
    my.showToast({
      content: '你点击了右侧操作区',
      duration: 1000,
    });
  },
})
```
