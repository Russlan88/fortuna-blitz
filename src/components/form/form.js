import styled from 'styled-components';
import { blackColor } from '../../assets/css/variables';

const ContactForm = styled.form`
    display: flex;
    flex-direction: column;

    input, textarea {
        position: relative;
        display: inline-block;
        width: 100%;
        min-width: 100%;
        max-width: 100%;
        vertical-align: top;
        margin: 0 0 35px;
        padding: 5px 0;
        font-family: Cormorant, serif;
        font-size: 17px;
        line-height: 20px;
        font-weight: 500;
        font-style: italic;
        color: ${blackColor};
        background-color: transparent;
        border-radius: 0;
        outline: 0;
        cursor: pointer;
        border: none;
        border-bottom: 1px solid ${blackColor};
        
        &::placeholder { 
            color: #9e9e9e;
        }

        &[type="tel"] {
            border: none;
        }

        &:-webkit-autofill,
        &:-webkit-autofill:hover, 
        &:-webkit-autofill:focus, 
        &:-webkit-autofill:active  {
            -webkit-box-shadow: 0 0 0 30px white inset !important;
        }

    }
    
    label {
        font-family: Cormorant, serif;
        font-size: 17px;
        line-height: 20px;
        font-weight: 500;
        font-style: italic;
        color: #9e9e9e; 
    }

textarea {
    min-height: 65px;
    overflow: auto;
}
`;

export default ContactForm;