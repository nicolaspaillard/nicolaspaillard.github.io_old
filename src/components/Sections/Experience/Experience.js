import * as React from 'react'
import Container from '../../Container/Container';
import TimeLine from './TimeLine/TimeLine';

export default function Experience() {
  var formations = 
  [
    {title:'09/2021 – 12/2021', content:'EPSI : Bachelor DEVOPS (inachevé faute d\'avoir trouvé une alternance)'},
    {title:'04/2021 – 07/2021', content:'Diginamic : Formation développeur C#.NET'},
    {title:'09/2015 – 07/2017', content:'Lycée Jean Mermoz : BTS Systèmes numériques option informatique et réseaux'},
    {title:'09/2012 – 07/2015', content:'Lycée Victor Hugo : Baccalauréat STI2D option systèmes informatiques et numériques'},
  ];
  var emplois = 
  [
    {title:'2022', content:'Consultant C# 🤞'},
  ];
  return (
    <section id='experience'>
      <div class='container'>
        <h1>Expériences</h1><br/><br/>
        <Container flex class={'main'}>
          <Container split width={80}>
            <Container flex>
              <Container split width={50}>
                <h2>Formations</h2>
                <TimeLine events={formations} />
              </Container>
              <Container split width={50}>
                <h2 class='mt1-query-small'>Emplois</h2>
                <TimeLine events={emplois} />
              </Container>
            </Container>
          </Container>
          <Container split width={20}>
            <h2 class='mt1-query-small'>Centres d'intérêt</h2>
              <br/>
              <p class="mb0">
                Entretien d'un système de sonorisation et organisation d'évènements privés<br/><br/>
                Randonnée, activités et sports de plein air<br/><br/>
                Voyages (dernier en date : 5 jours de kayak et bivouacs dans les fjords d'Oman suivis d'une visite de dubai)<br/><br/>
              </p>
            </Container>
        </Container>   
      </div>    
    </section>
  );
}