import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { CHINESE_TRANSLATION } from '../constants/route'

class HomePage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        主页面
        <br/>
        <Link to={CHINESE_TRANSLATION}>
          <Button color={'primary'} block>
            Simplified-Traditional Chinese Conversion
            <br/>
            汉繁转化
          </Button>
        </Link>
      </div>
    )
  }
}

export default HomePage
