import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Icon.css'

export default function Icon(props) {
    var icon;
    if(props.text != null){
        icon =  <a class='icon-box' href={props.href}>
                    <a class='icon-background'><FontAwesomeIcon icon={props.icon} /></a>                    
                    <a class='icon-text'>&nbsp;&nbsp;&nbsp;&nbsp;{props.text}</a>
                </a>
    }else{
        icon =  <a class='icon-background' href={props.href}><FontAwesomeIcon icon={props.icon} /></a>
    }
    return (
        icon
    );
}