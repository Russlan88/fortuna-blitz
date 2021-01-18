import styled from 'styled-components';

import {darkBlue} from '../../assets/css/variables';


export const ProductStyled = styled.ul`
    padding-left: 0px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    ${'' /* grid-gap: 1rem; */}
`;

export const ProductFigureStyled = styled.img`
    height: 100%;
    transform: scale(1.5);
    transition: all .9s;
    width: 210px;
    object-fit: contain;
    transform: translateX(-50%);
    margin-left: 50%;
`;

export const ProductDescriptionStyled = styled.div`
    position: absolute;
    bottom: -185px;
    width: 100%;
    background: #24365f;
    color: #fff;
    text-align: center;
    padding: 30px;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    grid-row-gap: 5px;
    transition: all .9s;
    transition: all 340ms cubic-bezier(0.875, 0.030, 1.000, 1.000); /* custom */
    transition-timing-function: cubic-bezier(0.875, 0.030, 1.000, 1.000); /* custom */
    

    .single-item__title, .single-item__description {
        margin-bottom: 0px;
    }
`;

export const ProductItemStyled = styled.li`
    position: relative;
    height: 365px;
    overflow: hidden;
    cursor: pointer;
    border: 1px solid #0000000f;
    background: #fff;
    margin: 0 15px;

    &:hover {
        ${ProductFigureStyled}{
            transform: scale(1.1) translateX(-50%);
        }
        ${ProductDescriptionStyled}{
            bottom: -1px;
        }
    }
`;

export const ContainerWrapper = styled.div`
    display: grid;
    grid-template-columns: 720px 1fr;
    margin-bottom: 80px;

    @media (max-width: 1170px) {
        display: flex;
        grid-template-columns: 720px 1fr;
        margin-bottom: 80px;
        flex-direction: column;
        padding: 0 40px;
    }

`;

export const RightContainer = styled.div`
    margin: 10px 0;
    line-height: 1.733em;
    border-left: 2px solid ${darkBlue};
    padding-left: 30px;

    p {
        margin-top: 0px;
    }
`

