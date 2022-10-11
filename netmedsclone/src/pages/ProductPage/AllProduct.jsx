import { Box, Text, Grid, GridItem, Image, Button } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const AllProduct = () => {
    const [prod, setProd] = useState([]);

    const getProduct = () => {
        fetch(`http://localhost:3001/products?_limit=20`)
            .then((res) => res.json())
            .then(res => setProd(res))
    }
    useEffect(() => {
        getProduct()
    }, [])
    // const prod = [{
    //     "id": 1290,
    //     "title": "Biosoft Aloevera Paraffin Wax 500 S gm",
    //     "img1": "https://www.netmeds.com/images/product-v1/600x600/958099/biosoft_aloevera_paraffin_wax_500_s_gm_0_0.jpg",
    //     "img2": "https://www.netmeds.com/images/product-v1/150x150/958099/biosoft_aloevera_paraffin_wax_500_s_gm_1_0.jpg",
    //     "img3": "https://www.netmeds.com/images/product-v1/150x150/958099/biosoft_aloevera_paraffin_wax_500_s_gm_2_0.jpg",
    //     "actual_price": "425",
    //     "crossed_price": "500",
    //     "manufacturer": "SSIZ INTERNATIONAL PRIVATE LIMITED",
    //     "country": "Italy",
    //     "category": "Mom & Baby",
    //     "sub_category": "Feminine Hygiene"
    // }]
    return (
        <>
            <Box p={"15px"} bgColor="#ffffff" borderRadius={"10px"} >
                <Text fontSize={"13px"} fontWeight='700' color={"rgba(21,27,57,.6)"} letterSpacing="1px" textTransform={"uppercase"} mb="10px">All Product</Text>
                <Grid templateColumns="repeat(4,1fr)" gap="13px">
                    {prod.map((el) => {
                        const { title, id, img1, actual_price, crossed_price, manufacturer, category, sub_category } = el
                        return <GridItem key={id} w="100%" p={'14px 16px 15px 16px'} border='solid 1px rgba(112,112,112,.38)' borderRadius={"8px"} position="relative">
                            <Text as='span' position={"absolute"} bg="#84be52" fontSize={"9px"} lineHeight="11px" p="4px 5px 2px 5px" borderRadius={"4px"} color="white" top="8px" left="8px">10% OFF</Text>
                            <Image h={'150px'} objectFit="contain" margin={"0 auto"} src={img1} />
                            <Text overflow={"hidden"} fontSize={"14px"} fontWeight={"700"} h={"42px"} color="#151b39">{title}</Text>
                            <Box overflow={"hidden"} h='24px'>
                                <Text as="span" color={"#24aeb1"} fontSize="10px" borderRadius={"40px"} mr="4px" p='4px 10px' bgColor={"#f3f7fb"}>{category}</Text>
                                <Text as="span" color={"#24aeb1"} fontSize="10px" borderRadius={"40px"} mr="4px" p='4px 10px' bgColor={"#f3f7fb"}>{sub_category}</Text>
                            </Box>
                            <Text w="auto" fontStyle={"italic"} lineHeight="16px" color={'#6f7284'} fontSize="13px" m="5px 0">Mkt: {manufacturer}</Text>
                            <Text fontSize={"14px"} color="#6f7284" fontWeight={"700"}>Best price* <Text as='span' fontSize="16px" color="#ef4281">₹{actual_price}</Text></Text>
                            <Box h="40px">
                                {crossed_price && <Text fontSize={"13px"} padding="5px 0" color="#6f7284">MRP<Text as="span" textDecor={"line-through"} p="0 5px">Rs.{crossed_price}</Text></Text>}
                            </Box>
                            <Button w="100%" bgColor={"#24aeb1"} color="white" textTransform={"uppercase"} _hover={{ bgColor: "#24aeb1", color: "white" }} >Add to cart</Button>
                        </GridItem >
                    })}
                </Grid>
            </Box>
        </>
    )
}

export default AllProduct