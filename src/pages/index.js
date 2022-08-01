import * as React from 'react';
import { list, listItem, hero, heroImgSection, heroTextSection } from '../styles/index.module.css';
import Layout from '../components/layout';
import { navigate } from 'gatsby';
import aishat_liasu from '../images/aishat_liasu.jpg';

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
