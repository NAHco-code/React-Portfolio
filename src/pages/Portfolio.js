import React from 'react';
import PortfolioCard from '../components/PortfolioCard';
import projects from '../data/projects.json';

export default function Portfolio () {
    return (
        <div className='black-background'>
            <h1>Portfolio.</h1>
            <div className='portfolio-header'>Some ground to stand on.</div>

            <div className="row small-up-2 medium-up-3 large-up-4 portfolio-sec">
                {projects.map( project => ( <PortfolioCard {...project}/>)) }
            </div>
        </div>
    );
}
//map through projects and return portfoliocard for each project
