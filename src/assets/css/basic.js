import styled, { createGlobalStyle } from 'styled-components';
import {whiteColor, redColor, lightGray} from '../css/variables';

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
    padding: 20px 30px;
    border: 1px solid transparent;
    transition: all,background-color .2s ease-out,border-color .2s ease-out;
    font-family: "Work Sans",sans-serif;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: .2em;
    font-weight: 600;
    text-decoration: none;
    position: relative;
    cursor: pointer;

    &::before {
        content: "";
        position: absolute;
        background: linear-gradient(90deg,#000 50%,#000 50%);
        display: inline-block;
        top: 50%;
        transform: translateY(-50%);
        right: -18px;
        width: 54px;
        height: 2px;
        transform-origin: left;
        will-change: transform;
        -webkit-transition: all .2s ease-in-out;
        -o-transition: all .2s ease-in-out;
        transition: all .2s ease-in-out;
    }
   
    &::after {
        content: '\\276F';
        position: absolute;
        display: inline-block;
        right: -23px;
        top: 51%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        font-size: 11px;
        line-height: 1;
        color: #000;
        -webkit-transition: all .2s ease-in-out;
        -o-transition: all .2s ease-in-out;
        transition: all .2s ease-in-out;
    }
        
    &.primary{
        margin: 40px 0;
        background: ${lightGray};
        max-width: 250px;
        }
    }

    &.secondary {
        background: ${redColor};
        color: ${lightGray};

        &--modify{
            width: 170px;
            margin-top: 50px;
        }

        &::before {
            background: linear-gradient(90deg,#fff 68%,#000 50%);
        }
    }

`;



