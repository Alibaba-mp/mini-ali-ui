# Footer 页脚

显示页面页脚组件。

## 扫码体验

<img src="https://gw.alipayobjects.com/zos/rmsportal/EdfgZYAQrrlpnqQKGMqa.jpeg" width="154" height="190" />

## 截图
<img src="https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*T_pITIe8eqAAAAAAAAAAAABkARQnAQ" alt="footer 页脚" style="zoom:50%;" />

## 属性介绍

| 属性名 | 类型 | 默认值 | 可选项 | 描述 | 最低版本 | 必填 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| className | String | - | - | 自定义 class | - | - |
| type | String | normal | normal、guide、copyright、brand、link | 选择使用指定的页脚类型 | - | true |
| content | String | - | - | 页脚文本内容 | - | - |
| extend | Array | - | - | 页脚部分的链接、logo 等信息 | - | - |
| onBrandTap | EventHandle | () => {} | - | 品牌 logo 事件回调 | - | - |

## Bug & Tip
* `onBrandTap` 仅在 `type: brand` 中有效，且是无链接的品牌 logo；
* 当选择不同的 `type` 时，`extend` 中的值也将会有所不同；
  * `normal`：无 `extend`；
  * `guide`：`extend` 的值为 `[{ link: '', text: '',},]`；
  * `copyright`：无 `extend`；
  * `brand`：`extend` 的值为 `[{ logo: '', width: '', height: '', link: '',},]`，如果无 `link` 的话，可选择触发 `onBrandTap` 事件；
  * `link`：`extend` 的值为 `[{ link: '', text: '',},]`，但有多个值时，文本链接之间会有间隔线出现；

## 代码示例

```json
{
  "defaultTitle": "footer 页脚",
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
  },
  brandClick() {
    my.alert({
      content: '这个品牌 logo 没有链接，可通过 js 自定义点击事件。',
    });
  },
});
```
