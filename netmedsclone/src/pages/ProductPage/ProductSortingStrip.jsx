import { Box, Tab, TabList, Tabs, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Data } from '../Context/DataContext';

const ProductSortingStrip = () => {
    const { setval, total, currItem } = useContext(Data);
    return (
        <Box display="flex" justifyContent="space-between" alignItems={"center"} margin={"20px 0"}>
            <Box fontSize={'14px'}>Showing <strong>{currItem}</strong> of <strong>{currItem === 0 ? 0 : total}</strong> items</Box>
            <Tabs size={"xs"} variant="unstyled" >
                <TabList display={"flex"} alignItems="center" gap="5px">
                    <Text fontSize={"14px"} >Sort by:</Text>
                    <Tab _selected={{ backgroundColor: "white", color: '#24aeb1', border: ' 1px solid #24aeb1' }} _hover={{ color: '#24aeb1', border: ' 1px solid #24aeb1' }} border={"1px solid transparent"} bg="white" fontSize={"12px"} padding={"2px 20px"} borderRadius="6px" onClick={() => setval("", "")}>Popularity</Tab>
                    <Tab _selected={{ backgroundColor: "white", color: '#24aeb1', border: ' 1px solid #24aeb1' }} _hover={{ color: '#24aeb1', border: ' 1px solid #24aeb1' }} border={"1px solid transparent"} bg="white" fontSize={"12px"} padding={"2px 20px"} borderRadius="6px" onClick={() => setval("actual_price", "desc")}>High to Low</Tab>
                    <Tab _selected={{ backgroundColor: "white", color: '#24aeb1', border: ' 1px solid #24aeb1' }} _hover={{ color: '#24aeb1', border: ' 1px solid #24aeb1' }} border={"1px solid transparent"} bg="white" fontSize={"12px"} padding={"2px 20px"} borderRadius="6px" onClick={() => setval("actual_price", "asc")}>Low to High</Tab>
                    <Tab _selected={{ backgroundColor: "white", color: '#24aeb1', border: ' 1px solid #24aeb1' }} _hover={{ color: '#24aeb1', border: ' 1px solid #24aeb1' }} border={"1px solid transparent"} bg="white" fontSize={"12px"} padding={"2px 20px"} borderRadius="6px">Discount</Tab>

                </TabList>
            </Tabs>
        </Box>
    )
}

export default ProductSortingStrip