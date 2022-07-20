import * as React from 'react';
import { list, listItem, hero, heroImgSection, heroTextSection } from '../styles/index.module.css';
import Layout from '../components/layout';
import { Link, navigate } from 'gatsby';
import aishat_liasu_1 from '../images/aishat_liasu.jpg';

// styles

// markup
const IndexPage = () => {
  function showAboutPage(e) {
    e.preventDefault();
    navigate('/about');
  }

  return (
    <Layout title="Home Page">
      <div className={hero}>
        <section className={heroTextSection}>
          <h1>
            <span> My name is </span> <br /> Aishat Liasu
          </h1>
          <h2>I'm a Full Stack Web Developer && Software Engineer</h2>
          {/*           <ul className={list}>
            <li className={listItem}>Software Engineer</li>
            <li className={listItem}>Full Stack Web Engineer</li>
          </ul> */}
          <button onClick={showAboutPage}>About Me</button>
        </section>
        <section className={heroImgSection}>
          <img src={aishat_liasu_1} alt="Aishat somewhere in a Mosque at Ikeja, Lagos" />
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;
