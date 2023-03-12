import * as React from 'react';
import { Link } from 'gatsby';
import { blogPost } from '../styles/blog-post.module.css';

const BlogPost = ({ title, description, date, slug }) => {
  const postLink = slug.split('/').pop() || '#';

  return (
    <li className={blogPost}>
      <Link to={postLink}>
        <article>
          <h3>{title}</h3>
          <small>{date}</small>
          <p>{description}</p>
          <p>Read More &#8594;</p>
        </article>
      </Link>
    </li>
  );
};

export default BlogPost;
