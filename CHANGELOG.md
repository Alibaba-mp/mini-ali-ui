## 1.4.1
* **Fixed**：
  * tabs 组件 修复滑动 bug
## 1.4.0
* **Fixed**：
  * Tab 组件 swiper-item 问题修复
## 1.3.8
* **Fixed**：
  * swipe-action 组件 JSAPI 查询次数降低

## 1.3.7
* **Fixed**：
  * button 组件的 onGetAuthorize 与 onError方法添加
  * picker-item 组件的 extra 位置修复

## 1.3.6
* **Fixed**：
  * tabs 组件的 swipeable 为 ture 时滚动bug修复
  * 组件库中变量空值判定添加

## 1.3.5
`2021-04-22`
* **Fixed**：
  * vtabs 组件的 swipeable 为false时，点击事件失效
  * tabs 组件的 activeTab 值更新，组件切换异常
  * swipe-action 组件的数值检测

## 1.3.4
`2021-03-23`
* **Fixed**：vtabs 改变 tab 时的状态优化；

## 1.3.3
`2021-03-16`
* **Fixed**：
  * search-bar 组件的 placeholder 显示异常；
  * tabs 组件在 appx2.0 中使用 swipeable 时高度异常；
  * vtabs 组件高度计算问题优化；
  * guide 组件中 CSS 自定义属性权重调整；

## 1.3.2
`2021-03-10`
* **Fixed**：amount-input 组件中细节问题；

## 1.3.1
`2021-01-12`
* **Fixed**
  * 修复获取 getApp() 失败
## 1.3.0
`2021-01-11`
* **Feature**
  * 组件内部开始支持国际化，目前已支持：zh-CN、en-US；

## 1.2.4
`2020-12-21`
* **Fixed**
  * 修复 multi-liner 中所依赖的 textarea 样式问题；

## 1.2.3
`2020-12-21`
* **Fixed**
  * loading 组件的 `size` 问题修复；
  * multi-liner 组件 `enableNative` 默认值修复；

> **Note：** mini-ali-ui **1.2.3** 版本中修复了 **1.2.0** 引入的 loading 组件 `size` 属性不正常的 bug，回归到与 **1.1.\*** 行为一致（`size` 指定 loading 组件的宽度）。考虑到部分应用已因适配 **1.2.0** 的问题而变更了 `size` 设置，在 **1.2.3** 里我们对 `size` 的取值范围做了简单限定，以保证基本可接受的外观。建议受影响的这部分应用开发者再进行人工检查和校正。

## 1.2.2
`2020-12-10`
* **Fixed**
  * loading 中的 var() 的兜底处理；
  * fix: badge 组件在个别设备中的样式兼容问题；

## 1.2.1
`2020-11-18`
* **Fixed**
  * tabs 组件数据加载请求可能导致报错；
  * badge 组件在安卓中文字可能会出现偏高的情况处理；
  * input 相关属性补充 `enableNative` 以及 `controlled` 属性；

## 1.2.0
`2020-11-12`
* **Feature**
  * loading、avatar 样式更新；
  * container 组件增加 title 属性功能；
  * amount-input 新增金额长度标识；
