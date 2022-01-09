import * as React from 'react'
import ProjectCard from './ProjectCard/ProjectCard';
import ContainerFlex from '../../../Containers/ContainerFlex/ContainerFlex';

export default function ProjectsList(props) {
    var projects = props.projects;
    const projectsList = projects.map((project) =>
        <ProjectCard name={project.name} href={project.url} image={project.image} text={project.text} />
    );
  return (
    <ContainerFlex>
      <div class='projects-container'>{projectsList}</div> 
    </ContainerFlex>
    
  );
}