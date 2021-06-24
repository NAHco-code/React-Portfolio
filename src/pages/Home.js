import React from 'react';
import Header from '../components/Header';
import PreviewCard from '../components/PreviewCard';
export default function Home () {
    return (
        <div>
            <Header />
            <div className=''>SOME OF MY LATEST WORK</div>
            <div>
                <ul>
                    <PreviewCard />
                    <PreviewCard />
                    <PreviewCard />
                </ul>
            </div>
        </div>
    );
}
