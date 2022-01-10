import * as React from 'react'
import './SkillsList.css'

export default function SkillsList(props) {
    const skillslist = props.skills.map((skill) =>
        <div class='skill'>
            <div class='skill-text'>
                <a class='skill-name'>{skill.name}</a>
                <a class='skill-width'>{skill.level}%</a>
            </div>
            <span class='skill-bar'>
                <span class='skill-level' style={{width:skill.level+'%'}}></span>
            </span>
        </div>
    );

    return (
        skillslist
    )
}