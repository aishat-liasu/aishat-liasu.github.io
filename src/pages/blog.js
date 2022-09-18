import * as React from 'react';
import Layout from '../components/layout';
import BlogPost from '../components/blog-post';
import { graphql, useStaticQuery } from 'gatsby';
import { blogPage, blogPosts } from '../styles/blog.module.css';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query GetBlogPosts {
      allMdx(sort: { fields: frontmatter___date, order: DESC }
        filter: {slug: {glob: "*blog/*"}}) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY", fromNow: true)
            description
            title
          }
          id
          slug
        }
      }
    }
  `);

  const posts = data?.allMdx?.nodes ?? [];

  return (
    <Layout title="Blog">
      <section className={blogPage}>
        <h2>Blog</h2>
        <p>At times I try to put down my thoughts for future reference</p>
        <ul className={blogPosts}>
          {posts.length > 0 ? posts.map((post) => <BlogPost {...post.frontmatter} {...post} key={post.id} />) : <h3>Coming Soon...</h3>}
        </ul>
      </section>
    </Layout>
  );
};

export default BlogPage;
