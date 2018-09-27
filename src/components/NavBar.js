import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Navbar, Nav, NavbarBrand, NavItem,
  NavLink, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { translate } from 'react-i18next'
import { FaLanguage } from 'react-icons/fa'

import { ROOT, CHINESE_TRANSLATION } from '../constants/route'
import { keys } from 'src/i18n/resources'

@inject(stores => {
  const { i18nStore } = stores
  const { setLocaleToEnglish, setLocaleToChinese } = i18nStore
  return {
    setLocaleToEnglish,
    setLocaleToChinese,
  }
})
@translate()
@observer
class NavBar extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      languageDropdownOpen: false,
    }
  }

  static propTypes = {
    t: PropTypes.func.isRequired,
    setLocaleToEnglish: PropTypes.func.isRequired,
    setLocaleToChinese: PropTypes.func.isRequired,
    // logOut: PropTypes.func.isRequired,
  }

  toggle() {
    this.setState({
      languageDropdownOpen: !this.state.languageDropdownOpen,
    })
  }

  render() {
    const { t, setLocaleToChinese, setLocaleToEnglish } = this.props

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
            <NavLink tag={Link} to={ROOT}>
              {t(keys.tools)}
            </NavLink>
          </NavbarBrand>
          <Nav navbar>
            <NavItem>
              <NavLink tag={Link} to={CHINESE_TRANSLATION}>
                {t(keys.chineseTranslationConverterShort)}
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Dropdown nav isOpen={this.state.languageDropdownOpen} toggle={this.toggle}>
                <DropdownToggle nav caret>
                  <FaLanguage size={40}/>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>{t(keys.language)}</DropdownItem>
                  <DropdownItem onClick={setLocaleToEnglish}>English</DropdownItem>
                  <DropdownItem onClick={setLocaleToChinese}>中文</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }

}

export default NavBar
