import * as React from 'react'
import { Link } from 'gatsby'
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faBriefcase, faEnvelope, faAddressCard, faBuilding } from '@fortawesome/fontawesome-free-solid';

export default function NavBar() {
    return (
      <nav id='navbar'>
        <Link to='#home'><FontAwesomeIcon icon={faHome} />&nbsp;&nbsp;Accueil</Link>
        <Link to='#aboutme'><FontAwesomeIcon icon={faAddressCard} />&nbsp;&nbsp;A propos</Link>
        <Link to='#skills'><FontAwesomeIcon icon={faBriefcase} />&nbsp;&nbsp;Compétences</Link>
        <Link to='#experiences'><FontAwesomeIcon icon={faBuilding} />&nbsp;&nbsp;Expériences</Link>
        <Link to='#contact'><FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;Contact</Link>
        <a class="icon" onClick={openMenu}>
          <FontAwesomeIcon icon={faBars} />
        </a>
      </nav>
    )
}

function openMenu() {
  var navbar = document.getElementById("navbar");
  if (navbar.className === "") {
    navbar.className += "expanded";
  } else {
    navbar.className = "";
  }
}