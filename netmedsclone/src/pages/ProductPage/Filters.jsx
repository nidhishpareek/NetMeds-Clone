import { Box, Button, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Data } from '../Context/DataContext'
import Filtertype from './Filtertype'
import PriceDiscount from './PriceDiscount'

const Filters = () => {
    const { handleReset } = useContext(Data);
    return (
        <Box pr="15px" bgColor="#ffffff" borderRadius={"10px"} pb="20px" display={{ base: "none", lg: "block" }}>
            <Text textAlign="left" fontSize="20px" p={"10px 20px"}>Filters</Text>
            <hr />
            <Filtertype name={'Manufacturers'} />
            <Filtertype name={'Categories'} />
            <PriceDiscount name={"Price"} />
            <Button w="90%" bgColor={"#24aeb1"} ml="20px" mt="10px" color="white" textTransform={"uppercase"} _hover={{ bgColor: "#24aeb1", color: "white" }} onClick={() => handleReset(1, "", "", "", [0, 45000])}>Reset Filter</Button>

        </Box>
    )
}

export default Filters