// @ts-nocheck
import styled from 'styled-components';

// Framer motion
import { motion } from 'framer-motion';

const VisualStyle = styled(motion.img)`
    width: ${props => props.width};
    position: absolute;
    top: ${props => props.top};
    right: ${props => props.right};
    left: ${props => props.left};
    z-index: ${props => props.zIndex};
    filter: grayscale(100%);
    box-shadow: 10px 4px 10px #00000033;
    transition: all 0.5s ease-out;

    @media(min-width: 547px) {
        transform: scale(1.1);
        }

        &:nth-child(1){
            width: 220px;
            top: 50px;
            right: 10px;

            @media(min-width:425px) {
                width: 270px;
                top: 50px;
                right: 20px;
            }
        }

        &:nth-child(2){
            width: 160px;
            top: 80px;
            right: 135px;

            @media(min-width:425px) {
                width: 180px;
                top: 90px;
                right: 195px;
            }
        }

        &:nth-child(3){
            width: 230px;
            top: 220px;
            right: 50px;

            @media(min-width:425px) {
                width: 250px;
                top: 260px;
                right: 90px;
            }
        }

    &:hover {
        filter: grayscale(0%);
    }
`

export default VisualStyle;