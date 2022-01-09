import * as React from 'react'
import ProjectsList from './ProjectsList/ProjectsList';
import ContainerFlex from '../../components/Containers/ContainerFlex/ContainerFlex'


import previousSite from '../../images/previousSite.png'

export default function Projects() {
    var projects = [
      {name:'Nicolas Paillard', url:'https://nicolas-p.000webhostapp.com', image:previousSite, text:'Mon ancien portfolio'},
      {name:'Nicolas Paillard', url:'https://nicolas-p.000webhostapp.com', image:previousSite, text:'Mon ancien portfolio'},
      {name:'Nicolas Paillard', url:'https://nicolas-p.000webhostapp.com', image:previousSite, text:'Mon ancien portfolio'},
      {name:'Nicolas Paillard', url:'https://nicolas-p.000webhostapp.com', image:previousSite, text:'Mon ancien portfolio'},
    ]
    return (
        <section id='projects'>
          <div class='container'>
            <h1>Projets</h1><br/><br/>
            <ProjectsList projects={projects} />  
          </div>        
        </section>
      );
  }