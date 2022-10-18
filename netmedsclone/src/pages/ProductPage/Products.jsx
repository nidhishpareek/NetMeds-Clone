import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Data } from '../Context/DataContext'
import AllProduct from './AllProduct'
import CategoriesComp from './Categories'
import CategoryImage from './CategoryImage'
import Filters from './Filters'
import ProductSortingStrip from './ProductSortingStrip'



function Products() {
    const { handleReset } = useContext(Data);

    return (
        <Box bg={"#f3f3f3"} pt="30px" pb="30px">
            <Breadcrumb pl="30px" spacing='8px' >
                <BreadcrumbItem>
                    <BreadcrumbLink ><Link to={'/'}>Home</Link></BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink ><Link to='/products'> Products</Link></BreadcrumbLink>
                </BreadcrumbItem>

            </Breadcrumb>
            < Box w="97%" margin="20px auto" display="flex" gap="10px">
                <Box w={{ base: "0%", lg: "18%" }} display={"flex"} flexDir="column" gap="40px" >
                    <CategoriesComp />
                    <Button w="100%" bgColor={"#24aeb1"} color="white" textTransform={"uppercase"} _hover={{ bgColor: "#24aeb1", color: "white" }} onClick={() => handleReset(1, "", "", "", [0, 45000])} display={{base:'none',lg:'block'}}>Reset Filter</Button>
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