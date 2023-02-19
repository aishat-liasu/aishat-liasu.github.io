import * as React from 'react';
import Layout from '../components/layout';
import NavButton from '../components/nav-button';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import {
  projectPage,
  projectHeader,
  projectFooter,
  content,
} from '../styles/project-layout.module.css';

export const projectsData = graphql`
  query GetCurrentProjectAndAllProjects($slug: String) {
    mdx(slug: { eq: $slug }) {
      id
      slug
      frontmatter {
        date
        description
        title
      }
      body
    }
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { slug: { glob: "*projects/*" } }
    ) {
      nodes {
        frontmatter {
          title
        }
        id
        slug
      }
    }
  }
`;

const ProjectLayout = ({ data }) => {
  const currentProjectData = data.mdx;
  const projects = data.allMdx?.nodes || [];

  const { title, description } = currentProjectData.frontmatter;

  const numOfProjects = projects.length;
  const currentProjectIndex = projects.findIndex(
    project => project.id === currentProjectData.id
  );

  return (
    <Layout title={title} description={description}>
      <section className={projectPage}>
        <header className={projectHeader}>
          <h2>
            <Link to="/projects"> Projects</Link> &gt; {title}
          </h2>
          <NavButton
            currentIndex={currentProjectIndex}
            total={numOfProjects}
            list={projects}
          />
        </header>
        <section className={content}>
          <MDXRenderer>{currentProjectData.body}</MDXRenderer>
        </section>

        <footer className={projectFooter}>
          <NavButton
            currentIndex={currentProjectIndex}
            total={numOfProjects}
            list={projects}
          />
        </footer>
      </section>
    </Layout>
  );
};

export default ProjectLayout;
