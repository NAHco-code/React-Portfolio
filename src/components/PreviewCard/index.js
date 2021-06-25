import React from 'react';
import './index.css';

export default function PreviewCard ({ gitURL, liveURL, src, title}) {
    return (
        <div className="column preview-container">
            <a href={gitURL} target='_blank' rel='noreferrer'><div title='View Code' class="screen thumbnail-title"><span>{title}</span></div></a>
            <a href={liveURL} target='_blank' rel='noreferrer'><img alt='' title='View Live' class="feat-app thumbnail" src={src}/></a>
        </div>
    );
}
