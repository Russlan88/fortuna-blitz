import styled from 'styled-components';

 const HomeStyled = styled.div`
    display: flex;

    @media(min-width: 760px){
        display: grid;
        grid-template-columns:780px 1fr; 
    }

    @media(min-width: 1045px){
        display: grid;
        grid-template-columns:650px 1fr;
        justify-content: center;
        margin: 0 auto;
        ${'' /* width: 1200px; */}
        width: 100%;
    }

    @media(min-width: 1200px){
        display: grid;
        grid-template-columns:650px 1fr;
        justify-content: center;
        margin: 0 auto;
        width: 1200px;
    }

    .homeList {
	list-style: inside;

	@media (min-width: 725px) {
		width: 100%;
	}

	li {
		font-family: Cormorant;
		font-size: 22px;
		line-height: 38px;
		font-style: italic;

		&::marker {
			unicode-bidi: isolate;
			font-variant-numeric: tabular-nums;
			text-transform: none;
			text-indent: 0px !important;
			text-align: start !important;
			text-align-last: start !important;
			list-style: initial;
		}
	}
}

     

    .first-column {
        position: relative;
        display: none;

        @media(min-width: 760px){
            display: block;
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
        padding: 0 15px;
        fontFamily: "Work Sans",
        lineHeight: "1.733em",
        textAlign: "left",
        fontWeight: 300,
        fontStyle: "normal",
        width: '500px'

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
        margin-bottom: 73vh;
        

        @media(min-width: 425px) {
            margin: 25px 15px 470px 15px;
        }
        
        @media(min-width: 547px) {
            font-size: 3.5rem;
            letter-spacing: 0;
        }
       
        @media(min-width: 725px) {
            margin-bottom: 50px;
            margin: 25px 0px 50px 0px;
        }
    }

    .main-paragraph {
        font-family: Cormorant;
        font-style: italic;
        text-align: left;
        font-weight: 500;
        width: calc(100% - 40px);
        margin: 0 auto;
        background: rgba(255,255,255,0.6);
        margin: 15px 0;
        line-height: 30px;
        font-size: 20px;
        

        @media(min-width:725px) {
            width: 39vw;
        }
        @media(min-width:1200px) {
            width: auto;
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

