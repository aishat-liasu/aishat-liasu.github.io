import * as React from 'react';
import { Link } from 'gatsby';
import { projectCard, imgContainer } from '../styles/project-card.module.css';
import { GatsbyImage } from 'gatsby-plugin-image';

const ProjectCard = ({ title, description, slug, featuredImage }) => {
  const projectLink = slug.split('/').pop() || '#';

  const imageSrc = featuredImage
    ? featuredImage.childImageSharp.gatsbyImageData
    : '../';

  return (
    <li className={projectCard}>
      <Link to={projectLink}>
        <div className={imgContainer}>
          <GatsbyImage image={imageSrc} alt={title} />
        </div>

        <article>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>Read More &#8594;</p>
        </article>
      </Link>
    </li>
  );
};

export default ProjectCard;
