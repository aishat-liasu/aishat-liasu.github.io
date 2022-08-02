import * as React from 'react';
import { Link, navigate } from 'gatsby';

import { header, headerLogo, nav, main, menuButton, navMobile } from '../styles/layout.module.css';
import '../styles/global.css';
import Nav from './nav.js';

const Layout = ({ children, title = false, description = false, path = false, image = false }) => {
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const [menuSymbol, setMenuSymbol] = React.useState(`\u2630`);

  function openMobileMenu(e) {
    e.preventDefault();

    if (mobileMenu) {
      setMenuSymbol(`\u2630`);
    } else {
      setMenuSymbol(`\u2715`);
    }
    setMobileMenu(!mobileMenu);
  }

  function showHomePage() {
    navigate('/');
  }

  return (
    <>
      <header className={header}>
        <div className={headerLogo} onClick={showHomePage}>
          {/* <Link to="/">Aishat</Link> */}
        </div>

        {/*         <nav className={nav}>
          <ul className={navList}>
            <li>
              <Link to="/about" activeClassName={activeLink}>
                About
              </Link>
            </li>
            <li>
              <Link to="/resume" activeClassName={activeLink}>
                Resume
              </Link>
            </li>
            <li>
              <Link to="/projects" activeClassName={activeLink} partiallyActive={true}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/blog" activeClassName={activeLink} partiallyActive={true}>
                Blog
              </Link>
            </li>
          </ul>
        </nav> */}

        {/*         <nav className={navMobile} style={mobileMenu ? mobileMenuStyle: {}}>
          <ul className={navList}>
            <li>
              <Link to="/about" activeClassName={activeLink}>
                About
              </Link>
            </li>
            <li>
              <Link to="/resume" activeClassName={activeLink}>
                Resume
              </Link>
            </li>
            <li>
              <Link to="/projects" activeClassName={activeLink} partiallyActive={true}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/blog" activeClassName={activeLink} partiallyActive={true}>
                Blog
              </Link>
            </li>
          </ul>
        </nav> */}

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
