import { Box, Text, Grid, GridItem, Image, Button } from '@chakra-ui/react'
import React from 'react'
import ErrorPage from '../ErrorPage';
const AllProduct = ({ page, loading, error, setval, prod, handleAdd, handlePage }) => {

    return loading ? <Box h="100vh">
        <Image pos={"absolute"} top="20%" left="50%" m="100px auto" bgColor={"transparent"} src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.giff" />
    </Box> :
        error ? <ErrorPage /> :
            (
                <>
                    <Box display="flex" justifyContent="space-between" alignItems={"center"} margin={"20px 0"}>
                        <Box fontSize={'14px'}>Showing <strong>20</strong> of <strong>134</strong> items</Box>
                        <Box display={"flex"} flexDir="row" alignItems={"center"} gap="5px">
                            <Text fontSize={"14px"}>Sort by:</Text>
                            <Button _hover={{ color: '#24aeb1', border: ' 1px solid #24aeb1' }} size={"xs"} border={"1px solid transparent"} bg="white" fontSize={"12px"} padding={"5px 20px 4px"} onClick={() => setval("", "")}>Popularity</Button>
                            <Button _hover={{ color: '#24aeb1', border: ' 1px solid #24aeb1' }} size={"xs"} border={"1px solid transparent"} bg="white" fontSize={"12px"} padding={"5px 20px 4px"} onClick={() => setval("actual_price", "desc")}>High to Low</Button>
                            <Button _hover={{ color: '#24aeb1', border: ' 1px solid #24aeb1' }} size={"xs"} border={"1px solid transparent"} bg="white" fontSize={"12px"} padding={"5px 20px 4px"} onClick={() => setval("actual_price", "asc")}>Low to High</Button>
                            <Button _hover={{ color: '#24aeb1', border: ' 1px solid #24aeb1' }} size={"xs"} border={"1px solid transparent"} bg="white" fontSize={"12px"} padding={"5px 20px 4px"}>Discount</Button>
                        </Box>
                    </Box>
                    <Box p={"15px"} bgColor="#ffffff" borderRadius={"10px"} >
                        <Text fontSize={"13px"} fontWeight='700' color={"rgba(21,27,57,.6)"} letterSpacing="1px" textTransform={"uppercase"} mb="10px">All Product</Text>
                        <Grid templateColumns="repeat(4,1fr)" gap="13px">
                            {prod.map((el) => {
                                const { title, id, img1, actual_price, crossed_price, manufacturer, category, sub_category } = el;
                                const discount = Math.round(((crossed_price - actual_price) / crossed_price) * 100);
                                return <GridItem key={id} w="100%" p={'14px 16px 15px 16px'} border='solid 1px rgba(112,112,112,.38)' borderRadius={"8px"} position="relative">
                                    {crossed_price && <Text as='span' position={"absolute"} bg="#84be52" fontSize={"9px"} lineHeight="11px" p="4px 5px 2px 5px" borderRadius={"4px"} color="white" top="8px" left="8px">{discount}% OFF</Text>}
                                    <Image h={'150px'} objectFit="contain" margin={"0 auto"} src={img1} />
                                    <Text overflow={"hidden"} fontSize={"14px"} fontWeight={"700"} h={"42px"} color="#151b39">{title}</Text>
                                    <Box overflow={"hidden"} h='24px' m="5px 0">
                                        <Text as="span" color={"#24aeb1"} fontSize="10px" borderRadius={"40px"} mr="4px" p='4px 10px' bgColor={"#f3f7fb"}>{category}</Text>
                                        <Text as="span" color={"#24aeb1"} fontSize="10px" borderRadius={"40px"} mr="4px" p='4px 10px' bgColor={"#f3f7fb"}>{sub_category}</Text>
                                    </Box>
                                    <Text w="auto" fontStyle={"italic"} lineHeight="16px" color={'#6f7284'} fontSize="13px" m="5px 0">Mkt: {manufacturer}</Text>
                                    <Text fontSize={"14px"} color="#6f7284" fontWeight={"700"}>Best price* <Text as='span' fontSize="16px" color="#ef4281">₹{actual_price}</Text></Text>
                                    <Box h="40px">
                                        {crossed_price && <Text fontSize={"13px"} padding="5px 0" color="#6f7284">MRP<Text as="span" textDecor={"line-through"} p="0 5px">Rs.{crossed_price}</Text></Text>}
                                    </Box>
                                    <Button w="100%" bgColor={"#24aeb1"} color="white" textTransform={"uppercase"} _hover={{ bgColor: "#24aeb1", color: "white" }} onClick={() => handleAdd(el)} >Add to cart</Button>
                                </GridItem >
                            })}
                        </Grid>
                        <Box textAlign={"center"} mt="30px" display="flex" gap='5px' justifyContent={"center"}>
                            <Button size={"sm"} _hover={{ color: '#0298a7', bgColor: '#D4D5D940' }} bgColor="white" fontWeight={"400"} fontSize={"13px"} color="#151b39">{page}</Button>
                            <Button onClick={(e) => handlePage(+e.target.innerHTML)} size={"sm"} _hover={{ color: '#0298a7', bgColor: '#D4D5D940' }} bgColor="white" fontWeight={"400"} fontSize={"13px"} color="#151b39">{page + 1}</Button>
                            <Button size={"sm"} _hover={{ color: '#0298a7', bgColor: '#D4D5D940' }} bgColor="white" fontWeight={"400"} fontSize={"13px"} color="#151b39">{page + 2}</Button>
                            <Button size={"sm"} border="1px solid #d4d5d9" bgColor="white" p="0 20px" fontWeight={"400"} _hover={{ color: '#0298a7', bgColor: 'white' }} fontSize={"13px"} color="#151b39" onClick={() => handlePage(page + 1)}>NEXT</Button>
                        </Box>
                    </Box>
                </>
            )
}

export default AllProduct