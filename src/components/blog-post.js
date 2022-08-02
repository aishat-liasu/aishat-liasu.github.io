import * as React from 'react';
import { Link, navigate } from 'gatsby';
import { blogPost } from '../styles/blog-post.module.css';

const BlogPost = ({ title, description, date, slug, id }) => {
  const postLink = slug.split('/').pop() || '#';

  function showPostPage() {
    navigate(postLink);
  }

  return (
    <li className={blogPost} onClick={showPostPage}>
      {/* <img src="" alt="" width="300" height="300" /> */}
      <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{description}</p>
        <Link to={postLink}>Read More &#8594;</Link>
      </article>
    </li>
  );
};

export default BlogPost;
