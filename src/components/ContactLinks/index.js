import React from 'react';
import './index.css';
import instagram from '../../images/instagram-line.png';
import twitter from '../../images/twitter-color.png';
import linkedin from '../../images/linkedin-gradient-break.png';
import github from '../../images/github-purple.png';

export default function ContactLinks () {
    return (
        <div>
            <ul className="menu follow-menu row small-up-2 medium-up-2 large-up-2 ">
                <li className='column'>
                    <a href="https://www.instagram.com/okwonderkat/" target='_blank' rel='noreferrer'>
                        <img className='follow-icon' alt='' src={instagram}/>
                    </a>
                </li>
                <li className='column'>
                    <a href='https://twitter.com/NAHco_code/' target='_blank' rel='noreferrer' >
                        <img className='follow-icon' alt='' src={twitter}/>
                    </a>
                </li>
                <li className='column'>
                    <a href='https://www.linkedin.com/in/kwilkinsonxx/' target='_blank' rel='noreferrer'>
                        <img className='follow-icon' alt='' src={linkedin}/>
                    </a>
                </li>
                <li className='column'>
                    <a href='https://github.com/NAHco-code/' target='_blank' rel='noreferrer'>
                    <img className='follow-icon' alt='' src={github}/>
                    </a>
                </li>
            </ul>
        </div>
    );
}
