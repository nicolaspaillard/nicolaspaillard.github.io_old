import * as React from 'react'
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
    {title:'2022', content:'Consultant C#'},
  ];
  return (
    <section id='experience'>
      <div class='container'>
        <h1>Expériences</h1><br/>
        <div class='container-flex main'>
          <div class='split-container w80'>
            <div class='container-flex'>
              <div class='split-container w50'>
                <h2>Formations</h2>
                <TimeLine events={formations} />
              </div>
              <div class='split-container w50'>
                <h2>Emplois</h2>
                <TimeLine events={emplois} />
              </div>
            </div>
          </div>
          <div class='split-container w20'>
            <p>lorem ipsum dolor sit amet</p>
          </div>
        </div>    
      </div>    
    </section>
  );
}