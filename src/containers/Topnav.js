/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { injectIntl } from 'react-intl';

import {
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';

import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

// import IntlMessages from '../../helpers/IntlMessages';

import {
  setContainerClassnames,
  clickOnMobileMenu
} from '../../redux/menu-slice';
import { logoutUser } from '../../redux/auth-slice';
import { changeLocale } from '../../redux/settings-slice';

import {
  // buyUrl,
  adminRoot
} from '../../constants/defaultValues';

import { MobileMenuIcon, MenuIcon } from '../../components/svg';

const TopNav = ({
  history,
  containerClassnames,
  menuClickCount,
  selectedMenuHasSubItems,
  authUser,
  setContainerClassnamesAction,
  clickOnMobileMenuAction,
  logoutUserAction
}) => {
  const handleLogout = () => {
    logoutUserAction(history);
  };

  const menuButtonClick = (e, _clickCount, _conClassnames) => {
    e.preventDefault();

    setTimeout(() => {
      const event = document.createEvent('HTMLEvents');
      event.initEvent('resize', false, false);
      window.dispatchEvent(event);
    }, 350);
    setContainerClassnamesAction(
      _clickCount + 1,
      _conClassnames,
      selectedMenuHasSubItems
    );
  };

  const mobileMenuButtonClick = (e, _containerClassnames) => {
    e.preventDefault();
    clickOnMobileMenuAction(_containerClassnames);
  };

  return (
    <nav className="navbar fixed-top">
      <div className="d-flex align-items-center navbar-left">
        <NavLink
          to="#"
          location={{}}
          className="menu-button d-none d-md-block"
          onClick={e => menuButtonClick(e, menuClickCount, containerClassnames)}
        >
          <MenuIcon />
        </NavLink>
        <NavLink
          to="#"
          location={{}}
          className="menu-button-mobile d-xs-block d-sm-block d-md-none"
          onClick={e => mobileMenuButtonClick(e, containerClassnames)}
        >
          <MobileMenuIcon />
        </NavLink>

        {/* <div className="position-relative d-none d-none d-lg-inline-block">
          <a
            className="btn btn-outline-primary btn-sm ml-2"
            target="_top"
            href={buyUrl}
          >
            <IntlMessages id="user.buy" />
          </a>
        </div> */}
      </div>
      <NavLink className="navbar-logo" to={adminRoot}>
        <span className="logo d-none d-xs-block" />
        <span className="logo-mobile d-block d-xs-none" />
      </NavLink>

      <div className="navbar-right">
        <div className="user d-inline-block">
          <UncontrolledDropdown className="dropdown-menu-right">
            <DropdownToggle className="p-0" color="empty">
              <span className="name mr-1">
                {authUser.currentUser && authUser.currentUser.email}
              </span>
              {authUser.currentUser && (
                <span>
                  <img
                    alt="Profile"
                    src={`https://ui-avatars.com/api/?name=${authUser.currentUser.email}`}
                  />
                </span>
              )}
            </DropdownToggle>
            <DropdownMenu className="mt-3" right>
              <DropdownItem onClick={() => handleLogout()}>
                Cerrar sesión
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ menu, settings, authUser }) => {
  const { containerClassnames, menuClickCount, selectedMenuHasSubItems } = menu;
  const { locale } = settings;
  return {
    containerClassnames,
    menuClickCount,
    selectedMenuHasSubItems,
    locale,
    authUser
  };
};
export default injectIntl(
  connect(mapStateToProps, {
    setContainerClassnamesAction: setContainerClassnames,
    clickOnMobileMenuAction: clickOnMobileMenu,
    logoutUserAction: logoutUser,
    changeLocaleAction: changeLocale
  })(TopNav)
);