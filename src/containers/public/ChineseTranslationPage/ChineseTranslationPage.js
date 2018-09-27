import { observer, inject } from 'mobx-react'
import React, { Component } from 'react'
import { CardTitle, Card, Form, FormGroup, Label, Input, TabContent, Button,
  TabPane, Nav, NavItem, NavLink, ButtonGroup } from 'reactstrap'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { translate } from 'react-i18next'

import './ChineseTranslationPage.css'
import { CHINESE_MODE_ENUM } from 'src/constants/enum'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { keys } from 'src/i18n/resources'

const {
  TRADITIONAL,
  SIMPLIFIED,
} = CHINESE_MODE_ENUM

@inject(stores => {
  let { chineseTranslationStore } = stores
  let {
    sentence,
    inputMode,
    setSentence,
    setToSimplified,
    setToTraditional,
    translatedSentence,
    copied,
    onCopy,
  } = chineseTranslationStore
  return {
    sentence,
    inputMode,
    setSentence,
    setToSimplified,
    setToTraditional,
    translatedSentence,
    copied,
    onCopy,
  }
})
@translate()
@observer
class ChineseTranslationPage extends Component {
  constructor(props) {
    super(props)
    this.handleSentenceChange = this.handleSentenceChange.bind(this)
    this.renderCopyButton = this.renderCopyButton.bind(this)
  }

  static propTypes = {
    sentence: PropTypes.string.isRequired,
    inputMode: PropTypes.string.isRequired,
    translatedSentence: PropTypes.string.isRequired,
    setSentence: PropTypes.func.isRequired,
    setToSimplified: PropTypes.func.isRequired,
    setToTraditional: PropTypes.func.isRequired,
    copied: PropTypes.bool.isRequired,
    onCopy: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
  }

  handleSentenceChange(e) {
    e.preventDefault()
    this.props.setSentence(e.target.value)
  }

  renderCopyButton() {
    const { translatedSentence, copied, onCopy, setSentence, t } = this.props
    return (
      <div className={classnames('featureButtonGroup')}>
        <ButtonGroup>
          <Button color={'primary'} onClick={() => { setSentence('') }}>
            {t(keys.clear)}
          </Button>
          <CopyToClipboard
            text={translatedSentence}
            onCopy={() => { onCopy() }}>
            <Button color={'success'} disabled={copied === true}>
              {
                copied === true ? t(keys.copied) : t(keys.copy)
              }
            </Button>
          </CopyToClipboard>
        </ButtonGroup>
      </div>
    )
  }


  render() {
    const { setToSimplified, setToTraditional, translatedSentence, inputMode, sentence, t } = this.props
    return (
      <div>

        <Card body>
          <CardTitle>
            {t(keys.chineseTranslationConverter)}
          </CardTitle>
        </Card>
        {this.renderCopyButton()}

        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: SIMPLIFIED === inputMode })}
              onClick={() => { setToSimplified() }}
            >
              {t(keys.simplifiedToTraditional)}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: TRADITIONAL === inputMode })}
              onClick={() => { setToTraditional() }}
            >
              {t(keys.traditionalToSimplified)}
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={inputMode}>
          <TabPane tabId={SIMPLIFIED}>
            <br/>
            <Form>
              <FormGroup>
                <Label for="chineseInput">
                  <h4>{t(keys.simplifiedChinese)}</h4>
                </Label>
                <Input
                  type="textarea"
                  id="chineseInput"
                  rows="6"
                  className={'sentenceArea'}
                  onChange={this.handleSentenceChange}
                  value={sentence}
                />
              </FormGroup>
              <FormGroup>
                <Label for="translated">
                  <h4>{t(keys.traditionalChinese)}</h4>
                </Label>
                <Input
                  type="textarea"
                  id="translated"
                  rows="6"
                  className={'sentenceArea'}
                  readOnly
                  // onChange={(e) => { e.preventDefault() }}
                  value={translatedSentence}
                />
              </FormGroup>
            </Form>
          </TabPane>
          <TabPane tabId={TRADITIONAL}>
            <br/>
            <Form>
              <FormGroup>
                <Label for="translated">
                  <h4>{t(keys.traditionalChinese)}</h4>
                </Label>
                <Input
                  type="textarea"
                  id="translated"
                  rows="6"
                  className={'sentenceArea'}
                  onChange={this.handleSentenceChange}
                  value={sentence}
                />
              </FormGroup>
              <FormGroup>
                <Label for="chineseInput">
                  <h4>{t(keys.simplifiedChinese)}</h4>
                </Label>
                <Input
                  type="textarea"
                  id="chineseInput"
                  rows="6"
                  className={'sentenceArea'}
                  readOnly
                  value={translatedSentence}
                />
              </FormGroup>
            </Form>
          </TabPane>

        </TabContent>


      </div>
    )
  }
}

export default ChineseTranslationPage
