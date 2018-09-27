import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { translate } from 'react-i18next'
import PropTypes from 'prop-types'

import { CHINESE_TRANSLATION } from '../constants/route'
import { keys } from 'src/i18n/resources'

@translate()
class HomePage extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    t: PropTypes.func.isRequired,
  }


  render() {
    const { t } = this.props

    return (
      <div>
        <h1>{t(keys.homePageText)}</h1>
        <br/>
        <Link to={CHINESE_TRANSLATION}>
          <Button color={'info'} block>
            <h4>
              {/*Simplified-Traditional Chinese Conversion*/}
              {/*<br/>*/}
              {/*汉繁转化*/}
              {t(keys.chineseTranslationConverter)}
            </h4>
          </Button>
        </Link>
      </div>
    )
  }
}

export default HomePage
