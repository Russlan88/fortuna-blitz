// @ts-nocheck
import React from 'react'

import VisualStyle from '../../assets/styled-components/visualStyle';

const Visual = (props) => {
    const visualAnim = {
        hidden: {
                opacity: props.initial, 
                top: props.topInitial, 
                left: props.leftInitial,
                marginTop: props.marginTop
                },
        show: {
                opacity: props.opacity, 
                top: props.topFinal, 
                left: props.leftFinal, 
                marginTop: props.marginTopFinal,
                transition: {
                    duration: props.duration, 
                    ease: "easeOut"
                    }
                },
    }

    return (
        <VisualStyle variants={visualAnim} initial="hidden" animate="show" src={props.src_img} top={props.top} right={props.right} left={props.left}  zIndex={props.zIndex} width={props.width} alt="First"/>
    )
}

export default Visual;
