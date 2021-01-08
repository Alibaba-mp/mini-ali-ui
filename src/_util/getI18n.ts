import I18n_zhCN from '../_lang/zh-CN';
import I18n_enUS from '../_lang/en-US';

export default function getI18n() {
  /* global getApp */
  /* eslint no-undef: "error" */
  const app = getApp() || null;
  if (app.globalData?.miniAliUiLang === 'en-US') {
    return I18n_enUS;
  } else {
    return I18n_zhCN;
  }
}
