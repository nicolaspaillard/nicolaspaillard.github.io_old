import * as React from 'react'
import SkillBar from './SkillBar/SkillBar';
import './Skills.css'
export default function Skills() {
  return (
    <section id='skills'>
      <div class='container'>
        <h1>Compétences</h1><br/>
        <div class='container-flex'>
          <div class='split-container'>
          <SkillBar name={'C#, .NET, ASP'} width={90} />
        <SkillBar name={'Java'} width={80} />
        <SkillBar name={'SQL'} width={70} />
        <SkillBar name={'React'} width={60} />
        <SkillBar name={'C#, .NET, ASP'} width={80} />
          </div>
          <div class='split-container'>
          <SkillBar name={'C#, .NET, ASP'} width={90} />
        <SkillBar name={'Java'} width={80} />
        <SkillBar name={'SQL'} width={70} />
        <SkillBar name={'React'} width={60} />
        <SkillBar name={'C#, .NET, ASP'} width={80} />
          </div>
        </div>

      </div>    
    </section>
  );
}