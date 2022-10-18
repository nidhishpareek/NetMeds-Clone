import { AddIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Checkbox, Flex, Heading, Image, Input, Select, Spinner, Text } from '@chakra-ui/react';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { Cart_API, SaveForLater_API } from '../../api';
import { AppContext } from '../../context/AppContext';
import { removeCartRedux, setCartProduct } from '../../Redux/action';
import ErrorPage from '../ErrorPage';

export const Cart = () => {
    // const mobileView = useSelector((state) => state.mobileView);
    // console.log(mobileView);
    const [saveForLaterData, setSaveForLaterData] = useState([]);
    const [showHidden, setShowHidden] = useState('show')
    const promeRef = useRef(null);
    const date = Date(Date.now());
    const dispatch = useDispatch();
    const { setPromoCode, validPromoCode, ApplyPromoCode, cartData, loading, setLoading, error, setError, getData, totalMRP, discount, promoCodeDiscount } = useContext(AppContext);
    const getSaveData = () => {
        setLoading(true);
        fetch(SaveForLater_API)
            .then((res) => res.json())
            .then((res) => {
                setLoading(false);
                setSaveForLaterData(res);
            }).catch((err) => {
                setLoading(false);
                setError(true);
            })
    }
    const removeCart = (url, id) => {
        console.log(url, 'url');
        setLoading(true);
        fetch(`${url}/${id}`, {
            method: 'DELETE',
        }).then(() => {
            setLoading(false)
            if (url === Cart_API) {
                dispatch(removeCartRedux(id));
            }
            getData();
            getSaveData();
        }).catch((err) => {
            setError(true)
        })
    }
    useEffect(() => {
        getData();
        getSaveData();
    }, [])

    const handleQuantity = (e, id) => {
        setLoading(true);
        const body = {
            quantity: e.target.value
        };
        fetch(`${Cart_API}/${id}`, {
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
    const AddToCartFromSave = (el) => {
        setLoading(true);
        removeCart(SaveForLater_API, el.id)
        fetch(Cart_API, {
            method: 'POST',
            body: JSON.stringify(el),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((() => {
            dispatch(setCartProduct(el));
            setLoading(false);
        })).catch((err) => {
            setLoading(false);
            setError(true);
        })
    }
    const handleSaveForLater = (el) => {
        setLoading(true);
        removeCart(Cart_API, el.id);
        fetch(SaveForLater_API, {
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
    const gotToProceed = useNavigate();
    const handleProcced = () => {
        let auth = localStorage.getItem('isLoggedIn');
        if (auth) {
            gotToProceed('/payment')
        }
        else {
            gotToProceed('/Login')
        }
    }
    const handleAddProducts = () => {
        gotToProceed('/')
    }
    const handleAddMore = () => {
        gotToProceed('/')
    }
    const handlePromo = (val) => {
        if (val === 'hidden') {
            promeRef.current.style.display = 'none'
            setShowHidden('show')
        }
        else {
            promeRef.current.style.display = 'block'
            setShowHidden('hidden')
        }
    }
    if (error) {
        return <ErrorPage></ErrorPage>
    }
    return (
        <Box position={'relative'} bg='#F6F6F7'>
            {
                cartData.length === 0 ?
                    <Box>
                        <Box w='30%' pt='20px'>
                            <Heading as='h4' color='black' textAlign={'center'} fontSize='25px' fontWeight={'600'}>My Cart</Heading>
                        </Box>
                        <Box pb='20px'>
                            <Box m='70px 0 50px 0' display={'flex'} alignItems='center' justifyContent={'center'}>
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
                                <Box w='50%' p='15px' m='auto' borderRadius={'10px'} bg='#fff'>
                                    {
                                        saveForLaterData ?
                                            <Box>
                                                {
                                                    saveForLaterData.map(el => (
                                                        <Flex key={el.id} borderBottom='1px solid #dddde0' p='15px' gap='10px'>
                                                            <Box>
                                                                <Image w='120px' h='100%' src={el.img1}></Image>
                                                            </Box>
                                                            <Flex w='100%'>
                                                                <Box w='100%'>
                                                                    <Text fontWeight={'600'} mb='5px'>{el.title}</Text>
                                                                    <Text fontSize={'12px'} color='#151B3999'>QTY: {el.quantity ? el.quantity : 1}</Text>
                                                                    <Text fontSize={'12px'} color='#151B3999'>Mfr: {el.manufacturer}</Text>
                                                                    <Flex mt='20px'>
                                                                        <Button bg='#e7e8eb' mr='10px' borderRadius={'3px'} fontSize={'12px'} color='#151B3999' size='xs' _hover={'none'} letterSpacing={'1px'} onClick={() => removeCart(SaveForLater_API, el.id)}>REMOVE</Button>
                                                                        <Button bg='#24aeb1' color='#fff' borderRadius={'3px'} fontSize={'12px'} size='xs' _hover={'none'} letterSpacing={'1px'} onClick={() => AddToCartFromSave(el)}>ADD TO CART</Button>
                                                                    </Flex>
                                                                </Box>
                                                                <Box w='20%'>
                                                                    <Center><Text fontWeight={'600'} color='#ef4281'>Rs.{el.actual_price.toFixed(2)}</Text></Center>
                                                                    {el.crossed_price && <Center><Text color='#151B3999' fontWeight={'400'} textDecoration={'line-through'} fontSize={'12px'}>Rs.{el.crossed_price.toFixed(2)}</Text></Center>}
                                                                </Box>
                                                            </Flex>
                                                        </Flex>
                                                    ))
                                                }
                                            </Box> :
                                            <Center>
                                                <Box>
                                                    <Text color='#151B3999' as='b' letterSpacing='1px'>SAVED FOR LATER</Text>
                                                    <Text fontSize={'12px'} color='#151B3999' mt='10px'>No items in save for later</Text>
                                                </Box>
                                            </Center>
                                    }
                                </Box>
                            </Box>
                        </Box>
                    </Box> :
                    <Box>
                        {
                            loading && <Box zIndex={'2'} opacity='0.8' display={'grid'} position='fixed' bottom='0px' placeContent='center' w='100vw' h='110vh' bg='black'><Spinner color='#fff' size='xl' /></Box>
                        }
                        <Box>
                            <Heading as='h4' color='black' pt='20px' textAlign={'center'} fontSize='25px' fontWeight={'600'}>Order Summary</Heading>
                        </Box>
                        <Box display={{ base: 'block', lg: 'flex' }} w='80%' m='auto' gap='25px' mt='30px'>
                            <Box w='100%'>
                                <Box bg='#fff' borderRadius={'7px'}>
                                    <Box p='15px'>
                                        <Text color='#151B3999' as='b' fontSize={'13px'} letterSpacing='1px'>PRODUCTS</Text>
                                        <Box>
                                            {
                                                cartData.map(el => (
                                                    <Box key={el.id} borderBottom='1px solid #dddde0' p='15px 0'>
                                                        <Box display={{ base: 'block', lg: 'flex' }}>
                                                            <Box><Image w={{ base: '120px', lg: '40px' }} h={{ base: '100px', lg: '40px' }} src={el.img1}></Image></Box>
                                                            <Box ml='20px'>
                                                                <Text mb='-5px'>{el.title}</Text>
                                                                <Text fontSize={'12px'} color='#151B3999' as='i'>Mfr: {el.manufacturer}</Text>
                                                            </Box>
                                                        </Box>
                                                        <Box ml={{ base: '20px', lg: '60px' }} mt='10px' display={'flex'} justifyContent='space-between' position={'relative'}>
                                                            <Box display={{ base: 'block', md: 'flex' }} alignItems={'flex-end'}>
                                                                <Text fontWeight={'600'} color='#ef4281' mr='5px'>Rs. {parseFloat(el.actual_price).toFixed(2)}</Text>
                                                                {
                                                                    el.crossed_price && <Text color='#151B3999' fontWeight={'400'} textDecoration={'line-through'} fontSize={'12px'}>Rs. {parseFloat(el.crossed_price).toFixed(2)}</Text>
                                                                }
                                                            </Box>
                                                            <Box>
                                                                <Text position={'absolute'} top='10px' right='90px' fontSize={'20px'}>QTY: </Text>
                                                                <Select placeholder={el.quantity ? el.quantity : 1} onChange={(e) => handleQuantity(e, el.id)}>
                                                                    {
                                                                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(el => (
                                                                            <option key={el} value={el}>{el}</option>
                                                                        ))
                                                                    }
                                                                </Select>
                                                            </Box>
                                                        </Box>
                                                        <Box display={{ base: 'block', lg: 'flex' }} ml={{ base: '20px', lg: '60px' }} mt='20px'>
                                                            <Box borderRight='1px solid #dddde0' display={'grid'} alignContent='center' w='100%' mr='15px'>
                                                                <Text fontSize={'12px'}>Delivery between <span style={{ fontSize: '13px' }}>{date.toString().substring(0, 8)}{date.toString().substring(8, 10)}-{date.toString().substring(0, 8)}{+date.toString().substring(8, 10) + 1}</span></Text>
                                                            </Box>
                                                            <Box w={{ base: '100%', lg: '70%' }} display={'flex'} justifyContent='space-between' gap='10px' mt={{ base: '10px', lg: '0' }}>
                                                                <Button bg='#F6F6F7' fontSize={'12px'} color='#151B3999' size='sm' _hover={'none'} letterSpacing={'1px'} onClick={() => removeCart(Cart_API, el.id)}>REMOVE</Button>
                                                                <Button onClick={() => handleSaveForLater(el)} bg='#F6F6F7' fontSize={'12px'} color='#151B3999' size='sm' _hover='none' letterSpacing={'1px'}>SAVE FOR LATER</Button>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                ))
                                            }
                                        </Box>
                                        <Flex mt='15px' justifyContent={'space-between'}>
                                            <Text fontSize={'13px'} color='#24aeb1' fontWeight={'600'} letterSpacing='1px'>ADD MORE ITEMS</Text>
                                            <AddIcon cursor={'pointer'} onClick={handleAddMore} color="#24aeb1" />
                                        </Flex>
                                    </Box>
                                </Box>
                                <Box m='20px 0' p='15px' bg='#fff' borderRadius={'7px'}>
                                    <Text color='#151B3999' as='b' fontSize={'15px'} letterSpacing='1px'>SAVED FOR LATER</Text>
                                    {
                                        saveForLaterData ?
                                            <Box>
                                                {
                                                    saveForLaterData.map(el => (
                                                        <Box key={el.id} display={{ base: 'block', lg: 'flex' }} borderBottom='1px solid #dddde0' p='15px' gap='10px'>
                                                            <Box>
                                                                <Image w='120px' h={{ base: '100px', lg: '100%' }} src={el.img1}></Image>
                                                            </Box>
                                                            <Box w='100%' >
                                                                <Box w='100%'>
                                                                    <Box display={{ base: 'block', lg: 'flex' }} justifyContent='space-between'>
                                                                        <Box>
                                                                            <Text fontWeight={'600'} mb='5px'>{el.title}</Text>
                                                                        </Box>
                                                                        <Box display={{ base: 'block', md: 'flex-column' }} >
                                                                            <Text fontWeight={'600'} color='#ef4281'>Rs.{el.actual_price.toFixed(2)}</Text>
                                                                            {el.crossed_price && <Text color='#151B3999' fontWeight={'400'} textDecoration={'line-through'} fontSize={'12px'}>Rs.{el.crossed_price.toFixed(2)}</Text>}
                                                                        </Box>
                                                                    </Box>
                                                                    <Text fontSize={'12px'} color='#151B3999'>QTY: {el.quantity ? el.quantity : 1}</Text>
                                                                    <Text fontSize={'12px'} color='#151B3999'>Mfr: {el.manufacturer}</Text>
                                                                    <Flex mt='20px'>
                                                                        <Button bg='#e7e8eb' mr='10px' borderRadius={'3px'} fontSize={'12px'} color='#151B3999' size='sm' _hover={'none'} letterSpacing={'1px'} onClick={() => removeCart(SaveForLater_API, el.id)}>REMOVE</Button>
                                                                        <Button bg='#24aeb1' color='#fff' borderRadius={'3px'} fontSize={'12px'} size='sm' _hover={'none'} letterSpacing={'1px'} onClick={() => AddToCartFromSave(el)}>ADD TO CART</Button>
                                                                    </Flex>
                                                                </Box>

                                                            </Box>
                                                        </Box>
                                                    ))
                                                }
                                            </Box> :
                                            <Box><Text mt='5px' fontSize={'12px'} color='#151B3999'>No items in save for later</Text></Box>
                                    }
                                </Box>
                            </Box>
                            <Box w={{ base: '100%', lg: '45%' }}>
                                <Box p='10px' pb='20px' borderRadius={'5px'} bg='#fff' mb='15px'>
                                    <Box>
                                        <Text fontSize={'12px'} color='#151B3999' fontWeight='600' letterSpacing='1px' mb='10px'>APPLY PROMOCODE / NMS SUPERCASH</Text>
                                        <Checkbox onChange={() => handlePromo(showHidden)} colorScheme={'teal'}>Apply Promo Code</Checkbox>
                                        <Center><Text color='#151B3999' w='80%' mt='10px' fontSize={'12px'}>Get flat discount! Vouchers applicable in payment options.</Text></Center>
                                    </Box>
                                    <Box mt='30px' pos='relative'>
                                        <Box ref={promeRef} display='none'>
                                            <Text color='#24aeb1' fontSize={'12px'} fontWeight='600'>PROMOCODE</Text>
                                            <Box>
                                                <Input onChange={(e) => setPromoCode(e.target.value)} size={'xs'} variant='flushed' placeholder='Have a promocode? Enter here' />
                                                <Button onClick={ApplyPromoCode} pos='absolute' right='0' bottom='-5px' bg='none' _hover='none' color='#ef4281'>Apply</Button>
                                            </Box>
                                            {
                                                validPromoCode === false && <Text color='red'>Invalid promocode</Text>
                                            }
                                        </Box>
                                    </Box>
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
                                        {
                                            promoCodeDiscount == 0 ? <Box></Box> :
                                                <Flex fontSize={'14px'} mb='10px' justifyContent={'space-between'}>
                                                    <Text>Promocode Discount</Text>
                                                    <Text>-Rs.{parseFloat(promoCodeDiscount).toFixed(2)}</Text>
                                                </Flex>
                                        }
                                        <Flex fontSize={'14px'} mb='20px' justifyContent={'space-between'}>
                                            <Text as='b'>Total Amount *</Text>
                                            <Text as='b'>Rs.{parseFloat(totalMRP - discount - promoCodeDiscount).toFixed(2)}</Text>
                                        </Flex>
                                    </Box>
                                    <Box bg='#f3f8ec' p='10px 15px' mb='30px'>
                                        <Text fontSize={'12px'} fontWeight='600' color='#489841' letterSpacing='1px'>TOTAL SAVINGS RS.{parseFloat(discount).toFixed(2)}</Text>
                                    </Box>
                                    <Flex justifyContent={'space-between'} p='5px'>
                                        <Box>
                                            <Text fontSize={'11px'} letterSpacing='1px' fontWeight={'600'} color='#151B3999'>TOTAL AMOUNT</Text>
                                            <Text fontSize={'20px'} as='b'>Rs.{parseFloat(totalMRP - discount - promoCodeDiscount).toFixed(2)}</Text>
                                        </Box>
                                        <Box>
                                            <Button onClick={handleProcced} bg='#24aeb1' borderRadius={'2px'} color='#fff' letterSpacing={'1px'} _hover='none' p='0 30px'>PROCEED</Button>
                                        </Box>
                                    </Flex>
                                </Box>
                                <Box mt='-20px' p='15px'>
                                    <Text as='i' fontSize={'10px'} lineHeight='-10px'>Netmeds is a technology platform to facilitate transaction of business. The products and services are offered for sale by the sellers. The user authorizes the delivery personnel to be his agent for delivery of the goods. For details read <span style={{ color: '#0033ff' }}>Terms & Conditions</span></Text>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
            }
        </Box>
    )
}
