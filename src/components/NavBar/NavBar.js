import * as React from 'react'
import $ from 'jquery'
import jQuery from 'jquery'
import { Link } from 'gatsby'
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome} from '@fortawesome/fontawesome-free-solid';

// Check if window is defined (so if in the browser or in node.js).


export default function NavBar(props) {
  var pages = props.pages;
  const linkslist = pages.map((page) =>
    <Link to={page.href} class='nav-link'><FontAwesomeIcon icon={page.icon} />&nbsp;&nbsp;{page.name}</Link>
  );

  return (
    <nav id='nav-bar'>
      <Link to='#home' class='nav-link'><FontAwesomeIcon icon={faHome} />&nbsp;&nbsp;Accueil</Link>
      <div id='nav-links'>
        {linkslist}
      </div>
      <a id='nav-toggle'>
          <FontAwesomeIcon icon={faBars} />
      </a>
    </nav>
  )
};

const isBrowser = typeof window !== "undefined";
if (isBrowser) {
  jQuery(function(){    
    $('.nav-link').on('click', function(event){
      event.preventDefault();
      $('#nav-bar').removeClass('toggled');
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
}