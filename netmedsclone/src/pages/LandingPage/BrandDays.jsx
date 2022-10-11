import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Flex, Grid, Heading, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'

export default function () {
    const brandDaysData = [
        {
            id: 1,
            title: 'Inatur Ayurveda & Aromatherapy Kumkumadi',
            price: 360.00,
            crossedPrice: 900.00,
            off: 'UPTO 60% off'
        },
        {
            id: 2,
            title: 'Inatur Herbals Foot Cream 100 Gm',
            price: 160.00,
            crossedPrice: 400.00,
            off: 'UPTO 60% off'
        },
        {
            id: 3,
            title: 'Inatur Pure & Cold Pressed Oil - Almond 100 ml',
            price: 160.00,
            crossedPrice: 400.00,
            off: 'UPTO 60% off'
        },
        {
            id: 4,
            title: 'Inatur Pure and Cold Pressed Oil - Olive 100 ml',
            price: 140.00,
            crossedPrice: 350.00,
            off: 'UPTO 60% off'
        },
        {
            id: 5,
            title: 'Inatur Re-Growth Hair Oil - Hibiscus 100 ml',
            price: 160.00,
            crossedPrice: 400.00,
            off: 'UPTO 10% off'
        },
    ]
  return (
    <Box>
        <Box bg='#24aeb1' h='200px' p='15px 30px'>
            <Box display={'flex'} alignItems='center' justifyContent='space-between' mb='20px'>
                <Box>
                    <Heading color='#fff' as='h2' fontSize='25px' fontWeight='500'>Brand Days - Inatur flat 60 % Off</Heading>
                </Box>
                <Box>
                    <Link color='#fff' style={{textDecoration: 'none'}} ><Text>View All <ChevronRightIcon/></Text></Link>
                </Box>
            </Box>
        </Box>
        <Box h='280px' position='relative'>
            <Grid position={'absolute'} bottom='25px' m='15px 30px' gap='10px' gridTemplateColumns={`repeat(${brandDaysData.length},1fr)`}>
                    {
                        brandDaysData.map(el => (
                            <Box key={el.id} p=' 30px 15px 15px 15px' boxShadow='rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px' borderRadius={'10px'} bg='#fff'>
                                <Center><Image src={process.env.PUBLIC_URL+`/Images/netmedBD${el.id}.jpg`}></Image></Center>
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
