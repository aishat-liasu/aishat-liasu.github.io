import * as React from 'react';
import { navigate } from 'gatsby';

//import styles
import {
  header,
  headerLogo,
  nav,
  main,
  navMobile,
  buttonContainer,
  closeBtnContainer,
} from '../styles/layout.module.css';
import '../styles/global.css';

//import components
import Nav from './nav.js';
import SeoComponent from './seo';

const Layout = ({
  children,
  title = false,
  description = false,
  path = false,
  image = false,
}) => {
  const [mobileMenu, setMobileMenu] = React.useState(false);

  function openOrCloseMobileMenu() {
    setMobileMenu(!mobileMenu);
  }

  function showHomePage() {
    navigate('/');
  }

  const showBlockStyle = {
    display: 'flex',
  };

  const hideBlockStyle = {
    display: 'none',
  };

  return (
    <>
      <SeoComponent
        title={title}
        description={description}
        path={path}
        image={image}
      />
      <header className={header}>
        <div className={headerLogo} onClick={showHomePage}></div>

        <Nav styleClassName={nav} />
        <Nav styleClassName={navMobile} mobileMenu={mobileMenu} />

        <div
          className={buttonContainer}
          onClick={openOrCloseMobileMenu}
          style={mobileMenu ? hideBlockStyle : {}}
          aria-label="Menubutton"
          role="button"
          tabindex="0"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div
          className={closeBtnContainer}
          onClick={openOrCloseMobileMenu}
          style={mobileMenu ? showBlockStyle : hideBlockStyle}
          aria-label="Close"
          role="button"
          tabindex="0"
        >
          <span></span>
          <span></span>
        </div>
      </header>
      <main className={main}>{children}</main>
    </>
  );
};

export default Layout;
