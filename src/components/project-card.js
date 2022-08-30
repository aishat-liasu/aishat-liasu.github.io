import * as React from 'react';
import { Link, navigate } from 'gatsby';
import { projectCard } from '../styles/project-card.module.css';
import { GatsbyImage } from "gatsby-plugin-image"

const ProjectCard = ({ title, description, date, slug, id, featuredImage }) => {
  const projectLink = slug.split('/').pop() || '#';

  const imageSrc = featuredImage? featuredImage.childImageSharp.gatsbyImageData : '../'

  function showProjectPage() {
    navigate(projectLink);
  }

  return (
    <li className={projectCard} onClick={showProjectPage}>

      <div>
        <GatsbyImage image={imageSrc} alt={title}/>
      </div>

      <article>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={projectLink}>Read More &#8594;</Link>
      </article>
    </li>
  );
};

export default ProjectCard;
