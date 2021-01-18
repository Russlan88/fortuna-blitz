import styled from 'styled-components';

const VisualContainerStyle = styled.div`

    position: relative;
    height: 450px;
    top: 125px;

    @media(min-width: 547px) {
        top: 140px;
        right: 60px;
    }
    
    @media(min-width: 725px) {
        transform: scale(0.9);
        top: 110px;
        right: 13vw;
    }

    @media(min-width: 1045px) {
        right: 50px;
        transform: scale(1.2);
    }
    
`;

export default VisualContainerStyle;