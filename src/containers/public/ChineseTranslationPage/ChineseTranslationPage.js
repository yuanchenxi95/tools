import { observer, inject } from 'mobx-react'
import React, { Component } from 'react'
import { Jumbotron, Form, FormGroup, Label, Input, TabContent, Button,
  TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import './ChineseTranslationPage.css'
import { CHINESE_MODE_ENUM } from 'src/constants/enum'
import { CopyToClipboard } from 'react-copy-to-clipboard'

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
@observer
class ChineseTranslationPage extends Component {
  constructor(props) {
    super(props)
    this.handSentenceChange = this.handSentenceChange.bind(this)
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
  }

  handSentenceChange(e) {
    e.preventDefault()
    this.props.setSentence(e.target.value)
  }

  renderCopyButton() {
    const { translatedSentence, copied, onCopy } = this.props
    return (
      <CopyToClipboard
        text={translatedSentence}
        onCopy={() => { onCopy() }}>
        <Button color={'primary'} block disabled={copied === true}>
          {copied === true ?
            'Copied | 复制成功'
            :
            'Copy | 复制'
          }
        </Button>
      </CopyToClipboard>
    )

  }


  render() {
    const { setToSimplified, setToTraditional, translatedSentence, inputMode, sentence } = this.props
    return (
      <div>
        <Jumbotron>
          <h3 className='display-5'>Simplified Chinese and Traditional Chinese Converter</h3>
          <h3 className='display-5'>简繁转化工具</h3>
        </Jumbotron>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: SIMPLIFIED === inputMode })}
              onClick={() => { setToSimplified() }}
            >
              简转繁
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: TRADITIONAL === inputMode })}
              onClick={() => { setToTraditional() }}
            >
              繁转简
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={inputMode}>
          <TabPane tabId={SIMPLIFIED}>
            <Form>
              <FormGroup>
                <Label for="chineseInput">
                  <h4>Simplified Chinese | 简体中文</h4>
                </Label>
                <Input
                  type="textarea"
                  id="chineseInput"
                  rows="6"
                  className={'sentenceArea'}
                  onChange={this.handSentenceChange}
                  value={sentence}
                />
              </FormGroup>
              <FormGroup>
                <Label for="translated">
                  <h4>Traditional Chinese | 繁体中文</h4>
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
            <Form>
              <FormGroup>
                <Label for="translated">
                  <h4>Traditional Chinese | 繁体中文</h4>
                </Label>
                <Input
                  type="textarea"
                  id="translated"
                  rows="6"
                  className={'sentenceArea'}
                  onChange={this.handSentenceChange}
                  value={sentence}
                />
              </FormGroup>
              <FormGroup>
                <Label for="chineseInput">
                  <h4>Simplified Chinese | 简体中文</h4>
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
          {this.renderCopyButton()}


        </TabContent>


      </div>
    )
  }
}

export default ChineseTranslationPage