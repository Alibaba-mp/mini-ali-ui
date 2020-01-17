## Avatar 头像

| 属性名 | 描述 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| className| 自定义class | String| |
| src | 头像图片资源地址| String | 默认蓝底头像 |
| size | 头像尺寸大小：`lg`、`md`、`sm`| String | md |
| shape | 头像形状：`circle`、`square`| String | circle |
| name | 设置用户名| String | |
| desc | 设置摘要信息| String | |
| onError| 图片资源加载失败回调 | (e: Object) => void|  |


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
