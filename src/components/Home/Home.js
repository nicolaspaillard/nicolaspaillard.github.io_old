import * as React from 'react'
import './Home.css'
import Typed from 'react-typed';

export default function Home() {
    return (
        <section id='home'>
            <h1>Nicolas PAILLARD</h1>
            Développeur&nbsp;
             <Typed
                    strings={[
                        'C#',
                        '.NET',
                        'Backend',
                        'Full Stack']}
                    typeSpeed={80}
                    backDelay={1000}
                    backSpeed={50}
                    loop
                    shuffle
                />
        </section>
    )
}