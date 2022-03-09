import './style.css';
import React from 'react';
import Header from '../../components/Header';
import covidPreview from '../../images/covid-woke-landing.png';
import directoryPreview from '../../images/employee-directory.PNG';
import reviewPreview from '../../images/selected+associated-reviews.PNG';
import fade from '../../images/black-white-fade-WHITE.PNG';

export default function Home () {
    return (
        <div>
            <div className="home-page" id='home-page'>
                <Header />
                <div className='overlay'>
                    <div className="row preview-sec-header-container padding">
                        <div className="line"></div>
                        <h4 className="row preview-sec-title"> SOME OF MY LATEST WORK</h4>
                        <div className="line"></div>
                    </div>
                    <div className="row small-up-2 medium-up-3 large-up-4 padding outline react-spacing">
                        <div className="column preview-container">
                            <a href='https://github.com/mkotte/COVIDwoke.git' target='_blank' rel='noreferrer'><div title='View Code' className="screen thumbnail-title"><span>COVID WOKE</span></div></a>
                            <a href='https://mkotte.github.io/COVIDwoke/' target='_blank' rel='noreferrer'><img alt='' title='View Live' className="feat-app thumbnail" src={covidPreview}/></a>
                        </div>
                        <div className="column preview-container">
                                <a href='https://github.com/NAHco-code/Employee-Directory.git' target='_blank' rel='noreferrer'><div title='View Code' className="screen thumbnail-title"><span>EMPLOYEE DIRECTORY</span></div></a>
                                <a href='https://nahco-code.github.io/Employee-Directory/' target='_blank' rel='noreferrer'><img alt='' title='View Live' className="feat-app thumbnail" src={directoryPreview}/></a>
                        </div>
                        <div className="column preview-container">
                                <a href='https://github.com/NAHco-code/Project-02.git' target='_blank' rel='noreferrer'><div title='View Code' className="screen thumbnail-title"><span>THE LOO REVIEW</span></div></a>
                                <a href='https://the-loo-review.herokuapp.com/' target='_blank' rel='noreferrer'><img alt='' title='View Live' className="feat-app thumbnail" src={reviewPreview}/></a>
                        </div>
                    </div>
                </div>
                <img alt='' className='fade' src={fade}></img>
            </div>
        </div>
    );
}
