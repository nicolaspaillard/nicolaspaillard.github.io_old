import * as React from 'react'
import './SkillBar.css'

export default function SkillBar(props) {
    var className = 'skill-level ';
    className += 'w'+props.width;
    return (
        <div class='skill'>
            <div class='skill-text'>
                <a class='skill-name'>{props.name}</a>
                <a class='skill-width'>{props.width}%</a>
            </div>
            <span class='skill-bar'>
                <span class={className}></span>
            </span>
        </div>
    )
}