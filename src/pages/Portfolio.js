import React from 'react';
import PortfolioCard from '../components/PortfolioCard';

export default function Portfolio () {
    return (
        <div>
            <h1>Portfolio.</h1>
            <div className=''>Some ground to stand on.</div>

            <div>
                <ul>
                    <PortfolioCard />
                    <PortfolioCard />
                    <PortfolioCard />
                </ul>
            </div>
        </div>
    );
}
