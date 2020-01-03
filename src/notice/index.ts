const noop = () => { };
const canIUseTransitionEnd = my.canIUse('view.onTransitionEnd');

Component({
  props: {
    className: '',
    mode: '', // closable,link
    action: '', // 文本按钮
    actionLeft: '', // 文本按钮
    show: true, // 是否显示
    enableMarquee: false, // 是否开启marquee
    onClick: () => { },
    onClickLeft: () => { },
    marqueeProps: {
      loop: false,
      leading: 500,
      trailing: 800,
      fps: 40,
    },
    capsuleItem: [],
    showIcon: true,
    type: 'normal', // 通告栏类型： normal/error/active
    capsule: false, // 是否为胶囊型通告栏
    transparent: false,
  },
  data: {
    animatedWidth: 0,
    overflowWidth: 0,
    duration: 0,
    marqueeStyle: '',
    canIUseTransitionEnd,
    showShadow: true,
  },
  didMount() {
    if (this.props.enableMarquee) {
      if (!canIUseTransitionEnd) {
        this._measureText();
        this._startAnimation();
      } else {
        this._measureText(this.startMarquee.bind(this));
      }
    }
    if (this.props.type === 'active' && this.props.transparent) {
      this.setData({
        showShadow: false,
      });
    } else {
      this.setData({
        showShadow: true,
      });
    }
  },

  didUpdate() {
    if (this.props.type === 'active' && this.props.transparent) {
      this.setData({
        showShadow: false,
      });
    } else {
      this.setData({
        showShadow: true,
      });
    }
    // 这里更新处理的原因是防止notice内容在动画过程中发生改变。
    if (!canIUseTransitionEnd) {
      this._measureText();
    }
    if (this.props.enableMarquee && !this._marqueeTimer && !canIUseTransitionEnd) {
      this._measureText();
      this._startAnimation();
    } else {
      // 当通过脚本切换 show 的值时（true or false），导致跑马灯动画效果失效的 bug 处理
      if (!this.props.show) {
        this.setData({ marqueeStyle: '' });
      }
      this._measureText(this.startMarquee.bind(this));
    }
  },

  didUnmount() {
    if (this._marqueeTimer) {
      clearTimeout(this._marqueeTimer);
      this._marqueeTimer = null;
    }
  },
  methods: {
    resetMarquee() {
      const marqueeStyle = 'transform: translateX(0px); transition: 0s all linear;';
      this.setData({ marqueeStyle });
    },

    startMarquee() {
      const { leading = 500 } = this.props.marqueeProps;
      const { duration, overflowWidth } = this.data;
      const marqueeStyle = `transform: translateX(${-overflowWidth}px); transition: ${duration}s all linear ${typeof leading === 'number' ? `${leading / 1000}s` : '0s'};`;
      this.setData({ marqueeStyle });
    },

    onTransitionEnd() {
      const { loop = false, trailing = 800 } = this.props.marqueeProps;
      if (loop) {
        setTimeout(() => {
          this.resetMarquee();
          this._measureText(this.startMarquee.bind(this));
        }, typeof trailing === 'number' ? trailing : 0);
      }
    },

    _measureText(callback = noop) {
      const { fps = 40 } = this.props.marqueeProps;
      // 计算文本所占据的宽度，计算需要滚动的宽度
      my.createSelectorQuery()
        .select(`.am-notice-marquee-${this.$id}`)
        .boundingClientRect()
        .select(`.am-notice-content-${this.$id}`)
        .boundingClientRect()
        .exec((ret) => {
          const overflowWidth = (ret && ret[0] && ret[1] && (ret[0].width - ret[1].width)) || 0;
          if (overflowWidth > 0) {
            this.setData({
              overflowWidth,
              duration: (overflowWidth / fps),
            });
            callback();
          }
        });
    },

    _startAnimation() {
      if (this._marqueeTimer) {
        clearTimeout(this._marqueeTimer);
      }

      const {
        loop = false,
        leading = 500,
        trailing = 800,
        fps = 40,
      } = this.props.marqueeProps;
      const TIMEOUT = 1 / fps * 1000;
      const isLeading = this.data.animatedWidth === 0;
      const timeout = isLeading ? leading : TIMEOUT;

      const animate = () => {
        const { overflowWidth } = this.data;
        let animatedWidth = this.data.animatedWidth + 1;
        const isRoundOver = animatedWidth > overflowWidth;

        if (isRoundOver) {
          if (loop) {
            animatedWidth = 0;
          } else {
            return;
          }
        }

        if (isRoundOver && trailing) {
          this._marqueeTimer = setTimeout(() => {
            this.setData({
              animatedWidth,
            });

            this._marqueeTimer = setTimeout(animate, TIMEOUT);
          }, trailing);
        } else {
          this.setData({
            animatedWidth,
          });

          this._marqueeTimer = setTimeout(animate, TIMEOUT);
        }
      };

      if (this.data.overflowWidth !== 0) {
        this._marqueeTimer = setTimeout(animate, timeout);
      }
    },

    onNoticeTap() {
      const { capsule, mode, action, actionLeft, onClick } = this.props;
      if ((capsule && typeof onClick === 'function') || (mode === 'link' && actionLeft === '' && action === '' && typeof onClick === 'function')) {
        onClick();
      }
    },

    onOperationTap() {
      const { mode, action, onClick } = this.props;
      if ((mode || action !== '') && typeof onClick === 'function') {
        onClick();
      }
    },

    onActionLeftTap() {
      const { actionLeft, onClickLeft } = this.props;
      if (actionLeft !== '' && typeof onClickLeft === 'function') {
        onClickLeft();
      }
    },
  },
});
