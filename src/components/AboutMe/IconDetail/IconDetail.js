import * as React from 'react'
import Icon from '../Icon/Icon'
import './IconDetail.css'

export default function IconDetail(props) {
    return (
        <a class='icon-detail' href={props.href}>
            <Icon icon={props.icon}/>
            <a>{props.text}</a>
        </a>
    )
}