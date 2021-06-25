import React from 'react';

export default function PortfolioCard ({gitURL, liveURL, title, id}) {
    return (

        <div className="column long-disp">
            <a href={gitURL} target='_blank' rel='noreferrer'><div title=' View Code ' className="thumbnail first-feat" id={id+'1'}><div className='port-screen'></div></div></a>
            <h5>{title}</h5>
            <a href={liveURL} target='_blank' rel='noreferrer'><div title=' View Live ' className="thumbnail sec-feat" id={id+'2'}><div className='port-screen2'></div></div></a>
        </div>
    );
}
