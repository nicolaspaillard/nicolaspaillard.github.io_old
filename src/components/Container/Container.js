import * as React from 'react'
import './Container.css'

export default function Container(props) {
  if(props.flex){
    var classes = 'container-flex'+ (props.class ? ' '+props.class : '');
  }else if(props.split){
    var classes = 'container-split'+ (props.class ? ' '+props.class : '');
  }  
  return (
    <div class={classes} style={{width:props.width+'%'}}>
        {props.children}
    </div>
  );
}