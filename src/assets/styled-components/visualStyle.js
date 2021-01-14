// @ts-nocheck
import styled from 'styled-components';

const VisualStyle = styled.img`
    width: ${props => props.width};
    position: absolute;
    top: ${props => props.top};
    right: ${props => props.right};
    left: ${props => props.left};
    z-index: ${props => props.zIndex};
    filter: grayscale(100%);
    box-shadow: 10px 4px 10px #00000033;
    transition: all 0.5s ease-out;

    &:hover {
        filter: grayscale(0%);
    }
`

export default VisualStyle;