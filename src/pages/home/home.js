import styled from 'styled-components';

 const HomeStyled = styled.div`
    display: grid;
    grid-template-columns: 130px 780px 1fr;

    @media (max-width: 980px) {
        display: flex;
        flex-direction: column;
    }

    .first-column {
        position: relative;

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
        align-content: center;
        display: grid;
        grid-row-gap: 40px;

        @media(max-width: 980px) {
            padding-left: 50px;
            z-index: 8;
        }
    }

    .main-title {
        font-family: Cormorant;
        color: rgb(242, 56, 1);
        letter-spacing: -3px;
        font-weight: bold;
        font-size: 100px;
        margin-bottom: 0;

        @media(max-width: 980px) {
            background: rgba(255,255,255, 0.6);
            padding: 15px 0;
            margin: 70px 15px 0px 0px;
        }
    }

    .main-paragraph {
        font-family: Cormorant;
        font-style: italic;
        text-align: left;
        line-height: 32px;
        letter-spacing: 0px;
        font-weight: 500;
        font-size: 24px;

        @media(max-width: 980px) {
            background: rgba(255,255,255,0.6);
            margin: 0 15px 0 0;
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

