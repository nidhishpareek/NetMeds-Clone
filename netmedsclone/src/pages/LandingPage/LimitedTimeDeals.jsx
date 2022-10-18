import { ChevronRightIcon, TimeIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Flex, Heading, Image, Link, Text, useToast } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { setCartProduct } from '../../Redux/action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Data } from '../Context/DataContext';
import { Cart_API, Home_API } from '../../api';

export function LimitedTimeDeals() {
    const [hour, setHour] = useState(22);
    const [minutes, setMinutes] = useState(29);
    const [seconds, setSeconds] = useState(59);
    const [limitedTimeData, setLimitedTimeData] = useState([]);
    const [count, setCount] = useState(0);
    const ref = useRef();
    const timeref = useRef(null);
    const [cartData, setCartData] = useState([]);
    const dispatch = useDispatch();
    const { handlecurrProduct } = useContext(Data);

    useEffect(() => {
        clearInterval(timeref.current);
        timeref.current = setInterval(() => {
            setSeconds((prev) => prev - 1);
        }, 1000)
    }, [])

    useEffect(() => {
        if (hour === 0) {
            if (minutes === 0) {
                if (seconds === 0) {
                    clearInterval(timeref.current);
                }
            }
        }
        if (seconds === -1) {
            setSeconds(59);
            setMinutes((prev) => prev - 1)
        }
        if (minutes === -1) {
            setMinutes(59);
            setHour((prev) => prev - 1);
        }
    }, [seconds])
    const getData = () => {
        // console.log('here')
        fetch(`${Home_API}?_page=1&_limit=10`)
            .then((res) => res.json())
            .then((res) => {
                // console.log(res, 'res')
                setLimitedTimeData(res);
            })
    }
    const getCartData = () => {
        fetch(Cart_API)
            .then((res) => res.json())
            .then((res) => {
                setCartData(res);
            })
    }

    useEffect(() => {
        getData();
        getCartData();
    }, [])
    const handleClick = (val) => {
        let newCount = count;
        if (val === 'forward') {
            newCount++;
            setCount(newCount);
        } else if (val === 'backward') {
            newCount--;
            setCount(newCount);
        }

        if (newCount === limitedTimeData.length - 4) {
            setCount(0);
            ref.current.style.transform = 'translate(0%)';
            return;
        }
        if (newCount === -1) {
            setCount(0);
            ref.current.style.transform = `translate(0%)`;
            return;
        }
        ref.current.style.transform = `translate(-${newCount * 20.2}%)`;
    }
    const toast = useToast();
    const handleAdd = (item) => {
        const check = cartData.filter(allItem => allItem.id === item.id)
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
        }
        else {
            toast({
                title: 'Item is already in cart',
                status: 'error',
                isClosable: true,
            })
        }
    }
    const navigate = useNavigate();
    const showProduct = (el) => {
        handlecurrProduct(el)
        navigate(`/products/${el.id}`)
    }

    return (
        <Box position={'relative'}>
            <Box bg='#24aeb1' h='200px' p='15px 30px'>
                <Box display={'flex'} alignItems='center' justifyContent='space-between' mb='20px'>
                    <Box>
                        <Heading color='#fff' as='h2' fontSize='25px' fontWeight='500'>Limited Time Deals</Heading>
                    </Box>
                    <Box>
                        <Link color='#fff' style={{ textDecoration: 'none' }} ><Text>View All <ChevronRightIcon /></Text></Link>
                    </Box>
                </Box>
                <Box>
                    <Text color='#fff' fontSize={'13px'}><TimeIcon fontSize='16px' /> {hour}h {minutes}m {seconds}s remaining</Text>
                </Box>
            </Box>
            <Box h={{ base: '260px', md: '330px' }}>
                <Box w='100%' position='absolute' top='100px'>
                    <Box w='95vw' m='auto'>
                        <Box overflow={{ base: 'scroll', md: 'hidden' }} pb='20px'>
                            <Box ref={ref} transition='0.3s' display='grid' gap={{ base: '10px', md: '1vw' }} gridTemplateColumns={`repeat(${limitedTimeData.length},1fr)`}>
                                {
                                    limitedTimeData.map(el => (
                                        <Box w={{ base: '200px', md: '18.2vw' }} key={el.id} p=' 30px 15px 15px 15px' boxShadow='rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px' borderRadius={'10px'} bg='#fff'>
                                            <Center><Image onClick={() => showProduct(el)} cursor='pointer' w='150px' h={{ base: '100px', md: '150px' }} src={el.img1}></Image></Center>
                                            <Text mt='30px' fontWeight={'600'} h='53px' noOfLines={[1, 2]} textOverflow={'ellipsis'}>{el.title}</Text>
                                            <Flex mt='8px' alignItems={'flex-end'}>
                                                <Text fontWeight={'600'} mr='5px'>₹ {parseFloat(el.actual_price).toFixed(2)}</Text>
                                                <Text color='gray' fontWeight={'600'} textDecoration={'line-through'} fontSize={'10px'}>₹ {parseFloat(el.crossed_price).toFixed(2)}</Text>
                                            </Flex>
                                            <Text m='5px 0' color='#60a723' fontSize='15px' fontWeight={'500'}>UPTO 25% off</Text>
                                            <Center><Button onClick={() => handleAdd(el)} h='35px' borderRadius={'3px'} bg='#24aeb1' color='#fff' _hover={{ bg: '#24aeb1' }} fontSize='14px' w='100%'>ADD TO CART</Button></Center>
                                        </Box>
                                    ))
                                }
                            </Box>
                        </Box>
                    </Box>
                    <Box w='99%' left='0.5%' position={'absolute'} display={{ base: 'none', md: 'flex' }} justifyContent={'space-between'} top='50%' transform={'translateY(-50%)'}>
                        <Button disabled={count === 0} onClick={() => handleClick('backward')} borderRadius={'50%'} bg='#fff' w='40px' h='40px'><span style={{ fontSize: '30px' }} className="material-symbols-outlined">chevron_left</span></Button>
                        <Button disabled={count === limitedTimeData.length - 5} onClick={() => handleClick('forward')} borderRadius={'50%'} bg='#fff' w='40px' h='40px'><span style={{ fontSize: '30px' }} className="material-symbols-outlined">chevron_right</span></Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
