import styled from 'styled-components';

const VisualContainerStyle = styled.div`

    position: relative;
    height: 450px;
    top: 125px;

    @media(min-width: 369px) {
        top: 85px;
        right: 30px;
    }

    @media(min-width: 425px) {
        top: 115px;
        right: 20px;
    }

    @media(min-width: 547px) {
        top: 130px;
        right: 60px;
    }
    
    @media(min-width: 725px) {
        transform: scale(0.9);
        top: 110px;
        right: 4vw;
    }

    @media(min-width: 1045px) {
        right: 110px;
        transform: scale(1.2);
    }
    
`;

export default VisualContainerStyle;