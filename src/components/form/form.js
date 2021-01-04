import styled from 'styled-components';
import { blackColor } from '../../assets/css/variables';

const ContactForm = styled.form`
    display: flex;
    flex-direction: column;

    input {
        position: relative;
        display: inline-block;
        width: 100%;
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
}
`;

export default ContactForm;