import { Box } from '@chakra-ui/react'
import React from 'react'
import AllProduct from './AllProduct'
import CategoriesComp from './Categories'
import CategoryImage from './CategoryImage'
import Filters from './Filters'
import ProductSortingStrip from './ProductSortingStrip'



function Products() {

    return (
        <Box bg={"#f3f3f3"} pt="30px" pb="30px">
            < Box w="97%" margin="20px auto" display="flex" gap="10px">
                <Box w={{ base: "0%", lg: "18%" }} display={"flex"} flexDir="column" gap="40px" >
                    <CategoriesComp />
                    <Filters />
                </Box>
                <Box w={{ base: "100%", lg: "80%" }} m={{ base: "5px 0", lg: "0 10px 0 10px" }}>
                    <CategoryImage />
                    <ProductSortingStrip />
                    <AllProduct />
                </Box>
            </Box >
        </Box>
    )
}

export default Products