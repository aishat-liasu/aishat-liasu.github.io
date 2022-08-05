import * as React from 'react';
import Layout from '../components/layout';
import { aboutPage, content, bold } from '../styles/about.module.css';

const AboutPage = () => {
  return (
    <Layout title="About Me">
      <section className={aboutPage}>
        <h2>About Me</h2>
        <h3>Who am I</h3>
        <div className={content}>
          <p>
            Frankly speaking, I am still trying to figure that out. Let’s just say I am a fan of the phrase “More with less”. Ultimately, I think
            that’s what every advancement in science is trying to solve - How can we achieve more with less?. Be it less time, less cost, less stress,
            less CO
            <sub>2</sub> , or less effort.
          </p>
          <p>
            I love how technology is revolutionising the way we live, work and socialize. With just a mobile phone and perhaps internet coverage we
            can communicate with almost anyone in every part of the world. With applications like Slack and GitHub, several organisations are able to
            maintain a globally diverse workforce. On platforms like Duolingo and YouTube, over a million people have learnt new languages or learnt a
            skill, forever changing the way we learn. All of this is possible because of human ingenuity and the proper utilization of existing
            technologies.
          </p>
          <p>
            In case I haven’t been specific, I love technology, most especially what can be done using technology. Currently, I am finding my own way
            to contribute positively and meaningfully to the world with the help of technology.
          </p>
          <p className={bold}>I guess a better summary would be: </p>
          <p>
            I am a problem solver seeking to solve problems through human creativity and by properly utilising technology. I am a software engineer
            with experience building enterprise software solutions using agile methodologies. I have also had the opportunity to work and learn from
            both senior and junior developers to develop business solutions from inception to completion.
          </p>
          <p>
            I always try to improve my skills and learn new skills either by discussing with fellow engineers to go over my understanding, taking
            online courses, reading articles, or reading documentation. At the moment, I am also trying to write as a way of cementing my
            understanding.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
