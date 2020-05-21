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

