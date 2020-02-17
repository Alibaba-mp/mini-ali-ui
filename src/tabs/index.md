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

## 属性介绍
tabs 横向选项卡主要是由 `<tabs>` 和 `<tab-content>` 两个标签组成，包含的类型较多，可通过 `<tabs>` 的属性进行配置。

### tabs

| 属性名 | 类型 | 默认值 | 可选项 | 描述 | 最低版本 | 必填 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| className | String | - | - | 自定义 class | - | - |
| tabs | Array | - | - | tab数据，其中包括选项标题 `title`，以及副标题（描述）文案 `subTitle`，以及胶囊形式 tab 中的数字 `number` | - | true |
| activeTab | Number | 0 | - | 当前激活的 tab 索引 | - | true |
| activeCls | String | - | - | tabbar激活的 tab 样式 class | - | - |
| tabBarCls | String | - | - | tabbar的自定义样式class | - | - |
| tabBarUnderlineColor | String | #1677FF | - | 选中选项卡下划线颜色 | - | - |
| tabBarActiveTextColor | String | #1677FF | - | 选中选项卡字体颜色 | - | - |
| capsuleTabBarActiveTextColor | String | #ffffff | - | 胶囊选中选项卡字体颜色 | - | - |
| tabBarInactiveTextColor | String | #333333 | - | 未选中选项卡字体颜色 | - | - |
| tabBarSubTextColor | String | #999999 | - | 未选中描述字体颜色 | - | - |
| tabBarActiveSubTextColor | String | #ffffff | - | 选中描述字体颜色 | - | - |
| tabBarBackgroundColor | String | #ffffff | - | 选项卡背景颜色 | - | - |
| showPlus | Boolean | false | - | 是否显示 + icon | - | - |
| swipeable | Boolean | true | - | tabs 内容区是否可拖动 | - | - |
| animation | Boolean | true | - | 选项卡切换时滑动动画 | - | - |
| duration | Number | 500 | - | 当 swipeable 为 true 时，tabs 内容区切换动画时长 | - | - |
| capsule | Boolean | false | - | 是否为胶囊 tab | - | - |
| hasSubTitle | Boolean | false | - | 是否有副标题（描述）内容 | - | - |
| elevator | Boolean | false | - | 是否电梯组件 | - | - |
| onPlusClick | EventHandle | () => {} | - | + icon 被点击时的回调 | - | - |
| onTabClick | EventHandle | (index: Number) => void | - | tab 被点击的回调 | - | - |
| onChange | EventHandle | (index: Number) => void | - | tab 变化时触发 | - | - |

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

### tab-content 高度自适应说明

tabs 组件内容区域高度是否能够自适应，需要注意 `swipeable` 的值：

* `swipeable='{{true}}'`：内容区域可滑动，且相对应 tab 标签卡；但**内容区域高度为固定值**，需要在 acss 文件中设定 `height` 值，否则高度会异常；
* `swipeable='{{false}}'`：内容区域不可滑动，此时高度表现形式有两种，且可以不需要在 acss 文件设定 `height` 值；
  * `<tab-content>` 中**无** `tabId` 和 `activeTab` 两个属性，此时的高度将以所有内容区域中最高的为基准展示；
  * `<tab-content>` 中**包含** `tabId` 和 `activeTab` 两个属性时 `tabId="{{index}}" activeTab="{{activeTab}}"`，内容区域所展示的高度将会随着不同模块的高度而改变；

## 代码示例

```json
{
  "defaultTitle": "Tabs 横向选项卡",
  "usingComponents": {
    "tabs": "mini-ali-ui/es/tabs/index",
    "tab-content": "mini-ali-ui/es/tabs/tab-content/index"
  }
}
```

```xml
<tabs
  tabs="{{tabs2}}"
  tabsName="activeTab2"
  onTabClick="handleTabClick"
  onChange="handleTabChange"
  onPlusClick="handlePlusClick"
  activeTab="{{activeTab2}}"
  showPlus="{{true}}"
  capsule="{{false}}"
  hasSubTitle="{{false}}"
>
  <block a:for="{{tabs2}}">
    <tab-content key="{{index}}" tabId="{{index}}" activeTab="{{activeTab2}}" a:if="{{index === 0}}">
      <view class="tab-content" style="height: 300px;">高度为 300px {{item.title}}</view>
    </tab-content>
    <tab-content key="{{index}}" tabId="{{index}}" activeTab="{{activeTab2}}" a:elif="{{index === 2}}">
      <view class="tab-content" style="height: 200px;">改变 tab-content 高度为 200px {{item.title}}</view>
    </tab-content>
    <tab-content key="{{index}}" tabId="{{index}}" activeTab="{{activeTab2}}" a:else>
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
      },
      {
        title: '选选',
        subTitle: '描述文案',
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
}
```