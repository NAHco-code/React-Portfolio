import React from 'react';
import PortfolioCard from '../components/PortfolioCard';
import projects from '../data/projects.json';
import fade3 from '../images/black-white-fade-WHITE.PNG';

export default function Portfolio () {
    return (
        <div>
            <div class="portfolio-page padding" id='portfolio-page'>
                <div class="row">
                    <h2>portfolio.</h2>
                    <p>I enjoy an innovative and
                    judicious approach when solving problems. Developed design skills enable
                    craft and optimization of elegant, user-focused websites
                    and applications.
                    </p>
                    <p>Backgrounds in fine art, social work and
                    hospitality industries, provide in-depth knowledge
                    of dynamic team collaboration, demanding clients,
                    sensitive information & business objectives, as well as
                    sales, marketing and design.
                    </p>
                </div>

                <div className="row small-up-2 medium-up-3 large-up-4 portfolio-sec">
                    {projects.map( project => ( <PortfolioCard {...project}/>)) }
                </div>
            </div>
            <img alt='' className='fade3' src={fade3}/>
        </div>
    );
}
//map through projects and return portfoliocard for each project
