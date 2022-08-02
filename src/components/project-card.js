import * as React from 'react';
import { Link, navigate } from 'gatsby';
import { projectCard } from '../styles/project-card.module.css';

const ProjectCard = ({ title, description, date, slug, id }) => {
  const projectLink = '#';

  function showProjectPage() {
    navigate(projectLink);
  }

  return (
    <li className={projectCard} onClick={showProjectPage}>
      <div>
        <img src="../" alt="Something about the project in question" />
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
