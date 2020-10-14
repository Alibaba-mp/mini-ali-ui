import fmtUnit from '../_util/fmtUnit';

Component({
  props: {
    className: '',
    activeIndex: 1,
    failIndex: 0,
    size: 0,
    direction: 'horizontal',
    items: [],
    showStepNumber: false,
    horizHighlight: false, // 用于控制水平方向是否启用高亮展示 title
    iconFail: 'close', // 提示失败的 icon 图标
    iconSuccess: 'check', // 提示成功的 icon 图标
    iconSuccessBg: '', // 成功 icon 图标的背景颜色，且同时修改步骤线条颜色
    iconSuccessColor: '', // 成功 icon 的文本颜色
  },
  data: {
    __size12: fmtUnit(12),
    __size8: fmtUnit(8),
    valueUnit: fmtUnit('px'),
  },
});
