import React from 'react'
// Framer motion
import { motion } from 'framer-motion';

const SuccessMessage = (props) => {
    const visualAnim = {
        hidden: {
                opacity: props.initial
                },
        show: {
                opacity: props.opacity
                },
    }

    return (
        <motion.div variants={visualAnim} initial="hidden" animate="show" className="success">Message submitted succesfuly!</motion.div>
    )
}

export default SuccessMessage
