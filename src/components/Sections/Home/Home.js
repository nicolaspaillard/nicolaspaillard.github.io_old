import * as React from 'react'
import './Home.css'
import Typed from 'react-typed';

export default function Home() {
    return (
        <section id='home'>
            <div class='container'></div>
            <div id="me">
                <h1>Nicolas PAILLARD</h1><br/>
                <h4><i>Développeur&nbsp;<Typed className='typed-strings' strings={['C#','.NET','Backend','Full Stack','Java','React']} typeSpeed={80} backDelay={1000} backSpeed={50} loop shuffle /></i></h4>
            </div>
        </section>
    )
}