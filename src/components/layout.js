import * as React from 'react';
import { navigate } from 'gatsby';

//import styles
import { header, headerLogo, nav, main, menuButton, navMobile } from '../styles/layout.module.css';
import '../styles/global.css';

//import components
import Nav from './nav.js';
import SeoComponent from './seo';

const Layout = ({ children, title = false, description = false, path = false, image = false }) => {
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const [menuSymbol, setMenuSymbol] = React.useState(`\u2630`);

  function openMobileMenu(e) {
    e.preventDefault();

    if (mobileMenu) {
      //set back to menu icon
      setMenuSymbol(`\u2630`);
    } else {
      //set menu to cancel symbol
      setMenuSymbol(`\u2715`);
    }
    setMobileMenu(!mobileMenu);
  }

  function showHomePage() {
    navigate('/');
  }

  return (
    <>
      <SeoComponent title={title} description={description} path={path} image={image} />
      <header className={header}>
        <div className={headerLogo} onClick={showHomePage}></div>

        <Nav styleClassName={nav} />
        <Nav styleClassName={navMobile} mobileMenu={mobileMenu} />

        <button className={menuButton} onClick={openMobileMenu}>
          {menuSymbol}
        </button>
      </header>
      <main className={main}>{children}</main>
    </>
  );
};

export default Layout;
