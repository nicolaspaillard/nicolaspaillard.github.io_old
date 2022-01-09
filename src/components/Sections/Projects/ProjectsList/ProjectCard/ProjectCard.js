import { Link } from 'gatsby'
import * as React from 'react'
import './ProjectCard.css'

export default function ProjectCard(props) {
  return (
    <Link to={props.href} class='project-link'>
      <div class='project-card'>
          <h2 class='project-name'>{props.name}</h2>     
          <img class='project-img' src={props.image} />
          <p class='project-text'><i>{props.text}</i></p>
      </div>
    </Link>
  );
}