## Avatar 头像

头像。

## 截图
<img src="https://gw.alipayobjects.com/mdn/rms_349abe/afts/img/A*2ojQSLUUPyQAAAAAAAAAAABkARQnAQ" />

## 属性介绍
| 属性 | 类型 | 默认值 | 可选值 | 描述 | 必填 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| className | String | - | - | 自定义class | - |
| src | String | 默认蓝底头像 | - | 头像图片资源地址 | - |
| size | String | md | lg, md, sm | 头像尺寸大小 | - |
| shape | String | circle | circle, square | 头像形状 | - |
| name | String | - | - | 设置用户名 | - |
| desc | String | - | - | 设置摘要信息 | - |
| name | String | - | - | 设置用户名 | - |
| onError | EventHandle | (e: Object) => void | - | 图片资源加载失败回调 | - |

## 示例

```json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents": {
    "avatar": "mini-ali-ui/dist/es/avatar/index"
  }
}
```

```html
<view>
  <!--普通头像组件-->
  <avatar src="xxxx"/>
  <!--带用户名和摘要描述头像组件-->
  <avatar src="xxxx" size="lg" name="用户名" desc="摘要描述" />
</view>
```
