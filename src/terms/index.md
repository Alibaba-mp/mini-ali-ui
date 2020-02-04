# Terms 协议

需用户主动操作后，才能开通或激活服务时；通常包含了用户授权协议详细说明的跳转入口。


## 截图
![](https://gw.alipayobjects.com/mdn/rms_01d31f/afts/img/A*DNO6SYWbkjYAAAAAAAAAAABkARQnAQ)


## 属性介绍



| 属性名          | 类型        | 默认值                                                       | 可选值     | 描述             | 最低版本 | 必填 |
| --------------- | ----------- | ------------------------------------------------------------ | ---------- | ---------------- | -------- | ---- |
| fixed           | Boolean     | false                                                        | false,true | 需要常驻页面底部 | -        | -    |
| related         | Boolean     | true                                                         | true, false | 是否需要勾选复选框 | - | - |
| agreeBtn        | Object      | {"title":"","subtitle":"","type":"primary","data":1,"checked":false} |            | 同意按钮配置 | - | - |
| cancelBtn       | Object      | {"title":"","subtitle":"","type":"default","data":2}         |  | 取消按钮配置 | - | - |
| capsuleSize     | String      | medium | large, medium, small | 胶囊按钮大小  | - | - |
| shape           | String      | default | default, capsule | 按钮形状 | - | - |
| capsuleMinWidth | Boolean     | false | true, false | 是否启用胶囊按钮最小宽度 | - | - |
| hasDesc         | Boolean     | false | true, false | 是否有协议相关的描述信息 | - | - |
| onSelect | EventHandle |                                                              |            | 点击按钮事件 | - | - |
| | | | | | | |

## 示例

```json
{
    "defaultTitle": "Terms",
    "usingComponents": {
      "terms": "mini-ali-ui/es/terms/index"
    } 
}
 
```

```axml
<view>
  <terms onSelect="onSelect" related="{{c1.related}}" hasDesc="{{c1.hasDesc}}" agreeBtn="{{c1.agreeBtn}}" cancelBtn="{{c1.cancelBtn}}">
    <view class="text" slot="header">
      <text>
        同意
        <navigator class="link" url="https://m.alipay.com">《用户授权协议》</navigator>
      </text>
    </view>
  </terms>
  <text class="title">双按钮</text>
</view>
<view>
  <terms onSelect="onSelect" fixed="{{c2.fixed}}" related="{{c2.related}}" hasDesc="{{c2.hasDesc}}" agreeBtn="{{c2.agreeBtn}}" cancelBtn="{{c2.cancelBtn}}" shape="{{c2.shape}}" capsuleMinWidth="{{c2.capsuleMinWidth}}" capsuleSize="{{c2.capsuleSize}}">
    <view class="text" slot="desc">
      <text>
        查看
        <navigator class="link" url="https://m.alipay.com">《ETC服务用户协议》</navigator>
        ，授权ETC服务获取身份证、收货地址用于申请ETC，关注车主服务生活号获取审核；
      </text>
    </view>
  </terms>
  <text class="title">带辅助描述</text>
</view>
<view>
  <terms onSelect="onSelect" fixed="{{c3.fixed}}" related="{{c3.related}}" hasDesc="{{c3.hasDesc}}" agreeBtn="{{c3.agreeBtn}}" cancelBtn="{{c3.cancelBtn}}">
    <view class="text" slot="header">
      <text>
        同意
        <navigator class="link" url="https://m.alipay.com">《用户授权协议》</navigator>
      </text>
    </view>
  </terms>
  <text class="title">捆绑协议已选中</text>
</view>
<view>
  <terms onSelect="onSelect" fixed="{{c4.fixed}}" related="{{c4.related}}" hasDesc="{{c4.hasDesc}}" agreeBtn="{{c4.agreeBtn}}" cancelBtn="{{c4.cancelBtn}}" shape="{{c4.shape}}" capsuleMinWidth="{{c4.capsuleMinWidth}}" capsuleSize="{{c4.capsuleSize}}">
    <view class="text" slot="header">
      <text>
        同意
        <navigator class="link" url="https://m.alipay.com">《用户授权协议》</navigator>
      </text>
    </view>
  </terms>
  <text class="title">捆绑协议未选中</text>
</view>
<view>
  <terms fixed="{{c5.fixed}}" related="{{c5.related}}" hasDesc="{{c5.hasDesc}}"  agreeBtn="{{c5.agreeBtn}}" cancelBtn="{{c5.cancelBtn}}" shape="{{c5.shape}}" capsuleMinWidth="{{c5.capsuleMinWidth}}" capsuleSize="{{c5.capsuleSize}}">
    <view class="text" slot="header">
      <text>
        同意
        <navigator class="link" url="https://m.alipay.com">《用户授权协议》</navigator>
      </text>
    </view>
  </terms>
  <text class="title">无捆绑协议</text>
</view>
<view style="padding-bottom:30px;">
  <terms fixed="{{c6.fixed}}" related="{{c6.related}}" hasDesc="{{c6.hasDesc}}" agreeBtn="{{c6.agreeBtn}}" cancelBtn="{{c6.cancelBtn}}" shape="{{c6.shape}}" capsuleMinWidth="{{c6.capsuleMinWidth}}" capsuleSize="{{c6.capsuleSize}}">
    <view class="text" slot="header">
      <text>
        同意
        <navigator class="link" url="https://m.alipay.com">《用户授权协议》</navigator>
      </text>
    </view>
  </terms>
  <text class="title">吸底</text>
</view>
```

```acss
.title{
    text-align: center;
    display: block;
    width: 100%;
    margin: 20px 0;
}
page {
    padding: 24px  12px;
}
```

```js
const cfg = {
  c1: {
    related: false,
    agreeBtn: {
      title: '同意协议并开通',
    },
    cancelBtn: {
      title: '暂不开通，仅手动缴费',
    },
    hasDesc: false,
  },
  c2: {
    related: false,
    agreeBtn: {
      title: '同意协议并开通',
    },
    hasDesc: true,
  },
  c3: {
    related: true,
    agreeBtn: {
      checked: true,
      title: '提交',
    },
  },
  c4: {
    related: true,
    agreeBtn: {
      title: '提交',
    },
  },
  c5: {
    related: false,
    agreeBtn: {
      title: '同意协议并提交',
    },
  },
  c6: {
    related: true,
    fixed: true,
    agreeBtn: {
      checked: true,
      title: '提交',
    },
  },
};


Page({
  data: cfg,
  onLoad() {
  },
  onSelect(e) {
    const selectedData = e.currentTarget.dataset.name || '';
    selectedData && my.alert({
      title: 'Terms Btns',
      content: selectedData,
    });
  },

});

```



