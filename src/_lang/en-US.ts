import I18n_zhCN from './zh-CN';

const I18n_enUS = {
  amountInput: {
    thousand: 'in thousand (K)' || I18n_zhCN.amountInput.thousand,
    tenThousand: 'in ten thousand' || I18n_zhCN.amountInput.tenThousand,
    hundredThousand: 'in a hundred thousand' || I18n_zhCN.amountInput.hundredThousand,
    million: 'in million (M)' || I18n_zhCN.amountInput.tenThousand,
    tenMillion: 'in ten million' || I18n_zhCN.amountInput.million,
    hundredMillion: 'in a hundred million' || I18n_zhCN.amountInput.hundredMillion,
    billion: 'in billion (B)' || I18n_zhCN.amountInput.billion,
  },
  avatar: {
    error: 'Avatar: Define both the name and the desc.' || I18n_zhCN.avatar.error,
  },
  calendar: {
    year: ' ' || I18n_zhCN.calendar.year,
    month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] || I18n_zhCN.calendar.month,
    sunday: 'SUN' || I18n_zhCN.calendar.sunday,
    monday: 'MON' || I18n_zhCN.calendar.monday,
    tuesday: 'TUE' || I18n_zhCN.calendar.tuesday,
    wednesday: 'WED' || I18n_zhCN.calendar.wednesday,
    thursday: 'THUR' || I18n_zhCN.calendar.thursday,
    friday: 'FRI' || I18n_zhCN.calendar.friday,
    saturday: 'SAT' || I18n_zhCN.calendar.saturday,
  },
  coupon: {
    ruleBtn: 'More' || I18n_zhCN.coupon.ruleBtn,
  },
  filter: {
    reset: 'Clear' || I18n_zhCN.filter.reset,
    confirm: 'Apply' || I18n_zhCN.filter.confirm,
  },
  footer: {
    endLine: 'End' || I18n_zhCN.footer.endLine,
  },
  guide: {
    nextBtn: 'Next' || I18n_zhCN.guide.nextBtn,
    jumpBtn: 'Skip' || I18n_zhCN.guide.jumpBtn,
    overBtn: 'OK' || I18n_zhCN.guide.overBtn,
  },
  list: {
    loadMore: 'See more...' || I18n_zhCN.list.loadMore,
    loadOver: '-- This is the end. --' || I18n_zhCN.list.loadOver,
  },
  notice: {
    detail: 'More' || I18n_zhCN.notice.detail,
  },
  pageResult: {
    refresh: 'Refresh' || I18n_zhCN.pageResult.refresh,
    networkTitle: 'We\'ve lost the Internet connection.' || I18n_zhCN.pageResult.networkTitle,
    errorTitle: 'We\'re met some errors.' || I18n_zhCN.pageResult.errorTitle,
    busyTitle: 'Hang on,  we\'ll be back soon.' || I18n_zhCN.pageResult.busyTitle,
    emptyTitle: 'No coupons anymore.' || I18n_zhCN.pageResult.emptyTitle,
    logoffTitle: 'The user has logged off.' || I18n_zhCN.pageResult.logoffTitle,
    paymentTitle: 'Your payment failed.' || I18n_zhCN.pageResult.paymentTitle,
    redpacketTitle: 'No coupons anymore.' || I18n_zhCN.pageResult.redpacketTitle,
    networkBrief: 'We\'re working out best to get you back up and running. Just be patient.' || I18n_zhCN.pageResult.networkBrief,
    errorBrief: 'Please refresh and try again later.' || I18n_zhCN.pageResult.errorBrief,
    busyBrief: 'You\'re in a high traffic. Just be patient.' || I18n_zhCN.pageResult.busyBrief,
    emptyBrief: 'Sorry. We tried out best.' || I18n_zhCN.pageResult.emptyBrief,
    logoffBrief: '' || I18n_zhCN.pageResult.logoffBrief,
    paymentBrief: 'Please try again.' || I18n_zhCN.pageResult.paymentBrief,
    redpacketBrief: 'Come to pick up the coupon earlier next time.' || I18n_zhCN.pageResult.redpacketBrief,
    timeOut: 's to ' || I18n_zhCN.pageResult.timeOut,
  },
  searchBar: {
    cancel: 'Cancel' || I18n_zhCN.searchBar.cancel,
  },
  verifyCode: {
    label: 'Ver. Code' || I18n_zhCN.verifyCode.label,
    placeholder: 'Enter the verification code we just sent.' || I18n_zhCN.verifyCode.placeholder,
    sendBtn: 'Send' || I18n_zhCN.verifyCode.sendBtn,
    sendAgainBtn: 'Resend Now' || I18n_zhCN.verifyCode.sendAgainBtn,
    countDown: 'Resend Later' || I18n_zhCN.verifyCode.countDown,
  },
};
export default I18n_enUS;
