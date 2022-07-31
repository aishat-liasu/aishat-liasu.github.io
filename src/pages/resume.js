import * as React from 'react';
import Layout from '../components/layout';
import { resumeContent, work, education, skills } from '../styles/resume.module.css';

const ResumePage = () => {
  return (
    <Layout title="Resume">
      <h2>Resume</h2>
      <p>Here is a summary of my academic and work experience</p>
      <div className={resumeContent}>
        <section className={work}>
          <h3>Work Experience</h3>
          <article>
            <h4>Software Engineer</h4>
            <p>
              Babban Gona | <span>August 2021 - Present</span>
            </p>
            <ul>
              <li>Led a team of 2 interns to create backend API endpoints from the creation to completion for a mobile app</li>
              <li>Creating API endpoints consumed by mobile applications supporting the company's logistics</li>
              <li>Maintaining existing web applications using React and Redux</li>
              <li>Building web applications that monitor the company’s resources</li>
              <li>Building reusable React components to help speed up development time.</li>
            </ul>
          </article>

          <article>
            <h4>Software Engineer Intern</h4>
            <p>
              Babban Gona | <span>February 2021 - July 2021</span>
            </p>
            <ul>
              <li>
                Worked with other software engineers to build a web application that automates new employees’ registration process, reducing the time
                from 10 minutes to less than a minute.
              </li>
              <li>Built web applications using React and Redux</li>
              <li>Built the company’s website using HTML, CSS and WordPress</li>
              <li>Maintained the company’s website to enable a good user experience and disseminate new content</li>
            </ul>
          </article>
        </section>

        <section className={education}>
          <h3>Education</h3>
          <article>
            <h4>Full Stack Web Developer Nanodegree</h4>
            <p>
              Udacity | <span>May 2022 - In Progess</span>
            </p>
            <ul>
              <li>Python</li>
              <li>Flask</li>
              <li>PostgreSQL</li>
              <li>SQLAlchemy</li>
            </ul>
          </article>
          <article>
            <h4>React Nanodegree</h4>
            <p>
              Udacity | <span>August 2021 - November 2021</span>
            </p>
            <ul>
              <li>React</li>
              <li>Redux</li>
            </ul>
          </article>
          <article>
            <h4>BSc. in Electrical & Electronics Engineering</h4>
            <p>
              University of Lagos | <span>November 2014 - January 2020</span>
            </p>
            <ul>
              <li>
                First Class Honours - <b>4.84/5.0 CGPA</b>
              </li>
              <li>
                Relevant Coursework: Pure Mathematics, Applied Mathematics, Programming (C++), Logic Design and Digital System, Digital Computer
                Design, Microcomputer Graphics, Microprocessors and Microcomputers
              </li>
            </ul>
          </article>
        </section>

        <section className={skills}>
          <h3>Skills</h3>
          <p>Below is the list of technologies, and tools I have learnt and used over the last few years</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Bootstrap</li>
            <li>WordPress</li>
            <li>SQL</li>
            <li>PostreSQL</li>
            <li>Python</li>
            <li>Express</li>
            <li>NodeJS</li>
            <li>TypeScript</li>
            <li>Git</li>
            <li>Postman</li>
            <li>VS Code</li>
            <li>MySQL</li>
            <li>pgAdmin</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default ResumePage;
