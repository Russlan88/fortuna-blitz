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

    .container {
        width: 100%;
        max-width: 1170px;
        margin: 0 auto;
    }
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
    max-width: 300px;
    cursor: pointer;

    }
`;



