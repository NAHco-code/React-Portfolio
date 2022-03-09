import React from 'react';
import './index.css';
import heroMirror from '../../images/header-img-mirror.JPG'

export default function Header () {
    return (
        <div>
            <div className='callout primary header-img'></div>
            <img className='header-img-mirror' alt='' src={heroMirror}/>
        </div>
    );
}
