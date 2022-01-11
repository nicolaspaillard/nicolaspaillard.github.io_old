import React, { lazy } from 'react'
const Container = lazy(() => import('../../Container/Container'));
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBirthdayCake, faCar, faEnvelope, faGraduationCap, faMapMarker, faSearch,  } from '@fortawesome/fontawesome-free-solid';
import Icon from './Icon/Icon';

export default function AboutMe() {
  return (
    <section id='aboutme'>
      <div class='container'>
        <h1>À propos</h1><br/><br/>
        <Container flex class={'main center'}>
          <Container split width={30}>
            <img id='avatar' src={'https://nicolaspaillard.mo.cloudinary.net/PhbKLYv/profile.jpg'} style={{'border-radius':'50%','height':'auto','width':'100%'}} loading="lazy"/>
            <Container flex class='mt1 row center'>
              <Icon icon={faLinkedin}  href={'https://www.linkedin.com/in/nicolas--p/'}/>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Icon icon={faGithub}  href={'https://github.com/nicolaspaillard/'}/>
            </Container>
          </Container>
          <Container split width={70} class='pl2-no-query'>
              <h2 class='mt1-query-large'>Mon parcours</h2><br/>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;Passionné d'informatique depuis l'enfance, j'ai commencé très jeune à assembler des ordinateurs
              puis à m'intéresser à tous types de nouvelles technologies comme les drones ou encore les smartphones (android).
              Après avoir effectué un baccalauréat technonlogique (STI2D), je m'oriente donc naturellement
              vers le développement et le réseau en rejoignant la filière Systèmes numériques en BTS,
              avec option informatique et réseaux. Durant ces années je réalise mes premiers sites,
              l'un pour les études, l'autre pour le plaisir, faisant un premier pas vers la programmation.</p>
              <Container flex>
                <Container split width={50}>
                  <Icon icon={faSearch} text={'Recherche CDI'} />
                  <Icon icon={faCar} text={'Mobile en Occitanie'} />            
                  <Icon icon={faGraduationCap} text={'BTS Systèmes Numériques'} />
                </Container>
                <Container split class='mt05-query-small' width={50}>
                  <Icon icon={faBirthdayCake} text={getAge('1997-05-11') + ' ans'} />
                  <Icon icon={faMapMarker} text={'Montpellier, France'} />
                  <Icon icon={faEnvelope} text={'Contacter par mail'} href={'mailto:paillard.nicolas.pro@gmail.com'} />
                </Container>
              </Container>           
            <p class='mb0'>
              A la suite de ce BTS, j'ai fait la découverte de C# et du framework .NET, que j'ai d'abord expérimentés seul sur
              divers projets pour en comprendre les bases. Ce langage ayant éveillé ma curiosité, j'ai ensuite voulu parfaire mes connaissances,
              m'inscrivant chez Diginamic en formation C# pour une durée de 3 mois.
            </p>
          </Container>
        </Container>
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