import fmtUnit from '../_util/fmtUnit';

const isV2 = my.canIUse('movable-view.onTouchStart');
let _windowWidth: number;
Component({
  data: {
    leftPos: 0,
    swiping: false,
    holdSwipe: true,
    viewWidth: 0,
    x: 0,
    actionWidth: 0,
    transitionVal: 'none',
    radiusItemSpace: fmtUnit('12px'),
  },
  props: {
    className: '',
    right: [],
    restore: false,
    borderRadius: false,
    index: null,
    swipeitem: null,
    height: 0,
    enableNew: true,
    swipeWidth: '',
  },
  didMount() {
    const { enableNew, swipeWidth } = this.props;
    const useV2 = isV2 && enableNew;
    this.setData({
      useV2,
    });
    if (swipeWidth.match(/%/)) {
      this.setData({
        swipeWidth: '',
      });
    }
    this.setWindowWidth();
  },
  didUpdate(_prevProps, prevData) {
    const { restore } = this.props;
    const { holdSwipe, useV2 } = this.data;
    if (
      (restore === true && _prevProps.restore !== restore) ||
      (prevData.holdSwipe === true && holdSwipe === false)
    ) {
      this.setData({
        leftPos: 0,
        swiping: false,
        cellWidth: this.btnWidth,
        x: this.btnWidth, // V2
      });
    }
    this.getSwipeHeight();

    if (!useV2) {
      this.setBtnWidth();
      this.getSwipeHeight();
    }
  },
  methods: {
    setWindowWidth() {
      if (!_windowWidth) {
        const sysInfo = my.getSystemInfoSync();
        if (sysInfo) {
          _windowWidth = sysInfo.windowWidth;
          this.realSetWindowWidth(sysInfo.windowWidth);
        }
      } else {
        this.realSetWindowWidth(_windowWidth);
      }
    },
    realSetWindowWidth(windowWidth: number): void {
      this.setData({
        viewWidth: windowWidth,
      });
      this.setBtnWidth();
      this.getSwipeHeight();
    },
    setBtnWidth() {
      my.createSelectorQuery()
        .select(`.am-swipe-right-${this.$id}`)
        .boundingClientRect()
        .exec((ret) => {
          this.btnWidth = (ret && ret[0] && ret[0].width) || 0;
          if (isV2 && this.props.enableNew) {
            this.setData({
              actionWidth: this.btnWidth,
              x: this.btnWidth,
              cellWidth: this.btnWidth,
              lastWidth: this.btnWidth,
            });
          }
        });
    },
    getSwipeHeight() {
      const { enableNew } = this.props;
      const useV2 = isV2 && enableNew;
      if (useV2) {
        my.createSelectorQuery()
          .select(`.am-swipe-movable-area-${this.$id}`)
          .boundingClientRect()
          .exec((ret) => {
            if (!ret) return;
            this.setData({
              height: parseInt(ret[0].height, 0),
            });
          });
      }
    },
    onSwipeTap() {
      this.setData({
        cellWidth: this.data.lastWidth,
      });
      if ((!this.data.swiping && this.data.x < 0) || this.data.leftPos !== 0) {
        this.setData({
          leftPos: 0,
          swiping: false,
          x: 0,
        });
      }
    },
    onSwipeStart(e) {
      this.touchObject = {
        startX: e.touches[0].pageX,
        startY: e.touches[0].pageY,
      };
      const { index, onSwipeStart } = this.props;
      if (onSwipeStart) {
        onSwipeStart({ index });
      }
    },
    onSwipeMove(e) {
      const { touchObject } = this;
      const touchePoint = e.touches[0];
      const { leftPos } = this.data;

      touchObject.endX = touchePoint.pageX;

      // 首次触发时，计算滑动角度
      if (touchObject.direction === undefined) {
        let direction = 0;

        const xDist = touchObject.startX - touchePoint.pageX || 0;
        const yDist = touchObject.startY - touchePoint.pageY || 0;

        const r = Math.atan2(yDist, xDist);
        let swipeAngle = Math.round((r * 180) / Math.PI);

        if (swipeAngle < 0) {
          swipeAngle = 360 - Math.abs(swipeAngle);
        }
        if (swipeAngle <= 45 && swipeAngle >= 0) {
          direction = 1;
        }
        if (swipeAngle <= 360 && swipeAngle >= 315) {
          direction = 1;
        }
        if (swipeAngle >= 135 && swipeAngle <= 225) {
          direction = -1;
        }

        touchObject.direction = direction;
      }

      // 通过角度判断是左右方向
      if (touchObject.direction !== 0) {
        let newLeftPos = leftPos;
        // 滑动距离
        const distance = touchObject.endX - touchObject.startX;
        // 左划
        if (distance < 0) {
          newLeftPos = Math.max(distance, -this.btnWidth);
          // 右划
        } else {
          newLeftPos = 0;
        }
        if (Math.abs(distance) > 10) {
          this.setData({
            leftPos: newLeftPos,
            swiping: distance < 0,
          });
        }
      }
    },
    onSwipeEnd(e) {
      const { touchObject } = this;
      if (touchObject.direction !== 0) {
        const touchePoint = e.changedTouches[0];

        touchObject.endX = touchePoint.pageX;

        const { leftPos } = this.data;
        const distance = touchObject.endX - touchObject.startX;
        let newLeftPos = leftPos;
        if (distance < 0) {
          if (Math.abs(distance + leftPos) > this.btnWidth * 0.7) {
            newLeftPos = -this.btnWidth;
          } else {
            newLeftPos = 0;
          }
        }
        this.setData({
          leftPos: newLeftPos,
          swiping: false,
        });
      }
    },
    onChange() {
      if (!this.data.swiping) {
        this.setData({
          swiping: true,
          transitionVal: 'transform 100ms linear',
        });
      }
    },
    onChangeEnd(e) {
      const { actionWidth } = this.data;
      const { x } = e.detail;
      this.setData(
        {
          x: x < actionWidth / 2 ? -1 : actionWidth - 1,
          swiping: false,
        },
        () => {
          this.setData({
            x: this.data.x === -1 ? 0 : actionWidth,
          });
        }
      );
    },
    done() {
      this.setData(
        {
          holdSwipe: true,
        },
        () => {
          this.setData({
            holdSwipe: false,
          });
        }
      );
    },
    onItemClick(e) {
      const { onRightItemClick } = this.props;
      const { holdSwipe } = this.data;
      if (onRightItemClick) {
        const { index } = e.target.dataset;
        onRightItemClick({
          index,
          extra: this.props.extra,
          detail: this.props.right[index],
          done: this.done.bind(this),
        });
      }

      if (!this.data.swiping && holdSwipe === false) {
        setTimeout(() => {
          this.setData({
            leftPos: 0,
            swiping: false,
            x: 0,
          });
        }, 300);
      }
    },
  },
});
