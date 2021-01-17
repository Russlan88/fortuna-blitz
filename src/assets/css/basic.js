import styled, { createGlobalStyle } from 'styled-components';
import {whiteColor, redColor, lightGray, darkBlue} from '../css/variables';

export const GloabalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Work+Sans:wght@100,500&display=swap');

    html, body {
        margin: 0;
        padding: 0;

        ul {
            margin: 0;

            li {
                list-style: none;
            }
        }
    }

    ::selection {
        color: ${whiteColor};
        background: ${redColor};
    }

    body::-webkit-scrollbar {
        width: 7px;
    }
    body::-webkit-scrollbar-track {
        background-color: ${lightGray};
    }
    body::-webkit-scrollbar-thumb {
        background-color: ${redColor};
        outline: 1px solid ${redColor};
    }
    
    body{
        font-family: 'Work Sans', sans-serif;
        font-size: 15px;
        font-weight: 400;
    }

`;

export const Container  = styled.div`
        width: 100%;
        max-width: 1170px;
        margin: 0 auto;
`;

export const Button = styled.button`
    position: relative;
    display: inline-block;
    vertical-align: middle;
    width: auto;
    margin: 0;
    font-family: "Work Sans",sans-serif;
    font-size: 11px;
    line-height: 2em;
    text-transform: uppercase;
    letter-spacing: .2em;
    font-weight: 600;
    text-decoration: none;
    border: none;
    border-radius: 0;
    outline: 0;
    -webkit-transition: all,background-color .2s ease-out,border-color .2s ease-out;
    -o-transition: all,background-color .2s ease-out,border-color .2s ease-out;
    transition: all,background-color .2s ease-out,border-color .2s ease-out;
    padding: 15px 36px;
    color: #000;

    &::before {
        content: "";
        position: absolute;
        display: inline-block;
        width: 34px;
        height: 2px;
        right: -26px;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        font-size: 11px;
        line-height: 1;
        color: #000;
        -webkit-transition: all .2s ease-in-out;
        -o-transition: all .2s ease-in-out;
        transition: all .2s ease-in-out;

        &:hover {
            transform: translateY(-50%) scaleX(1.3);
        }
    }
   
    &::after {
        content: '\\276F';
        position: absolute;
        display: inline-block;
        color: #000;
        top: 33%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        right: -57px;
        width: 34px;
        height: 2px;
        -webkit-transform-origin: left;
        -ms-transform-origin: left;
        transform-origin: left;
        will-change: transform;
        -webkit-transition: all .2s ease-in-out;
        -o-transition: all .2s ease-in-out;
        transition: all .2s ease-in-out;
    }
        
    &.primary{
        margin: 40px 0 35px 15px;
        background: ${lightGray};
        ${'' /* max-width: 150px; */}
        display: inline-block;
        }
    }

    &.secondary {
        background: ${darkBlue};
        color: ${lightGray};

        &--modify{
            margin-top: 50px;
        }

        &::before {
            background: linear-gradient(90deg,#fff 50%,#000 50%);
        }
    }

`;



