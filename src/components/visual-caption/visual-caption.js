// @ts-nocheck
import React from 'react'

import VisualStyle from '../../assets/styled-components/visualStyle';

const Visual = (props) => {
    return (
        <VisualStyle src={props.src_img} top={props.top} right={props.right} left={props.left}  zIndex={props.zIndex} width={props.width} alt="First"/>
    )
}

export default Visual;
