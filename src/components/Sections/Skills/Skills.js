import * as React from 'react'
import SkillsList from './SkillsList/SkillsList';
import Container from '../../Container/Container'

export default function Skills() {

  var backend = [
    {name:'C#.NET', level:'90'},
    {name:'Java', level:'70'},
    {name:'SQL', level:'60'},
    {name:'C++/C', level:'60'},
    {name:'PHP', level:'90'},
  ];
  var frontend = [
    {name:'React', level:'70'},
    {name:'HTML/CSS', level:'90'},
    {name:'ASP.NET', level:'80'},
    {name:'Responsive Design', level:'80'},
    {name:'JavaScript', level:'70'},
  ];

  return (
    <section id='skills'>
      <div class='container'>
        <h1>Compétences</h1><br/><br/>
          <Container flex class={'main'}>
            <Container split width={20}>
              <p>lorem ipsum dolor sit amet</p>
            </Container>
            <Container split width={80}>
              <div class='container-flex'>
                <Container split width={50}>
                  <h2>Backend</h2>
                  <SkillsList skills={backend}/>
                </Container>
                <Container split width={50}>
                  <h2 class='mt1-query-small'>Frontend</h2>
                  <SkillsList skills={frontend}/>
                </Container>
              </div>
            </Container>
          </Container>
      </div>    
    </section>
  );
}