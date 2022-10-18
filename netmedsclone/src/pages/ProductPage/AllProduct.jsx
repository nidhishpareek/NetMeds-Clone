import { Box, Text, Grid, GridItem, Image, Button, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Data } from '../Context/DataContext';
import ErrorPage from '../ErrorPage';
import axios from 'axios';
import { setCartProduct } from '../../Redux/action';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Cart_API } from '../../api';
const AllProduct = () => {
    const { page, total, loading, sortCategory, prod, handlePage, handlecurrProduct } = useContext(Data);
    console.log(sortCategory, 'sortedone')
    const [cart, setCart] = useState([]);
    const dispatch = useDispatch();
    let [search, setSearchParam] = useSearchParams();
    const handleAdd = (item) => {
        axios.get(Cart_API).then((res) => setCart(res.data))
        const check = cart.filter(allItem => allItem.id === item.id)
        if (check.length === 0) {
            axios.post(Cart_API, item)
                .then(() => {
                    dispatch(setCartProduct(item))
                    toast({
                        title: 'Item added to cart',
                        status: 'success',
                        isClosable: true,
                    })
                })
                .catch((err) => {
                    console.log(err)
                    toast({
                        title: 'Item is already in cart',
                        status: 'error',
                        isClosable: true,
                    })
                })
        } else if (check.length === 1) {
            toast({
                title: 'Item is already in cart',
                status: 'error',
                isClosable: true,
            })
        }
    }

    const toast = useToast()
    const navigate = useNavigate();
    const handleProductDetail = (productDetails) => {
        handlecurrProduct(productDetails)
        navigate(`/products/${productDetails.id}`)
    }
    useEffect(() => {
        setSearchParam({ page: page })
    }, [page])


    const { error } = useSelector((state) => state);
    return loading ? <Box h="100vh" opacity="0.5" w="100wh" pos={"relative"}>
        <Image pos={"absolute"} top="15%" left="40%" m="100px auto" bgColor={"transparent"} src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.giff" />
    </Box> :
        error ? <ErrorPage /> :
            (
                <>
                    <Box p={"15px"} bgColor="#ffffff" borderRadius={"10px"} >
                        <Text fontSize={"13px"} fontWeight='700' color={"rgba(21,27,57,.6)"} letterSpacing="1px" textTransform={"uppercase"} mb="10px">All Product</Text>
                        <Grid templateColumns={{ base: "repeat(2,1fr)", lg: "repeat(4,1fr)" }} gap="13px">
                            {prod.map((el) => {
                                const { title, id, img1, actual_price, crossed_price, manufacturer, category, sub_category } = el;
                                const discount = Math.round(((crossed_price - actual_price) / crossed_price) * 100);
                                return <GridItem key={id} w="100%" p={'14px 16px 15px 16px'} border='solid 1px rgba(112,112,112,.38)' borderRadius={"8px"} position="relative">
                                    {crossed_price && <Text as='span' position={"absolute"} bg="#84be52" fontSize={"9px"} lineHeight="11px" p="4px 5px 2px 5px" borderRadius={"4px"} color="white" top="8px" left="8px">{discount}% OFF</Text>}
                                    <Image h={'150px'} objectFit="cover" margin={"0 auto"} src={img1 ? img1 : "https://www.netmeds.com/images/product-v1/600x600/default/no_image.png"} cursor="pointer" onClick={() => handleProductDetail(el)} />
                                    <Text mt="5px" overflow={"hidden"} fontSize={"14px"} fontWeight={"700"} h={"42px"} color="#151b39" cursor="pointer" onClick={() => handleProductDetail(el)} >{title}</Text>
                                    <Box overflow={"hidden"} h='30px' w="100%" mt="5px" >
                                        <Text as="span" color={"#24aeb1"} fontSize="10px" borderRadius={"40px"} mr="4px" p='4px 10px' bgColor={"#f3f7fb"}>{category}</Text>
                                        <Text as="span" color={"#24aeb1"} fontSize="10px" borderRadius={"40px"} mr="4px" p='4px 10px' w="max-content" bgColor={"#f3f7fb"}>{sub_category}</Text>
                                    </Box>
                                    <Text w="auto" fontStyle={"italic"} lineHeight="16px" color={'#6f7284'} fontSize="13px" m="5px 0">Mkt: {manufacturer}</Text>
                                    <Text fontSize={"14px"} color="#6f7284" fontWeight={"700"}>Best price* <Text as='span' fontSize="16px" color="#ef4281">₹{actual_price}</Text></Text>
                                    <Box h="40px">
                                        {crossed_price && <Text fontSize={"13px"} padding="5px 0" color="#6f7284">MRP<Text as="span" textDecor={"line-through"} p="0 5px">Rs.{crossed_price}</Text></Text>}
                                    </Box>
                                    <Button w="100%" bgColor={"#24aeb1"} color="white" textTransform={"uppercase"} _hover={{ bgColor: "#24aeb1", color: "white" }} onClick={() => {
                                        handleAdd(el)
                                    }} >Add to cart</Button>
                                </GridItem >
                            })}
                        </Grid>
                        {total >= 20 && <Box textAlign={"center"} mt="30px" display="flex" gap='5px' justifyContent={"center"}>
                            {page !== 1 && <Button size={"sm"} border="1px solid #d4d5d9" bgColor="white" p="0 20px" fontWeight={"400"} _hover={{ color: '#0298a7', bgColor: 'white' }} fontSize={"13px"} color="#151b39" onClick={() => handlePage(page - 1)}>PREV</Button>}
                            {<Button onClick={(e) => handlePage(+e.target.innerHTML)} size={"sm"} _hover={{ color: '#0298a7', bgColor: '#D4D5D940' }} bgColor="white" fontWeight={"400"} fontSize={"13px"} color="#151b39">{page}</Button>}
                            {page !== Math.ceil(total / 20) && <Button size={"sm"} border="1px solid #d4d5d9" bgColor="white" p="0 20px" fontWeight={"400"} _hover={{ color: '#0298a7', bgColor: 'white' }} fontSize={"13px"} color="#151b39" onClick={() => handlePage(page + 1)}>NEXT</Button>}
                        </Box>}
                    </Box>
                </>
            )
}

export default AllProduct