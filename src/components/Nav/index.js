// filepath: src/components/Nav/index.js

import React from 'react';
import './index.css';
// import { Link } from 'react-router-dom';
import homeIcon from '../../images/right-arrow-round.png';
import instaIcon from '../../images/insta-white.PNG';
import githubIcon from '../../images/github-white-blk-outline.PNG';
import linkedinIcon from '../../images/linkedin-white.PNG';
import twitterIcon from '../../images/twitter-white.PNG';
import resume from '../resume/kathryn-wilkinson.pdf';

export default function Nav() {
   return (
      <div className="sticky">
         <div className="title-bar nav">
            <div className="title-bar-left nav-sec nav-1">
               <a href="/portfolio-react/#/home">
                  <img alt="" src={homeIcon} className="home-icon" />
               </a>
            </div>
            <div className="title-bar-center nav-sec nav-2">
               <a href="/portfolio-react/#/about" className="nav-links">
                  about
               </a>
               <a href="/portfolio-react/#/portfolio" className="nav-links">
                  portfolio
               </a>
               <a href={resume} download className="nav-links">
                  resume
               </a>
               <a href="/portfolio-react/#/contact" className="nav-links">
                  contact
               </a>
            </div>
            <div className="title-bar-right nav-sec nav-3">
               <a
                  href="https://twitter.com/NAHco_code"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon-links"
               >
                  <img alt="" className="nav-icons" src={twitterIcon} />
               </a>
               <a
                  href="https://www.linkedin.com/in/kwilkinsonxx/"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon-links"
               >
                  <img alt="" className="nav-icons" src={linkedinIcon} />
               </a>
               <a
                  href="https://github.com/NAHco-code"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon-links"
               >
                  <img alt="" className="nav-icons" src={githubIcon} />
               </a>
               <a
                  href="https://www.instagram.com/nahco_code/"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon-links"
               >
                  <img alt="" className="nav-icons" src={instaIcon} />
               </a>
            </div>
         </div>
      </div>
   );
}
