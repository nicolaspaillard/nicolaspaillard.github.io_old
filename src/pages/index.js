// Step 1: Imports
import * as React from 'react'
// Global styles
import './styles.css'
// Components
import NavBar from '../components/NavBar/NavBar'
import AboutMe from '../components/AboutMe/AboutMe'
import Skills from '../components/Skills/Skills'
import Experience from '../components/Experience/Experience'
import Home from '../components/Home/Home'
import Projects from '../components/Projects/Projects'

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