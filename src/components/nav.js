import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { navList, socialNav } from '../styles/nav.module.css';

//import social icons
import linkedinIcon from '../images/in-icon_colour_white.png';
import twitterIcon from '../images/tw-icon_colour_white.png';
import githubIcon from '../images/gh-icon_colour_white.png';
import emailIcon from '../images/em-icon_colour_white.png';

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

      <ul className={socialNav}>
        <li>
          <a href="https://twitter.com/AishatLiasu" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter Logo" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/aishat-liasu" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn Logo" />
          </a>
        </li>
        <li>
          <a href="https://github.com/aishat-liasu" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub Logo" />
          </a>
        </li>
        <li>
          <a href="mailto:aishatliasu17965@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={emailIcon} alt="Email Logo" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
