import * as React from 'react'
import './TimeLine.css'

export default function TimeLine(props) {
    var events = props.events;
    const listItems = events.map((event) =>
        <li class='event'><h3>{event.title}</h3><p>{event.content}</p></li>
    );
    return (
         <ul class='timeline'>
             {listItems}
         </ul>   
      );
  }