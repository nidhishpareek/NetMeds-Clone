import { Box } from '@chakra-ui/react'
import React from 'react'

const Filtertype = ({ name }) => {
    return (
        <Box fontSize="18px" fontWeight={700} letterSpacing="0.25px" color={"#151b39"} pl="20px">{name}</Box>
    )
}

export default Filtertype