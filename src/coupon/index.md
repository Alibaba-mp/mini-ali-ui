# Coupon 票券



票券组件可应用于各种优惠券、红包、票等可兑换利益的虚拟资产。



## 预览

<img src="https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*wew8QamnvfoAAAAAAAAAAABkARQnAQ" width="375">



## 属性

| 属性名        | 类型     | 默认值 | 可选值 | 描述                   | 最低版本 | 必选 |
| ------------- | -------- | ------ | ------ | ---------------------- | -------- | ---- |
| thumb         | String   | -      | -      | Coupon缩略图地址       | -        | -    |
| title         | String   | -      | -      | Coupon标题             | -        | true |
| subTitle      | String   | -      | -      | Coupon副标题           | -        | -    |
| onCouponClick | Function | -      | -      | Coupon点击时的事件回调 | -        | -    |

## Slot

| slot name | 描述           |
| --------- | -------------- |
| action    | 票券右侧的插槽 |



## 示例


### json
```json
{
  "defaultTitle": "Coupon",
  "usingComponents":{
    "coupon":"min-ali-ui/es/coupon/index",
    "button": "min-ali-ui/es/button/index"
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
        onCouponClick="onCouponClick" 
        thumb="{{thumb}}">
        <button shape="capsule" 
          slot="action" 
          onTap="onButtonTap"
          type="ghost">capsule</button>
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
  onCouponClick() {
    my.alert({
      content: '票券点击事件',
    });
  },
  onButtonTap() {
    my.alert({
      content: '胶囊按钮点击事件',
    });
  },
});
```