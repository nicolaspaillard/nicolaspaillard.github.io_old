import * as React from 'react'
import './ContainerSplit.css'

export default function ContainerSplit(props) {
  var classes = 'container-split'+ (props.class ? ' '+props.class : '')
  return (
    <div class={classes} style={{width:props.width+'%'}}>
        {props.children}
    </div>
  );
}