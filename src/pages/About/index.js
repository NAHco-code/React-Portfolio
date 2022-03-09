import './style.css';
import React from 'react';
import about1 from '../../images/wedding3.jpg';
import about2 from '../../images/content-img-women-family.jpg';
import about3 from '../../images/portfolio2resized.jpg';
import about4 from '../../images/portfolio-art-soul-dust.jpg';
import about5 from '../../images/portfolio-art-devour.jpg';
import about6 from '../../images/d-n-me-vector.jpg';
import fade2 from '../../images/white-black-fade.PNG';

export default function About () {
    return (
        <div>
            <div className="about-page" id='about-page'>
                <div className="row padding">
                    <h2>about.</h2>
                    <h4>I'm a full-stack web developer with a passion for UI/UX design, born and raised in Columbus, Ohio.</h4>
                    <p>
                        When I'm not coding, you'll find me playing music, painting, gardening or teaching my dog new tricks.
                    </p>
                </div>

                <div className="row small-up-3 medium-up-7 large-up-12">
                    <div className="column">
                        <img alt='' className="thumbnail feat-about" src={about1}/>
                    </div>
                    <div className="column">
                        <img alt='' className="thumbnail feat-about" src={about2}/>
                    </div>
                    <div className="column">
                        <img alt='' className="thumbnail feat-about" src={about3}/>
                    </div>
                    <div className="column">
                        <img alt='' className="thumbnail feat-about" src={about4}/>
                    </div>
                    <div className="column">
                        <img alt='' className="thumbnail feat-about" src={about5}/>
                    </div>
                    <div className="column">
                        <img alt='' className="thumbnail  feat-about dani-and-i" src={about6}/>
                    </div>
                </div>
            </div>
            <img alt='' className='overlay fade fade2' src={fade2}/>
        </div>
    );
}
