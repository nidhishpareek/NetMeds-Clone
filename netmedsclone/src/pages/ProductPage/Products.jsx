import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import AllProduct from './AllProduct'
import CategoriesComp from './Categories'
import CategoryImage from './CategoryImage'
import Filters from './Filters'

function Products() {
    return (
        <Box bg={"#f3f3f3"} pt="30px" pb="30px">
            < Box w="97%" margin="20px auto" display="flex" gap="10px">
                <Box w="18%" display={"flex"} flexDir="column" gap="40px" >
                    <CategoriesComp />
                    <Filters />
                </Box>
                <Box w="80%" ml="10px" mr="10px">
                    <CategoryImage />
                    <Box display="flex" justifyContent="space-between" alignItems={"center"} margin={"20px 0"}>
                        <Box fontSize={'14px'}>Showing <strong>20</strong> of <strong>134</strong> items</Box>
                        <Box display={"flex"} flexDir="row" alignItems={"center"} gap="5px">
                            <Text fontSize={"14px"}>Sort by:</Text>
                            <Button _hover={{ color: '#24aeb1', border: ' 1px solid #24aeb1' }} size={"xs"} border={"1px solid transparent"} bg="white" fontSize={"12px"} padding={"5px 20px 4px"}>Popularity</Button>
                            <Button _hover={{ color: '#24aeb1', border: ' 1px solid #24aeb1' }} size={"xs"} border={"1px solid transparent"} bg="white" fontSize={"12px"} padding={"5px 20px 4px"}>High to Low</Button>
                            <Button _hover={{ color: '#24aeb1', border: ' 1px solid #24aeb1' }} size={"xs"} border={"1px solid transparent"} bg="white" fontSize={"12px"} padding={"5px 20px 4px"}>Low to High</Button>
                            <Button _hover={{ color: '#24aeb1', border: ' 1px solid #24aeb1' }} size={"xs"} border={"1px solid transparent"} bg="white" fontSize={"12px"} padding={"5px 20px 4px"}>Discount</Button>
                        </Box>
                    </Box>
                    <AllProduct />
                </Box>
            </Box >
        </Box>
    )
}

export default Products