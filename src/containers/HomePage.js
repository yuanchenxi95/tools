import React, { Component } from 'react'
import { Button, Card, CardBody, CardTitle, CardText } from 'reactstrap'
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
        <Card body>
          <CardBody>
            <CardTitle>
              {t(keys.chineseTranslationConverter)}
            </CardTitle>
            <CardText>
              {t(keys.chineseConverterDescription)}
            </CardText>
            <Link to={CHINESE_TRANSLATION}>
              <Button color={'info'} >
                {t(keys.goto)}
              </Button>
            </Link>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default HomePage
