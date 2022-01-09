import * as React from 'react'
import './SkillBar.css'

export default function SkillBar(props) {
    return (
        <div class='skill'>
            <div class='skill-text'>
                <a class='skill-name'>{props.name}</a>
                <a class='skill-width'>{props.level}%</a>
            </div>
            <span class='skill-bar'>
                <span class='skill-level' style={{width:props.level+'%'}}></span>
            </span>
        </div>
    )
}