* **Fixed**
  * badge 中使用 slot 时箭头位置优化；
  * 组件初始情况 rpx 模式 icon size 过小；
  * notice 组件偶现无法滚动（[#48](https://github.com/Alibaba-mp/mini-ali-ui/pull/48)）；
  * 处理 searchBar 组件的闪动现象；
  * list 组件 worker render 的报错；
  * Terms checkbox 默认选中不生效（[#56](https://github.com/Alibaba-mp/mini-ali-ui/pull/56)）；
  * 部分组件的样式细节优化调整；
* **Chore**
  * 添加 babel/runtime；

## 1.1.7
`2020-10-15`
* **Fixed**
  * tabs 组件iOS样式兼容
  * notice组件中didUpdate判断机制优化
  * vtabs滚动与点击tab 的同步
* **Feature**
  * steps 组件可修改步骤的 icon 的类型以及颜色
  * footer 组件支持自定义处理链接点击事件 ([#45](https://github.com/Alibaba-mp/mini-ali-ui/pull/45))

## 1.1.6
`2020-09-24`
* **Fixed**
  * vtabs 组件在 iOS 中闪屏跳动;
  * terms 组件按钮点击后 name 传值;

## 1.1.5
`2020-09-10`
* **Feature**
  * tabs 组件新增非 elevator 模式下的吸顶功能
  * 日历 onChange 回调，解决月份切换导致年份变化不进行回调的问题 ([#44](https://github.com/Alibaba-mp/mini-ali-ui/pull/44))
* **Fixed**
  * vtabs 组件中 vtab-content 高度不够时的 tab 高亮展示
  * popup 组件的 z-index 层级问题
  * page-result 组件中按钮在 iOS10.3 内位置偏移

## 1.1.4
`2020-08-13`
* **Fixed**
  * verify-code 组件初次加载可直接进入倒计时模式
  * swipe-action 可能会露出 1px 的底部按钮颜色
  * Message icon 跳变 ([#36](https://github.com/Alibaba-mp/mini-ali-ui/issues/36))
* **Feature**
  * Tabs 的 plus icon 支持自定义 ([#40](https://github.com/Alibaba-mp/mini-ali-ui/issues/40))

## 1.1.3
`2020-07-30`
* **Fixed**
  * steps 组件水平方向新增高亮以及支持更多的 slot；
  * button组件胶囊圆角调整；
  * amount-input 组件的清除 icon 控制方式调整；
  * 对 list 组件中的 loading 组件源码做调整；
  * verify-code 组件可设置加载时主动触发发送按钮；
  * CSS token 优化调整；
* **Feature**
  * title support custom operation ([#39](https://github.com/Alibaba-mp/mini-ali-ui/pull/39))

## 1.1.2
`2020-07-16`
* **Fixed**：npm 包中 `px` 与 `rpx` 版本修正；

## 1.1.1
`2020-07-16`
* **Fixed**
  * modal 组件蒙层点击时间回调；
  * collapse 箭头方向调整；
  * verify-code 可配置文案；
  * tabs 组件可通过配置强制调整 tab-content 中的 swiper 高度；
  * tabs、swipe-action 中调整 `getSystemInfo`，优化性能（[#34](https://github.com/Alibaba-mp/mini-ali-ui/pull/34)）；
* **Feature**
  * popover 图标可配置图片（[#32](https://github.com/Alibaba-mp/mini-ali-ui/pull/32)）；
  * steps 可使用数字序号；

## 1.1.0
`2020-07-02`
* **Fixed**
  * mini-antui 转 mini-ali-ui 的兼容处理（footer、grid、list-item、pagination、message）；
  * list-item 中可通过 last 属性删除下划线；
  * 电梯组件中 `onTabClick` 回调两次触发；
  * 由于 `padding` 导致 popup 的定位偏差；
  * tabs 和 vtabs 中的交互细节；

## 1.0.13
`2020-06-18`
* **Fixed** 删除 verify-code 组件中未输入值的验证提示；

## 1.0.12
`2020-06-18`
* **Feature**
  * 添加 tab 首次出现的回调；
  * 分页符组件的样式优化调整；
* **Fixed**
  * 胶囊形式的 tab 可配置背景色；
  * 电梯组件中高度改变后的 `floorNumber` 值的变化；
  * `duration` 为 0 时对 tab-content 的影响；
  * collapse 组件初始状态可能报错的问题；
  * modal 组件中由于 am-icon 而导致的报错；
  * “发送验证码”可重复点击的错误；
  * search-bar 的语音 icon 可能无法显示的问题；
  * am-checkbox 默认状态无法选中的问题；
  * verify-code 组件未输入值情况下的验证提示；
  * pick-item 的点击区域加大以及 icon 可更换；
  * 完整展示 tabs 选项卡的 activeTab；

## 1.0.11
`2020-06-04`
* **Enhance**
  * **search-bar** 组件新增 `borderColor`；
  * tips 组件中的 tips-plain 新增倒计时后的回调 `onTimeout()`；
  * 部分组件新增对 `data-xxx` 的传值；
  * **guide** 组件可通过点击遮罩来实现引导跳转；
  * **stepper** 组件新增 `onchange` 事件触发类型返回值；
* **Fixed**
  * **popover** 组件中遮罩由于 `transform` 导致覆盖不全 [#20](https://github.com/Alibaba-mp/mini-ali-ui/issues/20)；

## 1.0.10
`2020-05-21`
* **Add**
  * swipe-action 组件新增宽度设置；
  * tabs 选项卡新增选中态下滑线可配置；
* **Enhance**
  * tabs 电梯组件 tab-content 距离顶部的位置；
* **Fixed**
  * list-item 中 arrow 对齐像素偏差；
  * input-item/picker-item 在主题配置方面的 token 处理；
  * am-switch 在 rpx 模式中的兼容问题 [#23](https://github.com/Alibaba-mp/mini-ali-ui/issues/23)；
  * button 组件获取 data-xxx 的值 [#13](https://github.com/Alibaba-mp/mini-ali-ui/issues/13)；
  * swipe-action 组件加载时闪动；
  * tab 电梯组件点击高亮不准；
  * search-bar 组件中 clear icon 可能无法点击问题；

## 1.0.9
`2020-05-07`
* **Add**
  * message 组件增加 slot 插槽；
  * tabs 组件新增 badge 展示；
* **Update**
  * page-result 插画风格统一；
* **Fixed**
  * input-item 组件 clear 不展示时不占位处理；
  * input-item 组件透传 controlled 参数 [#15](https://github.com/Alibaba-mp/mini-ali-ui/issues/15)；
  * CheckBox 可控处理 [#18](https://github.com/Alibaba-mp/mini-ali-ui/pull/18)；
  * list-item 的 hover 状态修正；
  * popover 组件 item 传值 [#11](https://github.com/Alibaba-mp/mini-ali-ui/issues/11)；

## 1.0.8
`2020-04-10`
* **Fixed** 在 IDE 中无法正常显示 `-webkit-` 前缀的问题；

## 1.0.7
`2020-04-10`
* **Add**
  * tabs 电梯组件新增 `elevatorTop` 属性，可控 tab 位置；
* **Update**
  * collapse 增加自适应 demo 效果；
* **Fixed**
  * 标签闭合；
  * am-checkbox 在插件中的样式问题 [#16](https://github.com/Alibaba-mp/mini-ali-ui/pull/16)；
  * rpx 版本中 modal 组件的样式问题；
  * tabs 电梯组件中 `sticky` 属性问题；

## 1.0.6
`2020-03-26`
* **Add**
  * vtabs 组件新增选中态的样式；
  * badge 组件新增描边
* **Update**
  * badge 组件左右箭头样式调整；
  * demo 以及 readme 文档更新；
* **Fixed**
  * notice 组件对齐问题；
  * swipe-action 组件在钉钉小程序中报错处理；
  * swipe-action 组件高度计算错误处理；

## 1.0.5
`2020-03-11`
* **Fixed** 修复 coupon 组件中已使用票券类型的样式问题；

## 1.0.4
`2020-03-11`
* **Add**
  * footer 组件新增 `end` 类型 [#8](https://github.com/Alibaba-mp/mini-ali-ui/issues/8)；
  * coupon 组件新增票券权益、使用规则等说明；
  * input-item、picker-item 新增垂直类型；
* **Update**
  * notice 组件类型更新；
  * search-bar 组件键盘显示“搜索”；
  * 微调 avatar 头像尺寸和 modal 组件中图片尺寸；
  * 相关 demo 文件以及 readme.md 文档调整；
* **Fixed**
  * 组件标签闭合

## 1.0.3
`2020-03-03`
* **Update** Calendar component demo;
* **Fixed** List component bug;

## 1.0.2
`2020-02-28`
* **fixed** tabs component bug;
* **modify** demo and readme content;
* **add** the components qr code to the readme document;

## 1.0.1
`2020-02-24`
* **fixed** verify-code component bug;
* **modify** demo and readme content;

## 1.0.0
`2020-02-19`
* 新增 **mini-ali-ui** 的 logo，以及钉钉交流群；
* 调整部分组件的 readme 文档内容；
* 优化组件交互体验，处理几个小 bug；
* **mini-ali-ui** 开启了为广大阿里小程序开发者服务的旅程；

## 0.1.0
`2020-02-04`
* 将 **mini-antui** 改名 **mini-ali-ui**，同时进行组件升级优化；
* **优化：**
  * 可支持 `rpx`，需通过 `npm install mini-ali-ui-rpx --save` 得到；
  * 结合 CSS 自定义属性，实现更快捷的换肤模式；
  * 针对 **mini-antui** 中已有的组件进行功能升级优化，共 26 个；
* **增加：**
  * 新增 16 个组件；
  * 增加与小程序基础组件同名的扩展组件，如 `button` 等；

