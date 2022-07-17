import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { activeLink, navList } from '../styles/nav.module.css';

const Nav = ({ styleClassName, mobileMenu = false }) => {
  const mobileMenuStyle = {
    display: 'block',
  };

  const activeLinkStyle = {
    fontWeight: 900,
  };

  return (
    <nav className={styleClassName} style={mobileMenu ? mobileMenuStyle : {}}>
      <ul className={navList}>
        <li>
          <Link to="/about" activeStyle={activeLinkStyle}>
            About
          </Link>
        </li>
        <li>
          <Link to="/resume" activeStyle={activeLinkStyle}>
            Resume
          </Link>
        </li>
        <li>
          <Link to="/projects" activeStyle={activeLinkStyle} partiallyActive={true}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/blog" activeStyle={activeLinkStyle} partiallyActive={true}>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
