import styled from 'styled-components';

 const HomeStyled = styled.div`
    display: grid;
    grid-template-columns: 130px 780px 1fr;

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
            bottom: 10%;
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
    }

    .main-title {
        font-family: Cormorant;
        color: rgb(242, 56, 1);
        letter-spacing: -3px;
        font-weight: bold;
        font-size: 100px;
        margin-bottom: 0;
    }

    .main-paragraph {
        font-family: Cormorant;
        font-style: italic;
        text-align: left;
        line-height: 32px;
        letter-spacing: 0px;
        font-weight: 500;
        font-size: 24px;
    }

    .image-figure {
        height: 100vh;
        overflow: hidden;
    }
`

export default HomeStyled;

