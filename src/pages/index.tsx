import React from 'react';
import style from "../styles/pages/home.module.scss"

const Index = () => {


    return (
        <div className={`${style.homeWrapper} column-center`}>
            <div className={`${style.shadowBox}`}>
                <h2>
                    SMARTER WAY TO
                    TRAVEL & SAVE $$$
                </h2>
                <p>Get lowest prices, cashback, rebooking hack & more...</p>
                <button className={`${style.ctaButton} btn-secondary`}>
                    <a href={'https://www.ratepunk.com/'}>Download now - It's free</a>
                </button>
            </div>
        </div>
    );
};

export default Index;
