import React from 'react';
import AboutCard from '../components/AboutCard';

export default function About () {
    return (
        <div>
            <h1>About.</h1>
            <div className=''>Witty blurb.</div>

            <div>
                <ul>
                    <AboutCard />
                    <AboutCard />
                    <AboutCard />
                </ul>
            </div>
        </div>
    );
}
