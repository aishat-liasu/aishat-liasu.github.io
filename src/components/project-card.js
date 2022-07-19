import * as React from 'react';
import { Link } from 'gatsby';
import { projectCard } from '../styles/project-card.module.css';

const ProjectCard = ({ title, description, date, slug, id }) => {
  return (
    <li className={projectCard}>
      <div>
        <img src="../" alt="Something about the project in question" />
      </div>

      <article>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={slug.split('/').pop()}>Read More &#8594;</Link>
      </article>
    </li>
  );
};

export default ProjectCard;
