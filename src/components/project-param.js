import * as React from 'react';
import { projectParam } from '../styles/project-param.module.css';

const ProjectParam = ({ githubRepo, liveLink, techStack }) => {
  return (
    <div className={projectParam}>
      <article>
        <h4>Tech Stack</h4>
        {techStack.length > 0 && (
          <ul>
            {techStack.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        )}
      </article>
      <article>
        <h4>Codebase</h4>
        <a href={githubRepo} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      </article>
      {liveLink && (
        <article>
          <h4>Live</h4>
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            View Site
          </a>
        </article>
      )}
    </div>
  );
};

export default ProjectParam;
