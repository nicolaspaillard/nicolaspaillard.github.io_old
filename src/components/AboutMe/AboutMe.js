import * as React from 'react'
import './AboutMe.css'
import avatar from '../../images/profile.jpg'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBirthdayCake, faCar, faEnvelope, faGraduationCap, faMapMarker, faSearch,  } from '@fortawesome/fontawesome-free-solid';
import Icon from './Icon/Icon';
import IconDetail from './IconDetail/IconDetail';

export default function AboutMe() {
    var diff = new Date() - new Date(1997,4,11);
    var age = new Date(diff);
    return (
      <section id='aboutme'>
        <div class='container'>
          <h1>À propos</h1><br/><br/>
          <div id='profile'>
            <div class='panel'>
              <img id='avatar' src={avatar} />
              <div id='social-links'>
                <Icon icon={faLinkedin}  href={'https://www.linkedin.com/in/nicolas--p/'}/>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Icon icon={faGithub}  href={'https://github.com/nicolaspaillard/'}/>
              </div>
            </div>
            <div class='panel'>
              <p>
                <h2>Mon parcours</h2>
                Passionné d'informatique depuis l'enfance, j'ai commencé très jeune à assembler des ordinateurs
                puis à m'intéresser à tous types de nouvelles technologies comme les drones ou encore les smartphones (android).
                Après avoir effectué un baccalauréat technonlogique (STI2D), je m'oriente donc naturellement
                vers le développement et le réseau en rejoignant la filière Systèmes numériques en BTS,
                avec option informatique et réseaux. Durant ces années je réalise mes premiers sites,
                l'un pour les études, l'autre pour le plaisir, faisant un premier pas vers la programmation.
              </p>
              <div class='container-flex'>
              <div class='icon-details'>
                <IconDetail icon={faGraduationCap} text={'BTS Systèmes Numériques'}/>
                <IconDetail icon={faSearch} text={'Recherche CDI'}/>
                <IconDetail icon={faCar} text={'Mobile en Occitanie'}/>                
              </div>
              <div class='icon-details'>
                <IconDetail icon={faBirthdayCake} text={getAge('1997-05-11') + ' ans'}/>
                <IconDetail icon={faMapMarker} text={'Montpellier, France'}/>
                <IconDetail icon={faEnvelope} text={'Contacter par mail'} href={'mailto:paillard.nicolas.pro@gmail.com'}/>
              </div>
              </div>
              
              <p>
                A la suite de ce BTS, j'ai fait la découverte de C# et du framework .NET, que j'ai d'abord expérimentés seul sur
                divers projets pour en comprendre les bases. Ce langage ayant éveillé ma curiosité, j'ai ensuite voulu parfaire mes connaissances,
                m'inscrivant en formation C# pour une durée de 3 mois.
              </p>
            </div>
          </div>
        </div>        
      </section>
    );
  }

function getAge(dateString) 
{
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}