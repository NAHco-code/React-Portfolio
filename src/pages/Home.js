import React from 'react';
import Header from '../components/Header';
import PreviewCard from '../components/PreviewCard';
export default function Home () {
    return (
        <div>
            <h1>Home Page</h1>
            <Header />
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
