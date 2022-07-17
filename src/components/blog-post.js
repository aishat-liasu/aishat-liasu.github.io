import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { blogPost } from '../styles/blog-post.module.css';

const BlogPost = ({ title, description, date, slug, id }) => {
  return (
    <li className={blogPost}>
      <img src="" alt="" width="300" height="300" />
      <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{description}</p>
        <Link to={slug.split('/').pop()}>Read More &#8594;</Link>
      </article>
    </li>
  );
};

export default BlogPost;
