import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react'
import './Icon.css'

export default function Icon(props) {
    return (
        <a class='icon-container' href={props.href}><FontAwesomeIcon icon={props.icon} /></a>
    );
}