import { AddIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Flex, Heading, Image, Select, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { Carousel } from '../LandingPage/Carousel';

export const Cart = () => {
    const [cartData, setCartData] = useState([5]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const getData = () => {
        fetch('https://netmedsdata.onrender.com/cart')
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            setCartData(res);
        })
    }
    const removeCart = (id) => {
        console.log(id);
        fetch(`https://netmedsdata.onrender.com/cart/${id}`, {
            method: 'DELETE',
        }).then(() => {
            getData();
        })
    }
    useEffect(() => {
        getData();
    },[])
  return (
    <Box position={'relative'} top='100px' bg='#F6F6F7'>
        {
            cartData.length===0 ? 
            <Box>
                <Box w='30%' pt='20px'>
                    <Heading as='h4' color='black' textAlign={'center'} fontSize='25px' fontWeight={'600'}>My Cart</Heading>
                </Box>
                <Box pb='20px'>
                    <Box  m='70px 0 50px 0' display={'flex'} alignItems='center' justifyContent={'center'}>
                        <Box>
                            <Center>
                                <Image w='230px' src='https://www.netmeds.com/msassets/images/emptycart.svg'></Image>
                            </Center>
                            <Center>
                                <Text mt='10px' as='b' fontWeight={'500'}>Your Cart is empty!</Text>
                            </Center>
                            <Center>
                                <Text mt='10px' fontWeight={'400'} textAlign={'center'} color='#8a9095' fontSize={'14px'} w='62%'>You have no items added in the cart. Explore and add products you like!</Text>
                            </Center>
                            <Center>
                                <Button mt='20px' bg='#24aeb1' h='46px' fontSize={'15px'} color='#fff' borderRadius={'3px'} w='70%'>ADD PRODUCTS</Button>
                            </Center>
                        </Box>
                    </Box>
                    <Box mt='50px'>
                        <Center>
                            <Box w='50%' p='15px' borderRadius={'10px'} bg='#fff'>
                                <Text color='#151B3999' as='b' letterSpacing='1px'>SAVED FOR LATER</Text>
                                <Text fontSize={'12px'} color='#151B3999' mt='10px'>No items in save for later</Text>
                            </Box>
                        </Center>
                    </Box>
                </Box>
            </Box> : 
            <Box>
                <Box w='40%' pt='20px'>
                    <Heading as='h4' color='black' textAlign={'center'} fontSize='25px' fontWeight={'600'}>Order Summary</Heading>
                </Box>
                <Box border='1px solid red' display='flex'  w='80%' m='auto' gap='30px' mt='30px'>
                    <Box w='100%' bg='#fff' borderRadius={'7px'}>
                        <Box p='15px'>
                            <Text color='#151B3999' as='b' fontSize={'13px'} letterSpacing='1px'>PRODUCTS</Text>
                            <Box>
                                {
                                    cartData.map(el => (
                                        <Box borderBottom='1px solid #dddde0' p='15px 0'>
                                            <Flex>
                                                <Box><Image w='40px' h='40px' src={el.img1}></Image></Box>
                                                <Box ml='20px'>
                                                    <Text mb='-5px'>{el.title}</Text>
                                                    <Text fontSize={'12px'} color='#151B3999' as='i'>Mfr: {el.manufacturer}</Text>
                                                </Box>
                                            </Flex>
                                            <Box ml='60px' mt='10px' display={'flex'} justifyContent='space-between' position={'relative'}>
                                                <Flex alignItems={'flex-end'}>
                                                    <Text fontWeight={'600'} color='#ef4281' mr='5px'>Rs. {parseFloat(el.actual_price).toFixed(2)}</Text>
                                                    {
                                                        el.crossed_price && <Text color='#151B3999' fontWeight={'400'} textDecoration={'line-through'} fontSize={'12px'}>₹ {parseFloat(el.crossed_price).toFixed(2)}</Text>
                                                    }
                                                </Flex>
                                                <Box>
                                                    <Text position={'absolute'} top='10px' right='75px'>QTY: </Text>
                                                <Select placeholder={1}>
                                                    {
                                                        [2,3,4,4,5,6,7,8,9,10].map(el => (
                                                            <option value={el}>{el}</option>
                                                        ))
                                                    }
                                                    </Select>
                                                </Box>
                                            </Box>
                                            <Box display='flex' ml='60px' mt='20px'>
                                                <Box borderRight='1px solid #dddde0' display={'grid'} alignContent='center' w='100%' mr='15px'>
                                                    <Text fontSize={'12px'}>Delivery between</Text>
                                                </Box>
                                                <Box w='70%' display={'flex'} justifyContent='space-between'>
                                                    <Button bg='#F6F6F7' fontSize={'12px'} color='#151B3999' size='sm' _hover={'none'} letterSpacing={'1px'} onClick={() => removeCart(el.id)}>REMOVE</Button>
                                                    <Button bg='#F6F6F7' fontSize={'12px'} color='#151B3999' size='sm' _hover='none' letterSpacing={'1px'}>SAVE FOR LATER</Button>
                                                </Box>
                                            </Box>
                                        </Box>
                                    ))
                                }
                            </Box>
                            <Flex mt='15px' justifyContent={'space-between'}>
                                <Text fontSize={'13px'} color='#24aeb1' fontWeight={'600'} letterSpacing='1px'>ADD MORE ITEMS</Text>
                            <AddIcon color="#24aeb1"/>
                        </Flex>
                        </Box>
                    </Box>
                    <Box border='1px solid blue' w='40%'>
                        price
                    </Box>
                </Box>
            </Box>
        }
    </Box>
  )
}
