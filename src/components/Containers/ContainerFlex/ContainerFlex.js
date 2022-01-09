import * as React from 'react'
import './ContainerFlex.css'

export default function ContainerFlex(props) {
    var classes = 'container-flex'+ (props.class != null ? ' '+props.class : '')
  return (
    <div class={classes} style={{width:props.width+'%'}}>
        {props.children}
    </div>
  );
}