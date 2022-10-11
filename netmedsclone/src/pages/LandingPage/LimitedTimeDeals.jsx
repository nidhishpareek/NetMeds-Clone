import { ChevronRightIcon, TimeIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Flex, Grid, Heading, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

export function LimitedTimeDeals() {
    const [hour, setHour] = useState(22);
    const [minutes, setMinutes] = useState(29);
    const [seconds, setSeconds] = useState(59);
    const ref = useRef(null);

    useEffect(() => {
        clearInterval(ref.current);
        ref.current = setInterval(() => {
            setSeconds((prev) => prev-1);
        },1000)
    },[])

    useEffect(() => {
        if(hour===0) {
            if(minutes===0) {
                if(seconds===0) {
                    clearInterval(ref.current);
                }
            }
        }
        if(seconds===-1) {
            setSeconds(59);
            setMinutes((prev) => prev-1)
        }
        if(minutes===-1) {
            setMinutes(59);
            setHour((prev) => prev-1);
        }
    },[seconds])
    const limitedTimeData = [
        {
            id: 1,
            title: 'Accu-Chek Instant Glucometer With Free 10',
            price: 944.89,
            crossedPrice: 1549.00,
            off: 'UPTO 39% off'
        },
        {
            id: 2,
            title: 'Scalpe Plus Anti Dandruff Shampoo 75 ml',
            price: 224.00,
            crossedPrice: 280.00,
            off: 'UPTO 20% off'
        },
        {
            id: 3,
            title: 'Cetaphil Oily Skin Cleanser 125ml',
            price: 479.60,
            crossedPrice: 545.00,
            off: 'UPTO 12% off'
        },
        {
            id: 4,
            title: 'Lacto Calamine Oil Balance For Oily Skin Lotion 120 ml',
            price: 212.64,
            crossedPrice: 240.00,
            off: 'UPTO 11% off'
        },
        {
            id: 5,
            title: 'Indulekha Bringha Oil 100 ml',
            price: 388.80,
            crossedPrice: 432.00,
            off: 'UPTO 10% off'
        },
    ]
  return (
    <Box>
        <Box bg='#24aeb1' h='200px' p='15px 30px'>
            <Box display={'flex'} alignItems='center' justifyContent='space-between' mb='20px'>
                <Box>
                    <Heading color='#fff' as='h2' fontSize='25px' fontWeight='500'>Limited Time Deals</Heading>
                </Box>
                <Box>
                    <Link color='#fff' style={{textDecoration: 'none'}} ><Text>View All <ChevronRightIcon/></Text></Link>
                </Box>
            </Box>
            <Box>
                <Text color='#fff' fontSize={'13px'}><TimeIcon fontSize='16px'/> {hour}h {minutes}m {seconds}s remaining</Text>
            </Box>
        </Box>
        <Box h='300px' position='relative'>
            <Grid position={'absolute'} bottom='20px' m='15px 30px' gap='10px' gridTemplateColumns={`repeat(${limitedTimeData.length},1fr)`}>
                    {
                        limitedTimeData.map(el => (
                            <Box key={el.id} p=' 30px 15px 15px 15px' boxShadow='rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px' borderRadius={'10px'} bg='#fff'>
                                <Center><Image src={process.env.PUBLIC_URL+`/Images/netmedLTD${el.id}.jpg`}></Image></Center>
                                <Text mt='30px'fontWeight={'600'} >{el.title}</Text>
                                <Flex mt='8px' alignItems={'flex-end'}>
                                    <Text fontWeight={'600'}>₹ {parseFloat(el.price).toFixed(2)}</Text>
                                    <Text color='gray' fontWeight={'600'} textDecoration={'line-through'} fontSize={'10px'}>₹ {parseFloat(el.crossedPrice).toFixed(2)}</Text>
                                </Flex>
                                <Text m='5px 0' color='#60a723' fontSize='15px' fontWeight={'500'}>{el.off}</Text>
                                <Center><Button h='35px' borderRadius={'3px'} bg='#24aeb1' color='#fff' _hover={'none'} fontSize='14px' w='100%'>ADD TO CART</Button></Center>
                            </Box>
                        ))
                    }
            </Grid>
        </Box>
    </Box>
  )
}
