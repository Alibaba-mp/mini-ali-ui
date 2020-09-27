## Avatar 头像

头像。

## 截图
<img src="https://gw.alipayobjects.com/mdn/rms_349abe/afts/img/A*2ojQSLUUPyQAAAAAAAAAAABkARQnAQ" style="zoom:50%;" />

## 扫码体验

![image](http://mdn.alipayobjects.com/afts/img/A*wQu2TLea8JsAAAAAAAAAAABkAa8wAA/original?bz=openpt_doc&t=ezrdO7s0f2889e0cDyjjIAAAAABkMK8AAAAA)



## 属性介绍
| 属性 | 类型 | 默认值 | 可选值 | 描述 | 最低版本 | 必填 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| className | String | - | - | 自定义class | - | - |
| src | String | 默认蓝底头像 | - | 头像图片资源地址 | - | - |
| size | String | md | lg, md, sm, xs | 头像尺寸大小 | [1.2.0](https://www.npmjs.com/package/mini-ali-ui?activeTab=versions) | - |
| shape | String | circle | standard, circle, square | 头像形状 | [1.2.0](https://www.npmjs.com/package/mini-ali-ui?activeTab=versions) | - |
| name | String | - | - | 设置用户名 | - | - |
| desc | String | - | - | 设置摘要信息 | - | - |
| name | String | - | - | 设置用户名 | - | - |
| onError | EventHandle | (e: Object) => void | - | 图片资源加载失败回调 | - | - |

## 示例

```json
{
  "defaultTitle": "Avatar",
  "usingComponents": {
    "avatar": "mini-ali-ui/es/avatar/index"
  }
}
```

```xml
<view>
  <!--普通头像组件-->
  <avatar src="xxxx" shape="standard"/>
  <!--带用户名和摘要描述头像组件-->
  <avatar src="xxxx" size="lg" name="用户名" desc="摘要描述" shape="standard" />
</view>
```
