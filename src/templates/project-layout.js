import * as React from 'react';
import Layout from '../components/layout';
import NavButton from '../components/nav-button';
import SeoComponent from '../components/seo';
import { Link, graphql } from 'gatsby';
import {
  projectPage,
  projectHeader,
  projectFooter,
  content,
} from '../styles/project-layout.module.css';

export const projectsData = graphql`
  query GetCurrentProjectAndAllProjects($id: String!) {
    mdx(id: { eq: $id }) {
      id
      fields {
        slug
      }
      frontmatter {
        date
        description
        title
      }
    }
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
        }
        id
        fields {
          slug
        }
      }
    }
  }
`;

const ProjectLayout = ({ data, children }) => {
  const currentProjectData = data.mdx;
  const projects =
    data.allMdx?.nodes?.filter(node =>
      (node.slug || node.fields?.slug)?.includes('projects/')
    ) || [];

  const { title } = currentProjectData.frontmatter;

  const numOfProjects = projects.length;
  const currentProjectIndex = projects.findIndex(
    project => project.id === currentProjectData.id
  );

  return (
    <Layout>
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
        <section className={content}>{children}</section>

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

export const Head = ({ data }) => {
  const { title, description } = data.mdx.frontmatter;
  return <SeoComponent title={title} description={description} />;
};

export default ProjectLayout;
