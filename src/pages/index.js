// Step 1: Imports
import * as React from 'react'
// Global styles
import './styles.css'
// Components
import NavBar from '../components/NavBar/NavBar'
import AboutMe from '../components/AboutMe/AboutMe'
import Skills from '../components/Skills/Skills'
import Experience from '../components/Experience/Experience'
import Contact from '../components/Contact/Contact'
import Home from '../components/Home/Home'



// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <title>Nicolas Paillard</title>
      <NavBar />
      <Home id="home" />
      <AboutMe id="about" />
      <Skills id="skills" />
      <Experience id="experience" />
      <Contact id="contact"/>
    </main>
  )
}

// Step 3: Export your component
export default IndexPage