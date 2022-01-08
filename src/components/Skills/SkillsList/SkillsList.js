import * as React from 'react'
import SkillBar from './SkillBar/SkillBar';

export default function SkillsList(props) {
    var skills = props.skills;
    const skillslist = skills.map((skill) =>
        <SkillBar name={skill.name} level={skill.level}/>
    );
    return (
        skillslist
    )
}