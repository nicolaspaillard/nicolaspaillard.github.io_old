import * as React from 'react'
import ContainerSplit from '../../Containers/ContainerSplit/ContainerSplit';
import ContainerFlex from '../../Containers/ContainerFlex/ContainerFlex';
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
        <h1>Expériences</h1><br/><br/>
          <ContainerFlex class={'main'}>
            <ContainerSplit width={80}>
              <ContainerFlex>
                <ContainerSplit width={50}>
                  <h2>Formations</h2>
                  <TimeLine events={formations} />
                </ContainerSplit>
                <ContainerSplit width={50}>
                  <h2 class='margin-top-1-query-small'>Emplois</h2>
                  <TimeLine events={emplois} />
                </ContainerSplit>
              </ContainerFlex>
            </ContainerSplit>
            <ContainerSplit width={20}>
              <p>lorem ipsum dolor sit amet</p>
              </ContainerSplit>
          </ContainerFlex>   
      </div>    
    </section>
  );
}