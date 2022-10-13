import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Filtertype from './Filtertype'
import PriceDiscount from './PriceDiscount'

const Filters = () => {
    return (
        <Box pr="15px" bgColor="#ffffff" borderRadius={"10px"}>
            <Text textAlign="left" fontSize="20px" p={"10px 20px"}>Filters</Text>
            <hr />
            <Filtertype name={'Brands'} />
            <Filtertype name={'Manufacturers'} />
            <Filtertype name={'Categories'} />
            <PriceDiscount name={"Price"} />
            <PriceDiscount name={"Discount"} />

        </Box>
    )
}

export default Filters