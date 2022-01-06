import * as React from 'react'
import * as $ from 'jquery'
import jQuery from 'jquery'
import { Link } from 'gatsby'
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faBriefcase, faEnvelope, faAddressCard, faBuilding } from '@fortawesome/fontawesome-free-solid';

export default function NavBar() {
    return (
      <nav id='nav-bar'>
        <Link to='#home' class='nav-link'><FontAwesomeIcon icon={faHome} />&nbsp;&nbsp;Accueil</Link>
        <Link to='#aboutme' class='nav-link'><FontAwesomeIcon icon={faAddressCard} />&nbsp;&nbsp;A propos</Link>
        <Link to='#skills' class='nav-link'><FontAwesomeIcon icon={faBriefcase} />&nbsp;&nbsp;Compétences</Link>
        <Link to='#experience' class='nav-link'><FontAwesomeIcon icon={faBuilding} />&nbsp;&nbsp;Expériences</Link>
        <Link to='#contact' class='nav-link'><FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;Contact</Link>
        <a id='nav-toggle' class="icon">
          <FontAwesomeIcon icon={faBars} />
        </a>
      </nav>
    )
}

jQuery(function(){    
  $('.nav-link').on('click', function(event){
    event.preventDefault();
    var destination = $(this).attr('href').substring(1);
    $('html, body').animate({
      scrollTop: $(destination).offset().top - 16*3 -1
    }, 500);
  });

  $('#nav-toggle').on('click', function() {
    if ($('#nav-bar').attr('class') != 'toggled') {
      $('#nav-bar').addClass('toggled');
    }else{
      $('#nav-bar').removeClass('toggled');
    }
  });
});