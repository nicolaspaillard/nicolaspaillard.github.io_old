import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Icon.css'

export default function Icon(props) {
    var icon;
    if(props.text != null){
        if(props.href != null){
            icon =  
                <div class='icon-box link' style={{'cursor' : 'pointer', 'color':'var(--cyan)'}} onClick={event => window.location.href=props.href}>
                    <a class='icon-background'><FontAwesomeIcon icon={props.icon} /></a>                    
                    <a class='icon-text margin-left-1'>{props.text}</a>
                </div>
        }else{
            icon = 
                <div class='icon-box'>
                    <a class='icon-background'><FontAwesomeIcon icon={props.icon} /></a>                    
                    <a class='icon-text margin-left-1'>{props.text}</a>
                </div>
        }
    }else{
        icon =  <a class='icon-background' href={props.href}><FontAwesomeIcon icon={props.icon} /></a>
    }
    return (
        icon
    );
}