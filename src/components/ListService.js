import React from 'react';

import './ListService.css';

function ListService({
    lightBg,
    topLine, 
    lightText,
    lightTextDesc, 
    headline, 
    description, 
    img, 
    alt, 
    imgStart
}) {
    return (
        <>
            <div className={lightBg ? 'list__body-section' : 'list__body-section darkBg'}>
                <div className="container">
                    <div className="row list__body-row"
                        style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'now'}}>
                        <div className="col">
                            <div className="list__body-text-wrapper">
                                <div className="top-line">{topLine}</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                                <p className={lightTextDesc ? 'list__body-subtitle' : 'list__body-subtitle dark'}>{description}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="list__body-img-wrapper">
                                <img src={img} alt={alt} className="list__body-img"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListService;
