import * as React from 'react';
import { navigate } from 'gatsby';

import Layout from '../components/layout';

import { hero, heroImgSection, heroTextSection } from '../styles/index.module.css';
import aishat_liasu from '../images/aishat_liasu.png';

const IndexPage = () => {
  function showAboutPage(e) {
    e.preventDefault();
    navigate('/about');
  }

  return (
    <Layout>
      <div className={hero}>
        <section className={heroTextSection}>
          <h1>
            <span> My name is </span> <br /> Aishat Liasu
          </h1>
          <h2>I'm a Full Stack Web Developer and Software Engineer</h2>
          <button onClick={showAboutPage}>About me</button>
        </section>
        <section className={heroImgSection}>
          <img src={aishat_liasu} alt="A masked selfie of Aishat somewhere in a Mosque at Ikeja, Lagos" />
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;
