# Coupon 票券

票券组件可应用于各种优惠券、红包、票等可兑换利益的虚拟资产。

## 预览

<img src="https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*wew8QamnvfoAAAAAAAAAAABkARQnAQ" width="375">

## 扫码体验

![image](http://mdn.alipayobjects.com/afts/img/A*i9RQS4VidDEAAAAAAAAAAABkAa8wAA/original?bz=openpt_doc&t=BvcR6EamqEIxqVna9hLPtgAAAABkMK8AAAAA)



## 属性

| 属性名        | 类型     | 默认值 | 可选值 | 描述                   | 最低版本 | 必选 |
| ------------- | -------- | ------ | ------ | ---------------------- | -------- | ---- |
| thumb         | String   | -      | -      | Coupon缩略图地址       | -        | -    |
| title         | String   | -      | -      | Coupon标题             | -        | true |
| subTitle      | String   | -      | -      | Coupon副标题           | -        | -    |
| onCouponClick | Function | -      | -      | Coupon点击时的事件回调 | -        | -    |
| extra | Boolean | true | - | 票券是否展示左侧扩展信息 | [1.0.4](https://www.npmjs.com/package/mini-ali-ui?activeTab=versions) | - |
| moreBtn | String | 规则详情 | - | 票券使用规则点击展开显示更多的点击区域文案 | [1.0.4](https://www.npmjs.com/package/mini-ali-ui?activeTab=versions) | - |
| moreHide | Boolean | true | - | 是否展开票券使用规则的更多信息 | [1.0.4](https://www.npmjs.com/package/mini-ali-ui?activeTab=versions) | - |
| used | Boolean | false | - | 票券是否失效 | [1.0.4](https://www.npmjs.com/package/mini-ali-ui?activeTab=versions) | - |

## Slot

| slot name | 描述           |
| --------- | -------------- |
| action    | 票券右侧的插槽 |
| date      | 票券到期时间的插槽 |
| detail    | 票券规则详情的插槽 |


## 示例


### json
```json
{
  "defaultTitle": "Coupon",
  "usingComponents":{
    "coupon":"mini-ali-ui/es/coupon/index",
    "button": "mini-ali-ui/es/button/index",
    "am-checkbox": "mini-ali-ui/es/am-checkbox/index",
    "stepper": "mini-ali-ui/es/stepper/index"
  }
}
```


### axml
```xml
<view style="margin-top: 10px;" />
  <view>
    <coupon title="券标题"
      onCouponClick="onCouponClick" 
      thumb="{{thumb}}">
    </coupon>
  </view>
  <view>
    <coupon title="券标题" 
      subtitle="券副标题" 
      onCouponClick="onCouponClick" 
      thumb="{{thumb}}">
    </coupon>
  </view>
  <view>
    <coupon title="券标题" 
      subtitle="券副标题" 
      used="{{true}}"
      onCouponClick="onCouponClick" 
      thumb="{{thumb}}">
      <view slot="date">有效期：2020.02.14-2020.02.29</view>
      <view slot="detail" class="coupon_rule">
        <text>1、详细规则说明详细规则说明详细规则说明详细规则说明详细规则说明详细规则说明；</text>
        <text>2、详细规则说明详细规则说明规则说明详细规则说明详细规则说明；</text>
      </view>
    </coupon>
  </view>
  <view>
    <coupon title="券标题" 
      subtitle="券副标题" 
      onCouponClick="onCouponClick"
      extra="{{false}}"
      thumb="{{thumb}}">
      <button shape="capsule" slot="action" onTap="onButtonTap" type="ghost">立即使用</button>
      <view slot="date">有效期：2020.02.14-2020.02.29</view>
      <view slot="detail" class="coupon_rule">
        <text>1、详细规则说明详细规则说明详细规则说明详细规则说明详细规则说明详细规则说明；</text>
        <text>2、详细规则说明详细规则说明规则说明详细规则说明详细规则说明；</text>
      </view>
    </coupon>
  </view>
  <view>
    <coupon title="券标题" 
      subtitle="券副标题" 
      onCouponClick="onCouponClick" 
      thumb="{{thumb}}">
      <button shape="capsule" slot="action" onTap="onButtonTap" type="ghost">立即使用</button>
    </coupon>
  </view>
  <view>
    <coupon title="券标题" 
      subtitle="券副标题"
      moreBtn="查看更多"
      moreHide="{{false}}"
      onCouponClick="onCouponClick" 
      thumb="{{thumb}}">
      <button shape="capsule" slot="action" onTap="onButtonTap" type="primary">立即使用</button>
      <view slot="date">有效期：2020.02.14-2020.02.29</view>
      <view slot="detail" class="coupon_rule">
        <text>1、详细规则说明详细规则说明详细规则说明详细规则说明详细规则说明详细规则说明；</text>
        <text>2、详细规则说明详细规则说明规则说明详细规则说明详细规则说明；</text>
      </view>
    </coupon>
  </view>
  <view>
    <coupon title="券标题" 
      subtitle="券副标题" 
      onCouponClick="onCouponClick" 
      thumb="{{thumb}}">
      <am-checkbox slot="action" onTap="onButtonTap" />
    </coupon>
  </view>
  <view>
    <coupon title="券标题" 
      subtitle="券副标题" 
      onCouponClick="onCouponClick" 
      thumb="{{thumb}}">
      <stepper
        slot="action"
        step="{{1}}"
        showNumber
        min="{{2}}"
      />
    </coupon>
  </view>
  <view style="margin-top: 50px;" />
</view>
```


### js
```javascript
Page({
  data: {
    thumb: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*b-kqQ4RZgsYAAAAAAAAAAABkARQnAQ',
  },
  onCouponClick(e) {
    if (e.currentTarget.dataset.used) {
      return false;
    } else {
      my.alert({
        content: '可用票券，票券点击事件',
      });
    }
  },
  onButtonTap() {
    my.alert({
      content: '胶囊按钮点击事件',
    });
  },
});
```