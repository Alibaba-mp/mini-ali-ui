import I18n_zhCN from '../_lang/zh-CN';
import I18n_enUS from '../_lang/en-US';

export default function getI18n() {
  try {
    /* global getApp */
    /* eslint no-undef: "error" */
    const appMiniAliUI = getApp() || null;
    if (appMiniAliUI) {
      if (appMiniAliUI.globalData?.miniAliUiLang === 'en-US') {
        return I18n_enUS;
      } else {
        return I18n_zhCN;
      }
    } else {
      return I18n_zhCN;
    }
  } catch (error) {
    return I18n_zhCN;
  }
}
