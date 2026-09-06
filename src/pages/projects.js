import * as React from 'react';
import Layout from '../components/layout';
import ProjectCard from '../components/project-card';
import { projectsPage, projectList } from '../styles/projects.module.css';

import { graphql, useStaticQuery } from 'gatsby';

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query GetProjects {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY", fromNow: true)
            description
            title
            featuredImage {
              childImageSharp {
                gatsbyImageData(placeholder: DOMINANT_COLOR)
              }
            }
          }
          id
          fields {
            slug
          }
        }
      }
    }
  `);

  const projects =
    data?.allMdx?.nodes?.filter((node) =>
      (node.slug || node.fields?.slug)?.includes('projects/')
    ) ?? [];

  return (
    <Layout title="Projects">
      <section className={projectsPage}>
        <h2>Projects</h2>
        <p>
          Here are some of the projects I have worked on either for personal
          learnings, work or gigs
        </p>
        <ul className={projectList}>
          {projects.length > 0 ? (
            projects.map((project) => (
              <ProjectCard
                {...project.frontmatter}
                {...project}
                slug={project.slug || project.fields?.slug}
                key={project.id}
              />
            ))
          ) : (
            <h3>Coming Soon...</h3>
          )}
        </ul>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
