import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Filtertype from './Filtertype'
import PriceDiscount from './PriceDiscount'

const Filters = ({ prod, handleManufacturer }) => {
    return (
        <Box pr="15px" bgColor="#ffffff" borderRadius={"10px"}>
            <Text textAlign="left" fontSize="20px" p={"10px 20px"}>Filters</Text>
            <hr />
            {/* <Filtertype name={'Brands'} prod={prod} /> */}
            <Filtertype name={'Manufacturers'} prod={prod} handleManufacturer={handleManufacturer} />
            {/* <Filtertype name={'Categories'} prod={prod} /> */}
            <PriceDiscount name={"Price"} prod={prod} />
            <PriceDiscount name={"Discount"} prod={prod} />

        </Box>
    )
}

export default Filters