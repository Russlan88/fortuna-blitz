import { createGlobalStyle } from 'styled-components';

export const GloabalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Work+Sans:wght@100,500&display=swap');

    body::-webkit-scrollbar {
        width: 7px;
    }
    body::-webkit-scrollbar-track {
        background-color: #e1e1e1;
    }
    body::-webkit-scrollbar-thumb {
        background-color: #f23801;
        outline: 1px solid #f23801;
    }
    
    body{
        font-family: 'Work Sans', sans-serif;
        font-size: 15px;
        line-height: 1.733em;
        font-weight: 400;
    }
    .container {
        width: 100%;
        max-width: 1170px;
        margin: 0 auto;
    }
`;
