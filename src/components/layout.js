import * as React from 'react';
import { Link } from 'gatsby';

//import styles
import {
  header,
  headerLink,
  nav,
  main,
  navMobile,
  buttonContainer,
  closeBtnContainer,
} from '../styles/layout.module.css';

//import components
import Nav from './nav.js';

//import assets
import close_icon from '../images/close-icon.png';
import logo from '../images/AishatLiasu.svg';

const Layout = ({ children }) => {
  const [mobileMenu, setMobileMenu] = React.useState(false);

  function openOrCloseMobileMenu() {
    setMobileMenu(!mobileMenu);
  }

  const showBlockStyle = {
    display: 'flex',
  };

  const hideBlockStyle = {
    display: 'none',
  };

  return (
    <>
      <header className={header}>
        <span>
          <Link to="/" className={headerLink}>
            <img src={logo} alt="Logo" />
          </Link>
        </span>

        <Nav styleClassName={nav} />
        <Nav styleClassName={navMobile} mobileMenu={mobileMenu} />

        <div
          className={buttonContainer}
          onClick={openOrCloseMobileMenu}
          onKeyDown={openOrCloseMobileMenu}
          style={mobileMenu ? hideBlockStyle : {}}
          aria-label="Menu Button"
          role="button"
          tabIndex="0"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div
          className={closeBtnContainer}
          onClick={openOrCloseMobileMenu}
          onKeyDown={openOrCloseMobileMenu}
          style={mobileMenu ? showBlockStyle : hideBlockStyle}
          aria-label="Close Button"
          role="button"
          tabIndex="0"
        >
          <img src={close_icon} alt="Close Icon" />
        </div>
      </header>
      <main className={main}>{children}</main>
    </>
  );
};

export default Layout;
