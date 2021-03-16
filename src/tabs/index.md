# Tabs 横向选项卡

应用当需要展示二级以下内容时，屏幕顶部会展示一个标签栏，并提供在应用的不同部分之间快速切换的功能。标签栏在所有屏幕方向上保持相同的高度。
* **选项：** 根据业务场景需要可以设定2个以上选项，当选项超过屏幕宽度后可以横滑选项行查看所有内容。
* **新内容标记：** 选项卡上能显示未读或者新内容标记。
* **场景描述：** 当选项卡内容提供给用户自定义配置时提供编辑/新建入口，用户可以由此进入编辑页面进行修改。

**说明：**
* 通过触发 onChange 事件，设置 setData 对应的数据，从而切换页面上的 tabs 数据。
* 可使用 [my.request](https://opendocs.alipay.com/mini/api/owycmh) 传数据给后端。

## 截图
![tabs](https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*cmZwRoYG120AAAAAAAAAAABkARQnAQ)

## 扫码体验

![](http://mdn.alipayobjects.com/afts/img/A*AptiT47jyXEAAAAAAAAAAABkAa8wAA/original?bz=openpt_doc&t=We6nKeYvCpiZLki_J91kbAAAAABkMK8AAAAA)



## 属性介绍
tabs 横向选项卡主要是由 `<tabs>` 和 `<tab-content>` 两个标签组成，包含的类型较多，可通过 `<tabs>` 的属性进行配置。

### tabs

| 属性名 | 类型 | 默认值 | 可选项 | 描述 | 最低版本 | 必填 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| className | String | - | - | 自定义 class | - | - |
| tabs | Array | - | - | tab数据，其中包括选项标题 `title`，以及副标题（描述）文案 `subTitle`，以及胶囊形式 tab 中的数字 `number`，如需要以 badge 方式展示数字，添加 `showBadge` 并设置为 true 即可 | [1.0.9](https://www.npmjs.com/package/mini-ali-ui?activeTab=versions) 支持 `showBadge` | true |
| activeTab | Number | 0 | - | 当前激活的 tab 索引 | - | true |
| activeCls | String | - | - | tabbar激活的 tab 样式 class | - | - |
| tabBarCls | String | - | - | tabbar的自定义样式class | - | - |
| tabBarUnderlineColor | String | #1677FF | - | 选中选项卡下划线颜色 | - | - |
| tabBarActiveTextColor | String | #1677FF | - | 选中选项卡字体颜色 | - | - |
| capsuleTabBarActiveTextColor | String | #ffffff | - | 胶囊选中选项卡字体颜色 | - | - |
| capsuleTabBarBackgroundColor | String | #e5e5e5 | - | 胶囊未选中的背景色 | [1.0.12](https://www.npmjs.com/package/mini-ali-ui?activeTab=versions) | - |
| tabBarInactiveTextColor | String | #333333 | - | 未选中选项卡字体颜色 | - | - |
| tabBarSubTextColor | String | #999999 | - | 未选中描述字体颜色 | - | - |
| tabBarActiveSubTextColor | String | #ffffff | - | 选中描述字体颜色 | - | - |
| tabBarBackgroundColor | String | #ffffff | - | 选项卡背景颜色 | - | - |
| showPlus | Boolean | false | - | 是否显示 + icon | - | - |
| swipeable | Boolean | true | - | tabs 内容区是否可拖动 | - | - |
| animation | Boolean | true | - | 选项卡切换时滑动动画 | - | - |
| duration | Number | 500 | - | tabs 内容区切换动画时长 | - | - |
| capsule | Boolean | false | - | 是否为胶囊 tab | - | - |
| hasSubTitle | Boolean | false | - | 是否有副标题（描述）内容 | - | - |
| elevator | Boolean | false | - | 是否电梯组件 | - | - |
| elevatorTop | String | 0px | - | 电梯组件中 tab 置顶时的位置控制 | - | - |
| elevatorContentTop | Number | 0 | - | 电梯组件中 tab-content 距离顶部的位置 | [1.0.10](https://www.npmjs.com/package/mini-ali-ui?activeTab=versions) | - |
| onPlusClick | EventHandle | () => {} | - | + icon 被点击时的回调 | - | - |
| onTabClick | EventHandle | (index: Number, tabsName: String) => void | - | tab 被点击的回调 | - | - |
| onChange | EventHandle | (index: Number, tabsName: String) => void | - | tab 变化时触发 | - | - |
| tabsName | String | - | - | tab 选项卡的名字，与 `activeTab` 的 key 值相同 | - | true |
| tabBarUnderlineWidth | String | 100% | - | 设置 tab 选项卡选中态的下划线宽度 | [1.0.10](https://www.npmjs.com/package/mini-ali-ui?activeTab=versions) | - |
| tabBarUnderlineHeight | String | 2px | - | 设置 tab 选项卡选中态的下划线高度 | [1.0.10](https://www.npmjs.com/package/mini-ali-ui?activeTab=versions) | - |
| onTabFirstShow | EventHandle | (index: Number, tabsName: String) => {} | - | tab 选项卡首次出现时的回调 | [1.0.12](https://www.npmjs.com/package/mini-ali-ui?activeTab=versions) | - |
| tabContentHeight | String | '' | - | 当 `swipeable` 为 `true` 时，可通过该属性值重设高度强制让 swiper 组件支持“自适应”高度的行为 | [1.1.2](https://www.npmjs.com/package/mini-ali-ui?activeTab=versions) | - |
| plusIcon | String | add | icon 类型可参考 [am-icon 类型](https://opendocs.alipay.com/mini/component-ext/am-icon#type%20%E6%9C%89%E6%95%88%E5%80%BC) | 改变 icon 类型 | [1.1.4](https://www.npmjs.com/package/mini-ali-ui?activeTab=versions) | - |
| plusIconSize | Number | 16 | - | 改变 icon 大小 | [1.1.4](https://www.npmjs.com/package/mini-ali-ui?activeTab=versions) | - |
| plusIconColor | String | '' | - | 改变 icon 颜色 | [1.1.4](https://www.npmjs.com/package/mini-ali-ui?activeTab=versions) | - |
| plusImg | String | '' | - | 使用图片替换 icon | [1.1.4](https://www.npmjs.com/package/mini-ali-ui?activeTab=versions) | - |
| plusImgWidth | String | '' | - | 设置替换 icon 后的图片宽度 | [1.1.4](https://www.npmjs.com/package/mini-ali-ui?activeTab=versions) | - |
| plusImgHeight | String | '' | - | 设置替换 icon 后的图片高度 | [1.1.4](https://www.npmjs.com/package/mini-ali-ui?activeTab=versions) | - |
| stickyBar | Boolean | false | - | tabBar 是否在页面滚动的时候定位在顶部的某个位置，可结合 `elevatorTop` 设置距离顶部的位置 | [1.1.5](https://www.npmjs.com/package/mini-ali-ui?activeTab=versions) | - |

### tab-content

| 属性名 | 类型 | 默认值 | 可选项 | 描述 | 最低版本 | 必填 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| index | String | - | - | 列表项的唯一索引 | - | - |
| tabId | Number | {{index}} | - | tab 内容序列索引 | - | - |
| activeTab | Number | {{activeTab}} | - | 选项卡当前激活序列索引 | - | - |
| elevator | Boolean | false | - | 电梯组件时需要指定 | - | - |

## Bug & Tip
* `capsule` 为 `true` 时，tab 选项卡显示为胶囊模式；
* `hasSubTitle` 为 `true` 时，tab 选项卡会显示带有描述的模式，但如果 `tabs` 数据中的 `subTitle` 为空，将不会显示描述文案；
* 当 tabs 选项卡为胶囊模式时，会根据 `tabs` 数据中的 `number` 值显示数字；
* 如 `elevator` 为 `true`，则为电梯组件，`<tab-content>` 将竖排展示，自动计算每个 `<tab-content>` 的坐标后，根据索引值定位指向；
  * 在 `elevator` 模式中，`this.data.floorNumber` 将会根据所有 **tab-content** 的高度计算所得，无需修改；
  * 电梯组件需要考虑页面滚动时判断每个 **tab-content** 的位置，因此需要在页面级别中加入 `onPageScroll({ scrollTop }) {}`，具体可参考代码示例中的代码；
* `tabsName` 是为了能更好获取到当前 tab 选项卡的名称进行识别，值需要与 `activeTab` 的 key 值相同，如：`activeTab="{{activeTab2}}"`，那么 `tabsName="activeTab2"`；
* `tabs` 中的 `showBadge` 为 `true` 时，`number` 中的值会以 badge 形式展示，并且不受 tab 类型影响，否则 `number` 中的值仅在胶囊 tab 中有效；
  * 可同时添加 `badge: { arrow: true, stroke: true, }` 控制 badge 的样式；
  * `arrow` 可展示有箭头的 badge，箭头仅有左方向；
  * `stroke` 可展示有描边的 badge；
* 当 `elevatorTop` 的值为 px 单位时，`elevatorContentTop` 距离顶部的高度则是 `elevatorTop` + tab 选项卡的高度；
* 当 `plusImg` 的值为空时才可以使用 `plusIcon`、`plusIconSize` 以及 `plusIconColor` 这三个值；
* 当 `plusImg` 的值为空时，`plusImgWidth` 和 `plusImgHeight` 设置将无效；
* 如果 `plusIcon` 为空，`plusIconSize` 和 `plusIconColor` 修改的是默认的 icon 大小以及颜色；

### tab-content 高度自适应说明

tabs 组件内容区域高度是否能够自适应，需要注意 `swipeable` 的值：

* `swipeable='{{true}}'`：内容区域可滑动，且相对应 tab 标签卡；但**内容区域高度为固定值**，需要在 acss 文件中设定 `height` 值，否则高度会异常；如需要自适应高度的话，那么请使用 `tabContentHeight` 重设高度，**实现方法**：点击不同 tab 标签卡，获取当前 tab-content 的高度，赋值给 `tabContentHeight` 即可；
* `swipeable='{{false}}'`：内容区域不可滑动，此时高度表现形式有两种，且可以不需要在 acss 文件设定 `height` 值；
  * `<tab-content>` 中**无** `tabId` 和 `activeTab` 两个属性，此时的高度将以所有内容区域中最高的为基准展示；
  * `<tab-content>` 中**包含** `tabId` 和 `activeTab` 两个属性时 `tabId="{{index}}" activeTab="{{activeTab}}"`，内容区域所展示的高度将会随着不同模块的高度而改变；

## 代码示例

```json
{
  "defaultTitle": "Tabs",
  "usingComponents": {
    "tabs": "mini-ali-ui/es/tabs/index",
    "tab-content": "mini-ali-ui/es/tabs/tab-content/index"
  }
}
```

```xml
<tabs tabs="{{tabs2}}"
  tabsName="activeTab"
  onTabClick="handleTabClick"
  onChange="handleTabChange"
  onPlusClick="handlePlusClick"
  activeTab="{{activeTab}}"
  showPlus="{{hasPlus}}"
  swipeable="{{false}}"
  capsule="{{typeCapsule}}"
  hasSubTitle="{{typeHasSubTitle}}"
  tabBarUnderlineWidth="20px"
  tabContentHeight="{{activeTab === 0 ? '130px' : activeTab === 2 ? '200px' : '50vh'}}"
  stickyBar="{{true}}">
  <block a:for="{{tabs2}}">
    <tab-content key="{{index}}"
      tabId="{{index}}"
      activeTab="{{activeTab}}"
      a:if="{{index === 0}}">
      <view class="tab-content"
        style="height: 130px;">高度为 130px {{item.title}}</view>
    </tab-content>
    <tab-content key="{{index}}"
      tabId="{{index}}"
      activeTab="{{activeTab}}"
      a:elif="{{index === 2}}">
      <view class="tab-content"
        style="height: 200px;">改变 tab-content 高度为 200px {{item.title}}</view>
    </tab-content>
    <tab-content key="{{index}}"
      tabId="{{index}}"
      activeTab="{{activeTab}}"
      a:else>
      <view class="tab-content">content of {{item.title}}</view>
    </tab-content>
  </block>
</tabs>
```

```javascript
Page({
  data: {
    tabs2: [
      {
        title: '选项',
        subTitle: '描述文案',
        number: '66',
        showBadge: true,
        badge: {
          arrow: false,
          stroke: true,
        },
      },
      {
        title: '选选',
        subTitle: '描述文案',
        number: '文字',
        showBadge: true,
        badge: {
          arrow: true,
        },
      },
      {
        title: '二二',
        subTitle: '描述文案',
        showBadge: true,
        number: 0,
      },
      {
        title: '选二',
        subTitle: '描述文案',
        number: '99+',
        showBadge: false,
      },
      {
        title: '项二',
        subTitle: '描述文案',
        number: '6',
      },
      {
        title: '二二',
        subTitle: '描述文案',
      },
      {
        title: '选二',
        subTitle: '描述文案',
      },
      {
        title: '项二',
        subTitle: '描述文案',
        number: '6',
      },
    ],
    activeTab2: 0,
  },
  handleTabClick({ index, tabsName }) {
    this.setData({
      [tabsName]: index,
    });
  },
  handleTabChange({ index, tabsName }) {
    this.setData({
      [tabsName]: index,
    });
  },
  handlePlusClick() {
    my.alert({
      content: 'plus clicked',
    });
  },
  onPageScroll({ scrollTop }) {
    // onPageScroll 主要是用于电梯组件（elevator 模式）滚动时的高度计算；
    // activeTab 被触发高亮的 tab；
    // getFloorNumber 当前 tab-content 所在的索引值；
    // this.data.floorNumber 将会有组件内部根据 tab-content 的高度计算；
    // ※※※ 当使用 elevator 模式的 tabs 组件时，这部分的代码请直接 copy 使用 ※※※
    if (scrollTop === 0) {
      this.setData({
        activeTab: 0,
        getFloorNumber: 0,
      });
    } else {
      // 电梯组件时需要添加，计算页面滚动时，tab 的切换；
      for (let i = 0; i <= this.data.floorNumber.length; i++) {
        if (scrollTop >= this.data.floorNumber[i]) {
          this.setData({
            activeTab: i,
            getFloorNumber: i,
          });
        }
      }
    }
  },
});
```

```css
.tab-content {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40rpx;
  box-sizing: border-box;
  /* 如果 swipeable="{{true}}"，需要增加 height */
  /* height: 350px; */
  /* 为了体现 stickyBar 的作用而增加的 tab-content 的高度 */
  height: 50vh;
}
```