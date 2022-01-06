// Step 1: Imports
import * as React from 'react'
// Global styles
import './styles.css'
// Components
import NavBar from '../components/NavBar/NavBar'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Experience from '../components/Eperience'
import Contact from '../components/Contact'
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
      <Experience id="experiences" />
      <Contact id="contact"/>
    </main>
  )
}

// Step 3: Export your component
export default IndexPage