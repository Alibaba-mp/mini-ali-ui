# steps 步骤进度条

根据步骤显示的进度条。


## 预览
<img src="https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*q8EXQZLe1ToAAAAAAAAAAABkARQnAQ" width="375" />

## 扫码体验

![image](http://mdn.alipayobjects.com/afts/img/A*rxAHT4dTIvcAAAAAAAAAAABkAa8wAA/original?bz=openpt_doc&t=KYBuhWlZKyz_rIAo-puidwAAAABkMK8AAAAA)



## 属性

| 属性名      | 类型                                                | 默认值     | 可选项                    | 描述                                       | 最低版本 | 必填  |
| ----------- | --------------------------------------------------- | ---------- | ------------------------- | ------------------------------------------ | -------- | ----- |
| className   | String                                              |            | -                         | 最外层覆盖样式                             | -        | false |
| activeIndex | Number                                              | 1          | -                         | 当前激活步骤                               | -        | true  |
| failIndex   | Number                                              | 0          | -                         | 当前失败步骤(只在vertical模式下生效)       | -        | false |
| direction   | String                                              | horizontal | vertical <br/> horizontal | 显示方向，可选值：`vertical`、`horizontal` | -        | false |
| size        | Number                                              | 0          | -                         | 统一的icon大小，单位为px                   | -        | false |
| items       | Array[{title, description, icon, activeIcon, size}] | []         | -                         | 步骤详情                                   | -        | true  |
| showStepNumber | Boolean | false | - | 是否以数字序列展示步骤 icon | [1.1.1](https://www.npmjs.com/package/mini-ali-ui?activeTab=versions) | - |

### slot
steps 组件中的 slot 插槽可根据具体的步骤数设置，如有 4 个步骤点，那么可插入 4 个 slot。

slot 名称的格式为：`desc_1`、`desc_2`、`desc_n`...以此类推，将 n 修改为指定 items 的序列即可。如下列代码将会第 4 个 items 中没有 description 值的时候显示 slot 内容。

```xml
<view slot="desc_4">当前 item 没有 <text style="color: green;">description</text> 时，使用 slot 内容。</view>
```

### items属性

| 属性名            | 类型   | 默认值 | 可选项 | 描述                                                       | 最低版本 | 必须 |
| ----------------- | ------ | ------ | ------ | ---------------------------------------------------------- | -------- | ---- |
| items.title       | String | -      | -      | 步骤详情标题                                               | -        | true |
| items.description | String | -      | -      | 步骤详情描述                                               | -        | true |
| items.icon        | String | -      | -      | 尚未到达步骤的icon(只在vertical模式下生效)                 | -        | true |
| items.activeIcon  | String | -      | -      | 已到达步骤的icon(只在vertical模式下生效)                   | -        | true |
| items.size        | Number | -      | -      | 已到达步骤icon的图标大小，单位为px(只在vertical模式下生效) | -        | true |

### tips
* 当 `showStepNumber` 为 `true` 时将会忽略 items 属性中 icon 相关属性，仅以数字序列方式展示；
* slot 中的数字与 items 的序列相对应，将会在 items 属性中没有 description 时展示；


## 示例

### json
```json
{
  "defaultTitle": "Steps",
  "usingComponents": {
    "steps": "mini-ali-ui/es/steps/index"
  }
}
```

### axml
```xml
<steps 
  className="demo-steps-class"
  activeIndex="{{activeIndex}}"
  items="{{items}}"
/>
<steps 
  className="demo-steps-class"
  activeIndex="{{activeIndex}}"
  items="{{items2}}"
/>
<steps 
  className="demo-steps-class"
  direction="vertical"
  failIndex="{{failIndex}}"
  activeIndex="{{activeIndex}}"
  items="{{items2}}"
  size="{{size}}"
  showStepNumber="{{showNumberSteps}}"
>
  <view slot="desc_4">当前 item 没有 <text style="color: green;">description</text> 时，使用 slot 内容。</view>
</steps>
<view class="demo-btn-container">
  <button class="demo-btn" onTap="preStep">上一步</button>
  <button class="demo-btn" onTap="nextStep">下一步</button>
</view>
<view class="demo-btn-container">
  <button class="demo-btn" onTap="setFailIndex">设置错误项</button>
  <button class="demo-btn" onTap="cancelFailIndex">取消错误项</button>
</view>
<view class="demo-btn-container">
  <button class="demo-btn" onTap="setIconSizeAdd">设置图标大小+</button>
  <button class="demo-btn" onTap="setIconSizeReduce">设置图标大小-</button>
</view>
<button type="primary" onTap="showNumberList">以{{!showNumberSteps?'数字':'图片/icon'}}方式展示步骤序列</button>
```


### js
```javascript
Page({
  data: {
    activeIndex: 1,
    failIndex: 0,
    size: 0,
    items: [{
      title: '步骤1',
    }, {
      title: '步骤2',
    }, {
      title: '步骤3',
    }],
    items2: [{
      title: '步骤1',
      description: '这是步骤1的描述文档，文字足够多的时候会换行，设置了成功的icon',
      activeIcon: 'https://i.alipayobjects.com/common/favicon/favicon.ico',
      size: 20,
    }, {
      title: '步骤2 如果标题足够长的话也会换行的',
      description: '这是步骤2，同时设置了两种状态的icon',
      icon: 'https://gw.alipayobjects.com/mdn/miniProgram_mendian/afts/img/A*lVojToO-qZIAAAAAAAAAAABjAQAAAQ/original',
      activeIcon: 'https://i.alipayobjects.com/common/favicon/favicon.ico',
    }, {
      title: '步骤3',
      description: '这是步骤3',
    }, {
      title: '步骤4',
    }],
    showNumberSteps: true,
  },
  nextStep() {
    this.setData({
      activeIndex: this.data.activeIndex + 1,
    });
  },
  preStep() {
    this.setData({
      activeIndex: this.data.activeIndex - 1,
    });
  },
  setFailIndex() {
    this.setData({
      failIndex: 3,
    });
  },
  cancelFailIndex() {
    this.setData({
      failIndex: 0,
    });
  },
  setIconSizeAdd() {
    this.setData({
      size: this.data.size < 30 && this.data.size > 14 ? this.data.size + 1 : 15,
    });
  },
  setIconSizeReduce() {
    this.setData({
      size: this.data.size > 15 ? this.data.size - 1 : 15,
    });
  },
  showNumberList() {
    this.setData({
      showNumberSteps: !this.data.showNumberSteps,
    });
  },
});
```

### acss
```css
.demo-steps-class {
  margin: 20px 0;
  border-bottom: 1px solid #e5e5e5;
}
.demo-btn-container {
  display: flex;
  justify-content: space-between;
  margin: 20px;
}
.demo-btn {
  width: 47%;
}
```