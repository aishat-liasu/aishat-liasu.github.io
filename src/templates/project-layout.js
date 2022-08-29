import * as React from 'react';
import Layout from '../components/layout';
import NavButton from '../components/nav-button';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { postPage, postHeader, postFooter, content } from '../styles/post-layout.module.css';

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
    allMdx(sort: { fields: frontmatter___date, order: DESC } 
    filter: {slug: {glob: "*projects/*"}}) {
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
  const currentPostData = data.mdx;
  const posts = data.allMdx?.nodes || [];

  const { title, description } = currentPostData.frontmatter;

  const numOfPosts = posts.length;
  const currentPostIndex = posts.findIndex((post) => post.id === currentPostData.id);

  return (
    <Layout title={title} description={description}>
      <section className={postPage}>
        <header className={postHeader}>
          <h2>
            <Link to="/projects"> Projects</Link> &gt; {title}
          </h2>
          <NavButton currentIndex={currentPostIndex} total={numOfPosts} list={posts} />
        </header>
        <section className={content}>
          <MDXRenderer>{currentPostData.body}</MDXRenderer>
        </section>

        <footer className={postFooter}>
          <NavButton currentIndex={currentPostIndex} total={numOfPosts} list={posts} />
        </footer>
      </section>
    </Layout>
  );
};

export default ProjectLayout;
