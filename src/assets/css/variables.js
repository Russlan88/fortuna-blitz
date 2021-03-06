
// Variables

import styled from 'styled-components';

export const whiteColor = '#fff';
export const lightGray = '#f4f4f4';
export const blackColor = '#000';
export const darkBlue = '#24365f';
export const redColor = 'hsl(145deg 81% 21%)';

export const SmallTitle = styled.h2`
    font-family: 'Work Sans', sans-serif;
    font-size: 11px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #9e9e9e;
    margin: 0 0 12px;
`;

export const DoubleColorTitle = styled.h4`
    margin: 25px 0;
    -ms-word-wrap: break-word;
    word-wrap: break-word;
    font-family: Cormorant,serif;
    font-weight: 700;
    letter-spacing: 0;
    color: ${blackColor};
    font-size: 45px;
    line-height: 1.2em;

    span {
        color: #f23801;
    }
`;

export const MainPararaph = styled.p`
    font-family: 'Cormorant', serif;
    font-size: 24px;
    font-weight: 500;
    font-style: italic;
    line-height: 32px;
    margin-bottom: 40px;
`