import { AddIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Checkbox, Flex, Heading, Image, Select, Spinner, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Cart = () => {
    const [cartData, setCartData] = useState([0]);
    const [saveForLaterData, setSaveForLaterData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [totalMRP, setTotalMRP] = useState(0);
    const [discount, setDiscount] = useState(0);
    const date = Date(Date.now());
    const getData = () => {
        setLoading(true);
        fetch('https://netmedsdata.onrender.com/cart')
        .then((res) => res.json())
        .then((res) => {
            setLoading(false);
            setTotalMRP(0);
            setDiscount(0);
            res.map(el => {
                if(el.quantity && el.crossed_price) {
                    setTotalMRP((prev) => prev+ (Number(el.crossed_price)*Number(el.quantity)))
                    setDiscount((prev) => prev+ ((Number(el.crossed_price)-Number(el.actual_price))*Number(el.quantity)))
                }
                else if(el.quantity && el.actual_price) {
                    setTotalMRP((prev) => prev+ (Number(el.actual_price)*Number(el.quantity)))
                }
                else if(el.crossed_price) {
                    setTotalMRP((prev) => prev+ (Number(el.crossed_price)))
                    setDiscount((prev) => prev+ (Number(el.crossed_price)-Number(el.actual_price)))
                }
                else {
                    setTotalMRP((prev) => prev+ (Number(el.actual_price)))
                }
            })
            setCartData(res);
        }).catch((err) => {
            setLoading(false);
            setError(true);
        })
    }
    const getSaveData = () => {
        setLoading(true);
        fetch('https://netmedsdata.onrender.com/saveForlater')
        .then((res) => res.json())
        .then((res) => {
            setLoading(false);
            setSaveForLaterData(res);
        }).catch((err) => {
            setLoading(false);
            setError(true);
        })
    }
    const removeCart = (id) => {
        setLoading(true);
        fetch(`https://netmedsdata.onrender.com/cart/${id}`, {
            method: 'DELETE',
        }).then(() => {
            setLoading(false)
            getData();
        }).catch((err) => {
            setError(true)
        })
    }
    useEffect(() => {
        getData();
        getSaveData();
    },[])
    
    const handleQuantity = (e, id) => {
        setLoading(true);
        const body = {
            quantity:  e.target.value
        };
        fetch(`https://netmedsdata.onrender.com/cart/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            setLoading(false)
            getData();
        }).catch((err) => {
            setError(true)
        })
    }
    const gotToProceed = useNavigate();
    const handleProcced = () => {
        gotToProceed('/payment')
    }
    const handleAddProducts = () => {
        gotToProceed('/')
    }
    const handleSaveForLater =  (el) => {
        setLoading(true);
        fetch(`https://netmedsdata.onrender.com/saveForlater`, {
            method: 'POST',
            body: JSON.stringify(el),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            getSaveData();
            setLoading(false);
        }).catch(() => {
            setError(true);
        })
    }
    return (
    <Box position={'relative'} bg='#F6F6F7'>
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
                                <Button onClick={handleAddProducts} _hover='none' mt='20px' bg='#24aeb1' h='46px' fontSize={'15px'} color='#fff' borderRadius={'3px'} w='70%'>ADD PRODUCTS</Button>
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
                {
                    loading && <Box zIndex={'2'} opacity='0.8' display={'grid'} position='fixed' bottom='0px' placeContent='center' w='100vw' h='110vh' bg='black'><Spinner color='#fff' size='xl' /></Box>
                }
                <Box w='40%' pt='20px'>
                    <Heading as='h4' color='black' textAlign={'center'} fontSize='25px' fontWeight={'600'}>Order Summary</Heading>
                </Box>
                <Box border='1px solid red' display='flex'  w='80%' m='auto' gap='25px' mt='30px'>
                    <Box w='100%'>
                        <Box bg='#fff' borderRadius={'7px'}>
                            <Box p='15px'>
                                <Text color='#151B3999' as='b' fontSize={'13px'} letterSpacing='1px'>PRODUCTS</Text>
                                <Box>
                                    {
                                        cartData.map(el => (
                                            <Box key={el.id} borderBottom='1px solid #dddde0' p='15px 0'>
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
                                                    <Select placeholder={el.quantity ? el.quantity : 1} onChange={(e) => handleQuantity(e, el.id)}>
                                                        {
                                                            [1,2,3,4,5,6,7,8,9,10].map(el => (
                                                                <option key={el} value={el}>{el}</option>
                                                            ))
                                                        }
                                                        </Select>
                                                    </Box>
                                                </Box>
                                                <Box display='flex' ml='60px' mt='20px'>
                                                    <Box borderRight='1px solid #dddde0' display={'grid'} alignContent='center' w='100%' mr='15px'>
                                                        <Text fontSize={'12px'}>Delivery between <span style={{fontSize: '13px'}}>{date.toString().substring(0, 8)}{date.toString().substring(8, 10)}-{date.toString().substring(0, 8)}{+date.toString().substring(8, 10)+1}</span></Text>
                                                    </Box>
                                                    <Box w='70%' display={'flex'} justifyContent='space-between'>
                                                        <Button bg='#F6F6F7' fontSize={'12px'} color='#151B3999' size='sm' _hover={'none'} letterSpacing={'1px'} onClick={() => removeCart(el.id)}>REMOVE</Button>
                                                        <Button onClick={() => handleSaveForLater(el)} bg='#F6F6F7' fontSize={'12px'} color='#151B3999' size='sm' _hover='none' letterSpacing={'1px'}>SAVE FOR LATER</Button>
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
                        <Box border='1px solid red' mt='20px' p='15px'>
                            <Text color='#151B3999' as='b' fontSize={'15px'} letterSpacing='1px'>SAVED FOR LATER</Text>
                            <Box>
                                {
                                    saveForLaterData.map(el => (
                                        <Box>
                                            <Box>
                                                <Image src={el.img1}></Image>
                                            </Box>
                                            <Flex>
                                                <Box>
                                                    <Text>{el.title}</Text>
                                                    <Text>QTY: {el.quantaty ? el.quantaty : 1}</Text>
                                                    <Text>Mfr: {el.manufacturer}</Text>
                                                    <Flex>
                                                        <Button>REMOVE</Button>
                                                        <Button>ADD TO CART</Button>
                                                    </Flex>
                                                </Box>
                                                <Box>
                                                    <Text>Rs.{el.actual_price}</Text>
                                                    {el.crossed_price && <Text>Rs.{el.crossed_price}</Text>}
                                                </Box>
                                            </Flex>
                                        </Box>
                                    ))
                                }
                            </Box>
                        </Box>
                    </Box>
                    <Box w='45%'>
                        <Box p='10px' pb='20px' borderRadius={'5px'} bg='#fff' mb='15px'>
                            <Text fontSize={'12px'} color='#151B3999' fontWeight='600' letterSpacing='1px' mb='10px'>APPLY PROMOCODE / NMS SUPERCASH</Text>
                            <Checkbox colorScheme={'teal'}>Apply Promo Code</Checkbox>
                            <Center><Text color='#151B3999' w='80%' mt='10px' fontSize={'12px'}>Get flat discount! Vouchers applicable in payment options.</Text></Center>
                        </Box>
                        <Box p='10px' pb='20px' borderRadius={'5px'} bg='#fff' mb='15px'>
                            <Box p='5px'>
                                <Text fontSize={'12px'} color='#151B3999' fontWeight='600' letterSpacing='1px' mb='15px'>PAYMENT DETAILS</Text>
                                <Flex fontSize={'14px'} mb='10px' justifyContent={'space-between'}>
                                    <Text>MRP Total</Text>
                                    <Text>Rs.{parseFloat(totalMRP).toFixed(2)}</Text>
                                </Flex>
                                <Flex fontSize={'14px'} mb='10px' justifyContent={'space-between'}>
                                    <Text>Netmeds Discount</Text>
                                    <Text>-Rs.{parseFloat(discount).toFixed(2)}</Text>
                                </Flex>
                                <Flex fontSize={'14px'} mb='20px' justifyContent={'space-between'}>
                                    <Text as='b'>Total Amount *</Text>
                                    <Text as='b'>Rs.{parseFloat(totalMRP-discount).toFixed(2)}</Text>
                                </Flex>
                            </Box>
                            <Box bg='#f3f8ec' p='10px 15px' mb='30px'>
                                <Text fontSize={'12px'} fontWeight='600' color='#489841' letterSpacing='1px'>TOTAL SAVINGS RS.{parseFloat(discount).toFixed(2)}</Text>
                            </Box>
                            <Flex justifyContent={'space-between'} p='5px'>
                                <Box>
                                    <Text fontSize={'11px'} letterSpacing='1px' fontWeight={'600'} color='#151B3999'>TOTAL AMOUNT</Text>
                                    <Text fontSize={'20px'} as='b'>Rs.{parseFloat(totalMRP-discount).toFixed(2)}</Text>
                                </Box>
                                <Box>
                                    <Button onClick={handleProcced} bg='#24aeb1' borderRadius={'2px'} color='#fff' letterSpacing={'1px'} _hover='none' p='0 30px'>PROCEED</Button>
                                </Box>
                            </Flex>
                        </Box>
                        <Box mt='-20px' p='15px'>
                            <Text  as='i' fontSize={'10px'} lineHeight='-10px'>Netmeds is a technology platform to facilitate transaction of business. The products and services are offered for sale by the sellers. The user authorizes the delivery personnel to be his agent for delivery of the goods. For details read <span style={{color: '#0033ff'}}>Terms & Conditions</span></Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        }
    </Box>
  )
}
