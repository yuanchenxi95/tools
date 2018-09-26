import {observable, action, computed} from 'mobx'


// import uriRedirectingStore from '../uriRedirecting'

import { CHINESE_MODE_ENUM } from 'src/constants/enum'
import {
  convertSimplifiedToTraditional,
  convertTraditionalToSimplified,
} from 'src/util/simplifiedTraditionalChineseConverter'

const { SIMPLIFIED, TRADITIONAL} = CHINESE_MODE_ENUM

const sampleSentence = 'MobX 是一个经过战火洗礼的库，它通过透明的函数响应' +
  '式编程(transparently applying functional reactive programming - ' +
  'TFRP)使得状态管理变得简单和可扩展。MobX背后的哲学很简单:\n' +
  '任何源自应用状态的东西都应该自动地获得。\n' +
  '其中包括UI、数据序列化、服务器通讯，等等。\n'

class ChineseTranslation {
  @observable sentence = sampleSentence
  @observable inputMode = SIMPLIFIED
  @observable copied = false

  constructor() {

  }

  @action setSentence(sentence) {
    self.sentence = sentence
    self.copied = false
  }

  @action onCopy() {
    self.copied = true
  }

  @action setMode(mode) {
    self.inputMode = mode
    self.copied = false
  }

  @action setToSimplified() {
    self.setMode(SIMPLIFIED)
  }

  @action setToTraditional() {
    self.setMode(TRADITIONAL)
  }

  @computed get translatedSentence() {
    if (self.inputMode === SIMPLIFIED) {
      return convertSimplifiedToTraditional(self.sentence)
    } else if (self.inputMode === TRADITIONAL) {
      return convertTraditionalToSimplified(self.sentence)
    } else {
      throw new Error('Unknown mode')
    }
  }

}

const self = new ChineseTranslation()

export default self