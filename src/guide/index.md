# guide 遮罩引导模块

用于引导新用户或者页面内的新功能使用说明。

## 截图
![guide 遮罩引导模块](https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*SuBkQbcbr7AAAAAAAAAAAABkARQnAQ)

## 扫码体验

![image](http://mdn.alipayobjects.com/afts/img/A*k-ugTaw0qaQAAAAAAAAAAABkAa8wAA/original?bz=openpt_doc&t=bgQvrbZfDias9tqx7Di5TQAAAABkMK8AAAAA)



## 属性介绍
| 属性名 | 类型 | 默认值 | 可选项 | 描述 | 最低版本 | 必填 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| btn_next | String | 下一步 | - | 引导按钮组中的下一步按钮的文案 | - | - |
| btn_jump | String | 跳过 | - | 引导按钮组中可跳过按钮的文案 | - | - |
| btn_over | String | 知道了 | - | 引导按钮组中，当引导内容在最后一页时按钮的文案 | - | - |
| hasJump | Boolean | false | - | 是否显示跳过按钮 | - | - |
| show | Boolean | false | - | 是否显示 guide 遮罩引导模块 | - | - |
| guideList | Array | [] | - | guide 模块中的内容 | - | true |
| onGuideOver | EventHandle | () => { } | - | 跳过/关闭 guide 遮罩引导按钮的事件 | - | - |
| maskClick | Boolean | false | - | 是否可通过点击遮罩触发事件 | [1.0.11](https://www.npmjs.com/package/mini-ali-ui?activeTab=versions) | - |

## Bug & Tip
* `hasJump` 如为 `false`，guide 引导中的按钮只会显示一个 `btn_next` 按钮；
* `onGuideOver` 事件主要是用于控制当 guide 引导结束后或者当有跳过按钮出现时，点击按钮关闭 guide 引导的，如有必要也可以自行再添加事件；
* `guideList` 是用于控制显示每页 guide 引导图片的内容、位置以及大小等；
  * 数组中的格式：`[{ url: '', x: '', y: '', width: '', height: '',},]`
  * `url`：guide 引导图的 url；
  * `x`：引导图在可视区域的 x 坐标位置；
  * `y`：引导图在可视区域的 y 坐标位置；
  * `width`：引导图的宽度；
  * `height`：引导图的高度；

## 代码示例
```json
{
  "defaultTitle": "Guide",
  "usingComponents":{
    "guide": "mini-ali-ui/es/guide/index"
  }
}
```
```xml
<guide
  show="{{guideShow}}"
  hasJump="{{guideJump}}"
  guideList="{{list}}"
  btn_next="看下一张引导图"
  btn_jump="直接关闭，不看跳过"
  btn_over="看完了😀啊"
  onGuideOver="closeGuide"
  maskClick="{{true}}"
></guide>

<button size="default" type="primary" onTap="onShowJumpGuide">查看可跳过的引导图</button>
<button size="default" type="primary" onTap="onShowGuide">查看普通的引导图</button>
```
```javascript
Page({
  data: {
    list: [
      {
        url: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ',
        x: '150rpx',
        y: '200rpx',
        width: '200px',
        height: '200px',
      },
      {
        url: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*gWo-TLFGp38AAAAAAAAAAABkARQnAQ',
        x: '250rpx',
        y: '150rpx',
        width: '200px',
        height: '100px',
      },
      {
        url: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ',
        x: '350rpx',
        y: '300rpx',
        width: '100px',
        height: '100px',
      },
      {
        url: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*gWo-TLFGp38AAAAAAAAAAABkARQnAQ',
        x: '400rpx',
        y: '400rpx',
        width: '200rpx',
        height: '300rpx',
      },
    ],
    guideShow: false,
    guideJump: true,
  },
  onLoad() {},
  closeGuide() {
    this.setData({
      guideShow: false,
    });
  },
  onShowJumpGuide() {
    this.setData({
      guideShow: true,
      guideJump: true,
    });
  },
  onShowGuide() {
    this.setData({
      guideShow: true,
      guideJump: false,
    });
  },
});
```