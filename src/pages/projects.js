import * as React from 'react';
import Layout from '../components/layout';
import ProjectCard from '../components/project-card';
import { projectsPage, projectList } from '../styles/projects.module.css';

import { graphql, useStaticQuery } from 'gatsby';

const ProjectsPage = () => {
  const projects_1 = [
    {
      frontmatter: {
        title: 'Fyurr Web App',
        description: 'This is a full stack web app that helps artist find events centers to perform',
        date: '2022-07-16T00:00:00.000Z',
      },
      id: '6801756b-0dee-5bf2-a359-f609',
      slug: 'project/fyurr-web-app',
    },
    {
      frontmatter: {
        title: 'Portland to Portland',
        description: 'A fully responsive website that shows an epic bicycle journey within portland',
        date: '2022-07-17T00:00:00.000Z',
      },
      id: '6801756b-0dee-5bf2-a359-f12465-878696',
      slug: 'project/portland-to-portland',
    },
  ];

  const data = useStaticQuery(graphql`
    query GetProjects {
      allMdx(sort: { fields: frontmatter___date, order: DESC }
        filter: {slug: {glob: "*projects/*"}}) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY", fromNow: true)
            description
            title
            image
          }
          id
          slug
        }
      }
    }
  `);

const projects = data?.allMdx?.nodes ?? [];

  return (
    <Layout title="Projects">
      <section className={projectsPage}>
        <h2>Projects</h2>
        <p>Here are some of the projects I have worked on either for personal learnings, work or gigs</p>
        <ul className={projectList}>
          {projects.length > 0 ? (
            projects.map((project) => <ProjectCard {...project.frontmatter} {...project} key={project.id} />)
          ) : (
            <h3>Coming Soon...</h3>
          )}
        </ul>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
