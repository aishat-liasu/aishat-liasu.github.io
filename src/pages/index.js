import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';

import {
  hero,
  heroImgSection,
  heroTextSection,
} from '../styles/index.module.css';

const IndexPage = () => {
  return (
    <Layout>
      <div className={hero}>
        <section className={heroTextSection}>
          <h1>
            <span>My name is</span>
            <span>Aishat Liasu</span>
          </h1>
          <h2>I'm a Full Stack Web Developer and Software Engineer</h2>

          <Link to="/about">About Me</Link>
        </section>

        <StaticImage
          src="../images/aishat_liasu.png"
          alt="A masked selfie of Aishat somewhere in a Mosque at Ikeja, Lagos"
          as="section"
          className={heroImgSection}
          style={{
            overflow: 'visible',
          }}
        />
      </div>
    </Layout>
  );
};

export default IndexPage;
