## SwipeAction 可滑动单元格

可滑动单元格

## 截图
![SwipeAction 可滑动模块](https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*yLq_R6Lo3RsAAAAAAAAAAABkARQnAQ)

## 属性介绍

| 属性名 | 类型 | 默认值 | 可选项 | 描述 | 最低版本 | 必填 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| className | String | - | - | 自定义 class | - | - |
| right | Array | - | - | 滑动选项，最多三项 | - | - |
| onRightItemClick | EventHandle | ({index, detail, extra, done}) => void | - | 右侧滑开后的元素点击事件 | - | - |
| onSwipeStart | EventHandle | (e: Object) => void | - | 开始滑动的回调 | - | - |
| extra | String | - | - | 附属信息，会在 `onRightItemClick` 回调中获取 | - | - |
| restore | Boolean | false | - | 还原组件到初始状态 | - | - |
| borderRadius | Boolean | false | - | 右侧 item 是否为圆角 | - | - |

## Bug & Tip
* 当有多个 SwipeAction 组件时，当滑动其中一个时，需要将其他的组件的 `restore` 属性设置为 `true`，避免一个页面同时存在多个swipeAction处于活动状态；
* `right` 数组中的格式：`[{ type: '', text: '', fColor: '', bgColor: '',},]`
* `right`中的 `type` 共有三个值：`edit`、`delete` 和 `other` ；
* `fColor` 为文本颜色，`bgColor` 为背景色颜色，三种 `type` 均可自定义颜色，如未设置，默认值为：
  * `edit`：`#ccc`；
  * `delete`：`#FF3B30`；
  * `other`：`#1677FF`；
* SwipeAction 是与 list 组件组合使用的
* `borderRadius` 是为了结合带圆角的 list-item 而存在的，如果为 `true` 时，将会把右侧 item 显示为圆角模式；

## 代码示例

```json
{
  "defaultTitle": "SwipeAction",
  "usingComponents": {
    "list": "mini-ali-ui/es/list/index",
    "list-item": "mini-ali-ui/es/list/list-item/index",
    "swipe-action": "mini-ali-ui/es/swipe-action/index"
  }
}
```

```xml
<view>
	<list>
		<view a:for="{{list}}" key="{{item.content}}">
			<swipe-action
				index="{{index}}"
				restore="{{swipeIndex === null || swipeIndex !== index}}"
				right="{{item.right}}"
				onRightItemClick="onRightItemClick"
				onSwipeStart="onSwipeStart"
				extra="item{{index}}"
				borderRadius="{{index <= 2 ? true : false}}"
			>
				<list-item
					arrow="horizontal"
					index="{{index}}"
					key="items-{{index}}"
					onClick="onItemClick"
					last="{{index === list.length - 1}}"
					upperSubtitle="{{index >= 4?'这是一个有副标题的列表':''}}"
					lowerSubtitle="{{index === 5?'这是一个小的副标题':''}}"
					borderRadius="{{index <= 2 ? true : false}}"
				>
					{{item.content}}
				</list-item>
			</swipe-action>
		</view>
	</list>
</view>
```

```javascript
Page({
  data: {
    swipeIndex: null,
    list: [
      { right: [{ type: 'delete', text: '删除', fColor: 'black' }], content: '更换文字颜色' },
      { right: [{ type: 'edit', text: '取消收藏', fColor: 'rgba(0,0,0,.5)' }, { type: 'delete', text: '删除', fColor: 'yellow' }, { type: 'other', text: '新增一个' }], content: '改变文字颜色' },
      { right: [{ type: 'edit', text: '取消收藏', bgColor: '#333' }, { type: 'delete', text: '删除' }], content: '其中一个背景色变化' },
      { right: [{ type: 'edit', text: '取消收藏', bgColor: '#ccc', fColor: '#f00' }, { type: 'delete', text: '删除', bgColor: '#0ff', fColor: '#333' }], content: '文字和背景色同时改变' },
      { right: [{ type: 'edit', text: '取消收藏取消收藏取消' }, { type: 'delete', text: '删除删除删除删除' }], content: '默认颜色样式' },
      { right: [{ type: 'edit', text: '取消关注' }, { type: 'other', text: '免打扰' }, { type: 'delete', text: '删除' }], content: '三个选项的卡片' },
      { right: [{ type: 'edit', text: '取消关注' }, { type: 'other', text: '免打扰' }, { type: 'delete', text: '删除' }], content: '三个选项的卡片三个选项的卡片三个选项的卡片三个选项的卡片三个选项的卡片三个选项的卡片三个选项的卡片三个选项的卡片三个选项的卡片三个选项的卡片三个选项的卡片三个选项的卡片三个选项的卡片三个选项的卡片三个选项的卡片三个选项的卡片三个选项的卡片' },
    ],
  },
  onRightItemClick(e) {
    const { type } = e.detail;
    my.confirm({
      title: '温馨提示',
      content: `${e.index}-${e.extra}-${JSON.stringify(e.detail)}`,
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      success: (result) => {
        const { list } = this.data;
        if (result.confirm) {
          if (type === 'delete') {
            list.splice(this.data.swipeIndex, 1);
          }

          my.showToast({
            content: '确定 => 执行滑动删除还原',
          });
          e.done();
        } else {
          my.showToast({
            content: '取消 => 滑动删除状态保持不变',
          });
        }
      },
    });
  },
  onItemClick(e) {
    my.alert({
      content: `dada${e.index}`,
    });
  },
  onSwipeStart(e) {
    this.setData({
      swipeIndex: e.index,
    });
  },
});
```
