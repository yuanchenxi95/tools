import _ from 'lodash'
import simplifiedToTraditionalDictionary from 'src/data/simplifiedToTraditional.json'

const traditionalToSimplifiedDictionary = {}

_.forEach(simplifiedToTraditionalDictionary, (value, key) => {
  traditionalToSimplifiedDictionary[value] = key
})

const conversionFunction = function(sentence, dict) {
  const sentenceArray = sentence.split('')
  const translatedSentence = _.map(sentenceArray, (word) => {
    if(word in dict) {

      return dict[word]
    } else {
      return word
    }
  })
  return translatedSentence.join('')
}

export const convertSimplifiedToTraditional = function (sentence) {
  return conversionFunction(sentence, simplifiedToTraditionalDictionary)
}


export const convertTraditionalToSimplified = function (sentence) {
  return conversionFunction(sentence, traditionalToSimplifiedDictionary)

}