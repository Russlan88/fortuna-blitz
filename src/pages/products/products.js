import styled from 'styled-components';

export const ProductStyled = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 40px;
`;

export const ProductFigureStyled = styled.img`
    width: 100%;
    transform: scale(1.5);
    transition: all .9s;
`;

export const ProductDescriptionStyled = styled.div`
    position: absolute;
    bottom: -160px;
    width: calc(100% - 60px);
    background: #fff;
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

    &:nth-child(even) {
        margin-top: 10%;
    }

    &:hover {
        ${ProductFigureStyled}{
            transform: scale(1.1);
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
`;

export const RightContainer = styled.div`
    margin: 10px 0;
    line-height: 1.733em;
    border-left: 2px solid #F23801;
    padding-left: 30px;

    p {
        margin-top: 0px;
    }
`

