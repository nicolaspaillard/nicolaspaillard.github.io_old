import * as React from 'react'
import './Container.css'

export default function Container(props) {
  if(props.flex){
    var classes = 'container-flex'+ (props.class ? ' '+props.class : '');
  }else if(props.split){
    var classes = 'container-split'+ (props.class ? ' '+props.class : '');
    var width = props.width ? props.width : 50;
  }  
  return (
    <div class={classes} style={{width:width+'%'}}>
        {props.children}
    </div>
  );
}