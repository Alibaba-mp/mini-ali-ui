# Footer 页脚

显示页面页脚组件。

## 截图
<img src="https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*T_pITIe8eqAAAAAAAAAAAABkARQnAQ" alt="footer 页脚" style="zoom:50%;" />

## 扫码体验

![image](http://mdn.alipayobjects.com/afts/img/A*AyPsQZB5z00AAAAAAAAAAABkAa8wAA/original?bz=openpt_doc&t=UKUT3bRKLb7aKVQRplABowAAAABkMK8AAAAA)



## 属性介绍

| 属性名 | 类型 | 默认值 | 可选项 | 描述 | 最低版本 | 必填 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| className | String | - | - | 自定义 class | - | - |
| type | String | normal | normal、guide、copyright、brand、link、end | 选择使用指定的页脚类型 | - | - |
| content | String | - | - | 页脚文本内容 | - | - |
| extend | Array | - | - | 页脚部分的链接、logo 等信息 | - | - |
| onBrandTap | EventHandle | () => {} | - | 品牌 logo 事件回调 | - | - |
| showEndIcon | Boolean | false | - | type="end" 时的 footer 组件是否以 icon 方式展示，为 true 将不会显示 `content` 的文本内容 | - | - |
| iconName | String | selected | - | 使用 am-icon，具体的值可参考 am-icon 的 type 值 | - | - |
| iconURL | String | - | - | 使用网络图片。当确定使用网络图片后，`iconName` 将失效；且 网络图片目前仅支持宽高相同且小于等于 44rpx； | - | - |
| iconSize | Number | 18 | - | 小于等于 22px 的值 | - | - |
| footerEndColor | String | - | - | type="end" 时文本的颜色 | - | - |


## Bug & Tip
* `onBrandTap` 仅在 `type: brand` 中有效，且是无链接的品牌 logo；
* 当选择不同的 `type` 时，`extend` 中的值也将会有所不同；
  * `normal`：无 `extend`；
  * `guide`：`extend` 的值为 `[{ link: '', text: '',},]`；
  * `copyright`：无 `extend`；
  * `brand`：`extend` 的值为 `[{ logo: '', width: '', height: '', link: '',},]`，如果无 `link` 的话，可选择触发 `onBrandTap` 事件；
  * `link`：`extend` 的值为 `[{ link: '', text: '',},]`，但有多个值时，文本链接之间会有间隔线出现；
  * `end`：显示为“没有更多了”字样的结尾，可更改为 am-icon 中的类型或者自定图片 url；
    * `end` 类型 `content` 默认值为“没有更多了”；
    * `showEndIcon` 时，`content` 内容将不再显示；
    * `iconURL` 有值时，am-icon 中的类型将不会展示，显示为 icon 的 url，请确保该 url 是可访问的

## 代码示例

```json
{
  "defaultTitle": "Footer",
  "usingComponents": {
    "footer": "mini-ali-ui/es/footer/index"
  }
}
```

```xml
<footer 
  type="{{footerInfo1.type}}" 
  content="{{footerInfo1.content}}"
/>
<footer 
  type="{{footerInfo2.type}}" 
  content="{{footerInfo2.content}}"
  extend="{{footerInfo2.extend}}"
/>
<footer 
  type="{{footerInfo3.type}}" 
  content="{{footerInfo3.content}}"
/>
<footer 
  type="{{footerInfo4.type}}" 
  content="{{footerInfo4.content}}"
  extend="{{footerInfo4.extend}}"
  onBrandTap="brandClick"
/>
<footer 
  type="{{footerInfo5.type}}" 
  content="{{footerInfo5.content}}"
  extend="{{footerInfo5.extend}}"
  onBrandTap="brandClick"
/>
<footer 
  type="{{footerInfo6.type}}" 
  content="{{footerInfo6.content}}"
  extend="{{footerInfo6.extend}}"
/>
<footer 
  type="{{footerInfo7.type}}" 
  content="{{footerInfo7.content}}"
/>
<footer 
  type="{{footerInfo8.type}}" 
  content="{{footerInfo8.content}}"
  showEndIcon="{{footerInfo8.showEndIcon}}"
  typeIcon="{{footerInfo8.typeIcon}}"
  iconSize="{{footerInfo8.iconSize}}"
  iconURL="{{footerInfo8.iconURL}}"
/>
```

```javascript
Page({
  data: {
    footerInfo1: {
      type: 'normal',
      content: '底部文案置底说明',
    },
    footerInfo2: {
      type: 'guide',
      content: '没找到需要的？搜一下试试',
      extend: [
        {
          link: '/pages/list/app',
          text: '蚂蚁借呗',
        },
        {
          link: '/pages/list/app',
          text: '备用金',
        },
        {
          link: '/pages/list/app',
          text: '花呗收钱',
        },
      ],
    },
    footerInfo3: {
      type: 'copyright',
      content: '© 2004-2020 Alipay.com. All rights reserved.',
    },
    footerInfo4: {
      type: 'brand',
      content: '过往业绩不预示产品未来表现，市场有风险，投资需谨慎',
      extend: [
        {
          logo: 'https://gw.alipayobjects.com/mdn/miniProgram_mendian/afts/img/A*wiFYTo5I0m8AAAAAAAAAAABjAQAAAQ/original',
          width: '80px',
          height: '24px',
          link: '/pages/list/app',
        },
        {
          logo: 'https://gw.alipayobjects.com/mdn/miniProgram_mendian/afts/img/A*wiFYTo5I0m8AAAAAAAAAAABjAQAAAQ/original',
          width: '150rpx',
          height: '100rpx',
        },
      ],
    },
    footerInfo5: {
      type: 'link',
      content: '© 2004-2020 Alipay.com. All rights reserved.',
      extend: [
        {
          link: '/pages/list/app',
          text: '底部链接',
        },
      ],
    },
    footerInfo6: {
      type: 'link',
      content: '© 2004-2020 Alipay.com. All rights reserved.',
      extend: [
        {
          link: '/pages/list/app',
          text: '底部链接',
        },
        {
          link: '/pages/list/app',
          text: '底部链接',
        },
      ],
    },
    footerInfo7: {
      type: 'end',
      content: '自定义的没有更多内容了',
    },
    footerInfo8: {
      type: 'end',
      showEndIcon: true,
      iconName: 'logo-alipay_',
      iconURL: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ',
      iconSize: 50,
    },
  },
  brandClick() {
    my.alert({
      content: '这个品牌 logo 没有链接，可通过 js 自定义点击事件。',
    });
  },
});
```
