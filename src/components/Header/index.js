import React from 'react';
import './index.css';
import portfolioHero from '../../images/portfolio-hero-fade.JPG';
import heroMirror from '../../images/header-img-mirror.JPG'

export default function Header () {
    return (
        <div>
            <img className='header-img' alt='' src={portfolioHero}/>
            <img className='header-img-mirror' alt='' src={heroMirror}/>
        </div>
    );
}
