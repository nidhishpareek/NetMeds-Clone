import { Box, Button, Center, Heading, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react'

export const Cart = () => {
    const [cartData, setCartData] = useState([5]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
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
            </Box>
        }
    </Box>
  )
}
