
🔥 mini-ali-ui 已停止维护更新，后续请使用 <a href="https://github.com/ant-design/ant-design-mini">ant-design-mini</a>。


# Mini Ali UI

[![npm package](https://img.shields.io/npm/v/mini-ali-ui.svg?style=flat-square)](https://www.npmjs.com/package/mini-ali-ui)
[![GitHub stars](https://img.shields.io/github/stars/Alibaba-mp/mini-ali-ui.svg)](https://github.com/Alibaba-mp/mini-ali-ui/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Alibaba-mp/mini-ali-ui.svg)](https://github.com/Alibaba-mp/mini-ali-ui/network/members)
[![NPM downloads](https://img.shields.io/npm/dm/mini-ali-ui.svg?style=flat-square)](https://www.npmjs.com/package/mini-ali-ui)
[![GitHub issues](https://img.shields.io/github/issues/Alibaba-mp/mini-ali-ui.svg)](https://github.com/Alibaba-mp/mini-ali-ui/issues)
[![GitHub license](https://img.shields.io/github/license/Alibaba-mp/mini-ali-ui.svg)](https://github.com/Alibaba-mp/mini-ali-ui/blob/master/LICENSE)

## 示例

<p align="left">
  <img width="250" src="https://gw.alipayobjects.com/mdn/miniProgram_mendian/afts/img/A*xXX3TqsZimMwfA5KoKInYQBjAQAAAQ/original">
</p>

## 特性

- 基于 **Alipay Design** 设计规范；
- 支持多端小程序（支付宝，淘宝，钉钉等）；
- 支持主题配置切换；
- 支持 `px` 与 `rpx`；

## 安装

```bash
$ npm install mini-ali-ui --save
```

同时，我们提供了 **rpx** 版本的 mini-ali-ui，如需要使用 **rpx** 作为单位的组件，可以通过下述方式进行安装：

```bash
$ npm install mini-ali-ui-rpx --save
```

## 使用

在页面 json 中文件中进行注册，如 title 组件的注册如下所示：

```json
{
  "usingComponents": {
    "title": "mini-ali-ui/es/title/index"
  }
}
```

如安装的是 **rpx** 版本的 mini-ali-ui，那么在进行组件注册时，修改一下名称即可，方式如下：

```json
{
  "usingComponents": {
    "title": "mini-ali-ui-rpx/es/title/index"
  }
}
```

组件注册成功之后，具体的使用方式无差别。

在 axml 文件中进行调用：
```xml
<title
  hasLine="true"
  iconURL="https://t.alipayobjects.com/images/T1HHFgXXVeXXXXXXXX.png"
  type="close"
  onActionTap="titleClose"
>内部标题可关闭</title>
```

详细使用说明请参照官方文档[使用自定义组件](https://docs.alipay.com/mini/framework/use-custom-component)

## 国际化多语种的支持
对组件内部的文案进行梳理，将内部的文案提取后，并翻译。目前支持的语种如下：
* [中文](./src/_lang/zh-CN.ts)
* [en-US](./src/_lang/en-US.ts)

默认为**中文**。

### 使用方式
在小程序中如需要使用非中文语种时，需要在 **app.js** 中的 `globalData` 加入指定 key 和 value。

| key           | value       |
| ------------- | ----------- |
| miniAliUiLang | ''、'en-US' |

`miniAliUiLang` 为空或者未定义，将作为以中文展示组件内部的默认文案。

```javascript
App({
  globalData: {
    miniAliUiLang: 'en-US',
  },
  onLaunch() {},
});
```

## 贡献

如果你有好的意见或建议，欢迎给我们提 [issue](https://github.com/Alibaba-mp/mini-ali-ui/issues)。

## 钉钉群

![钉钉群：30147295](https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*qP-BRLk3wvYAAAAAAAAAAABkARQnAQ) 群号：**30147295**

## 链接
- [支付宝小程序](https://mini.open.alipay.com/channel/miniIndex.htm)
- [开发工具](https://docs.alipay.com/mini/ide/overview)
