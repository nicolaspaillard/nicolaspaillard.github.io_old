// Step 1: Imports
import React, { lazy } from 'react'
// Global styles
import './styles.css'
// Components

const NavBar = lazy(() => import('../components/NavBar/NavBar'));
const Home = lazy(() => import('../components/Sections/Home/Home'));
const AboutMe = lazy(() => import('../components/Sections/AboutMe/AboutMe'));
const Skills = lazy(() => import('../components/Sections/Skills/Skills'));
const Experience = lazy(() => import('../components/Sections/Experience/Experience'));
const Projects = lazy(() => import('../components/Sections/Projects/Projects'));

import { faBriefcase, faAddressCard, faBuilding, faFileCode } from '@fortawesome/fontawesome-free-solid';

var pages = [
  {href:'#aboutme', icon:faAddressCard, name:'À propos'},
  {href:'#skills', icon:faBriefcase, name:'Compétences'},
  {href:'#experience', icon:faBuilding, name:'Expériences'},
  {href:'#projects', icon:faFileCode, name:'Projets'},
]

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <title>Nicolas Paillard</title>
      <NavBar pages={pages}/>
      <Home id="home" />
      <AboutMe id="about" />
      <Skills id="skills" />
      <Experience id="experience" />
      <Projects id="projects"/>
    </main>
  )
}

// Step 3: Export your component
export default IndexPage