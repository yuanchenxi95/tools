import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Route, Switch } from 'react-router-dom'
// import PropTypes from 'prop-types'
// import _ from 'lodash'

// import {
//   HOME,
// } from 'src/constants/route'
// import { generateLoadablePage } from 'src/util/loadablePage'

import FallbackPage from '../FallbackPage'

// const TransitRoutePage = generateLoadablePage(import('./transit/TransitRoutePage'))


// @inject(stores => {
//   let { authenticationStore } = stores
//   let { token, validateToken } = authenticationStore
//   return {
//     token,
//     validateToken,
//   }
// })
@observer
class ProtectedRoutePage extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // this.props.validateToken()
  }

  // static propTypes = {
  //   token: PropTypes.string,
  //   validateToken: PropTypes.func,
  // }

  render() {
    // let { token } = this.props
    //
    // if (_.isNil(token)) {
    //   return <Redirect to={LOGIN}/>
    //
    // }

    return (
      <div>
        <Switch>
          {/*<Route path={HOME} component={UserHome} />*/}
          <Route component={FallbackPage} />
        </Switch>
      </div>
    )
  }
}

export default ProtectedRoutePage