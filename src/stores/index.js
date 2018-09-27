import { reaction } from 'mobx'

import i18n from 'src/i18n'

import i18nStore from './i18n'
import chineseTranslationStore from './chineseTranslation/index'
import routingStore from './routing/index'

reaction(
  () => i18nStore.locale,
  locale => {
    i18n.changeLanguage(locale)
  }
)

const stores = {
  chineseTranslationStore,
  routingStore,
  i18nStore,
}

export default stores