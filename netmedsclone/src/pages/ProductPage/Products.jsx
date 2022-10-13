import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import AllProduct from './AllProduct'
import CategoriesComp from './Categories'
import CategoryImage from './CategoryImage'
import Filters from './Filters'
import ProductSortingStrip from './ProductSortingStrip'
import { useContext } from 'react'
import { Data } from '../Context/DataContext'



function Products() {
    const { page, sort, Categories, subCategory, order, getProduct, prod } = useContext(Data);
    // const[ selectCat,setSelectCat]=useState("");

    const [priceSort, setPriceSort] = useState({ min: 0, max: 0 })

    // console.log(cart)
    const maxMin = () => {
        let maxVal = 0;
        prod.map(el => {
            return maxVal = Math.max(maxVal, el.actual_price);
        })
        console.log(maxVal, "max")
    }
    console.log(priceSort, "sortedPrice")
    maxMin()

    // const api = 'https://netmedsdata.onrender.com/products';

    // useEffect(() => {
    //     getProduct()
    // }, [page, sort, order, subCategory])


    return (
        <Box bg={"#f3f3f3"} pt="30px" pb="30px">
            < Box w="97%" margin="20px auto" display="flex" gap="10px">
                <Box w="18%" display={"flex"} flexDir="column" gap="40px" >
                    <CategoriesComp />
                    <Filters />
                </Box>
                <Box w="80%" ml="10px" mr="10px">
                    <CategoryImage />
                    <ProductSortingStrip />
                    <AllProduct />
                </Box>
            </Box >
        </Box>
    )
}

export default Products