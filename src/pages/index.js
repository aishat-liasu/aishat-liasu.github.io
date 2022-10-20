import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';

import {
  hero,
  imgWrapper,
  heroImgSection,
  heroTextSection,
} from '../styles/index.module.css';

const IndexPage = () => {
  return (
    <Layout>
      <div className={hero}>
        <section className={heroTextSection}>
          <h1>
            <span> My name is </span> <br /> Aishat Liasu
          </h1>
          <h2>I'm a Full Stack Web Developer and Software Engineer</h2>

          <span>
            <Link to="/about">About Me</Link>
          </span>
        </section>
        <section className={heroImgSection}>
          <StaticImage
            src="../images/aishat_liasu.png"
            alt="A masked selfie of Aishat somewhere in a Mosque at Ikeja, Lagos"
            className={imgWrapper}
          />
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;
