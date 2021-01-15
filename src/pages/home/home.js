import styled from 'styled-components';

 const HomeStyled = styled.div`
    display: flex;
    ${'' /* display: grid;
    grid-template-columns: 130px 780px 1fr; */}

    ${'' /* @media (max-width: 980px) {
        display: flex;
        flex-direction: column;
    } */}

    .first-column {
        position: relative;
        display: none;

        @media(max-width: 640px){
        }

        .copyrigth, .contact-cta {
            position: absolute;
            left: 25px;
            width: 200px;
            transform: rotate(-90deg);
            transform-origin: 0;
            
            font-family: "Work Sans";
            letter-spacing: 2px;
            
            font-size: 11px;
        }

        .copyrigth {
            bottom: 20%;
            color: rgb(158, 158, 158);
            font-weight: 500;
        }

        .contact-cta {
            top: 50%;
            color: black;
            font-weight: 600;
            font-size: 17px;
            font-family: Cormorant;
            font-style: italic;
            text-decoration: none;

            img {
                transform: rotate(-90deg);
                margin-right: 5px;
            }
        }
    }

    .second-column {
        ${'' /* align-content: center;
        display: grid;
        grid-row-gap: 40px; */}

        @media(max-width: 980px) {
            ${'' /* padding-left: 50px;
            z-index: 8; */}
        }
    }

    .main-title {
        font-family: Cormorant;
        color: hsl(145deg 81% 21%);
        letter-spacing: -3px;
        font-weight: bold;
        ${'' /* font-size: 5.7rem; */}
        background: rgba(255,255,255, 0.6);
        font-size: 3rem;
        margin: 25px 15px 410px 15px;

        @media(min-width: 425px) {
            margin: 25px 15px 470px 15px;
        }
        
        @media(min-width: 547px) {
            font-size: 3.5rem;
            letter-spacing: 0;
        }
       
        @media(min-width: 725px) {
            margin-bottom: 50px;
        }
    }

    .main-paragraph {
        font-family: Cormorant;
        font-style: italic;
        text-align: left;
        font-weight: 500;
        ${'' /* line-height: 38px;
        letter-spacing: 0px;
        font-size: 17px; */}

        @media(min-width:725px) {
            width: 270px;
        }

        @media(max-width: 980px) {
            background: rgba(255,255,255,0.6);
            margin: 15px;
            line-height: 30px;
        }
    }

    .image-figure {
        height: 100vh;
        overflow: hidden;

        img {
            width: 100%;
        }

        @media (max-width: 980px) {
            position: absolute;
            width: 50%;
            right: 0px;
        }
    }
`

export default HomeStyled;

