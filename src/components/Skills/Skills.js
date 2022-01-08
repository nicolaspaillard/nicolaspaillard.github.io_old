import * as React from 'react'
import './Skills.css'
import SkillsList from './SkillsList/SkillsList';

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
  ];

  return (
    <section id='skills'>
      <div class='container'>
        <h1>Compétences</h1><br/>
        <div class='container-flex main'>
          <div class='split-container w20'>
            <p>lorem ipsum dolor sit amet</p>
          </div>
          <div class='split-container w80'>
            <div class='container-flex'>
              <div class='split-container w50'>
                <h2>Backend</h2>
                <SkillsList skills={backend}/>
              </div>
              <div class='split-container w50'>
                <h2>Frontend</h2>
                <SkillsList skills={frontend}/>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </section>
  );
}