import * as React from 'react';
import Layout from '../components/layout';
import NavButton from '../components/nav-button';
import SeoComponent from '../components/seo';
import { Link, graphql } from 'gatsby';
import {
  postPage,
  postHeader,
  postFooter,
  content,
} from '../styles/post-layout.module.css';

export const postsData = graphql`
  query GetCurrentPostAndAllPosts($id: String!) {
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

const PostLayout = ({ data, children }) => {
  const currentPostData = data.mdx;
  const posts =
    data.allMdx?.nodes?.filter((node) =>
      (node.slug || node.fields?.slug)?.includes('blog/')
    ) || [];

  const { title } = currentPostData.frontmatter;

  const numOfPosts = posts.length;
  const currentPostIndex = posts.findIndex(
    (post) => post.id === currentPostData.id
  );

  return (
    <Layout>
      <section className={postPage}>
        <header className={postHeader}>
          <h2>
            <Link to="/blog"> Blog</Link> &gt; {title}
          </h2>
          <NavButton
            currentIndex={currentPostIndex}
            total={numOfPosts}
            list={posts}
          />
        </header>
        <section className={content}>{children}</section>

        <footer className={postFooter}>
          <NavButton
            currentIndex={currentPostIndex}
            total={numOfPosts}
            list={posts}
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

export default PostLayout;
