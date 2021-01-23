import React from 'react';
import PreloaderStyle from '../../assets/styled-components/preloaderStyle';

const Preloader = () => {

    return (
        <PreloaderStyle>
            <svg className="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
                <circle cx="170" cy="170" r="160" stroke="rgb(149, 7, 64)"/>
                <circle cx="170" cy="170" r="135" stroke="rgb(57, 58, 59)"/>
                <circle cx="170" cy="170" r="110" stroke="rgb(149, 7, 64)"/>
                <circle cx="170" cy="170" r="85" stroke="rgb(57, 58, 59)"/>
            </svg>
        </PreloaderStyle>
    )
}

export default Preloader;