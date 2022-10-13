import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Center, Grid, Heading, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'

export default function TopBrands() {
    const topBrandData = [
        {
            id: 1,
            title: 'Himalaya',
            off: 'Up to 35% off'
        },
        {
            id: 2,
            title: 'Accu-Chek',
            off: 'Up to 25% off'
        },
        {
            id: 3,
            title: 'Dabur',
            off: 'Up to 30% off'
        },
        {
            id: 4,
            title: 'Manforce',
            off: 'Up to 25% off'
        },
        {
            id: 5,
            title: 'Cetaphil',
            off: 'Up to 10% off'
        }
    ]
  return (
    <Box p='0 25px' mb='30px'>
        <Box display={'flex'} alignItems='center' justifyContent='space-between' mb='30px'>
            <Box>
            <Heading as='h2' fontSize='25px' fontWeight='500'>Top Brands</Heading>
            </Box>
        </Box>
        <Grid overflow={{base: 'scroll', md: 'hidden'}} pb='20px' templateColumns={`repeat(${topBrandData.length},1fr)`} gap={3}>
            {
                topBrandData.map(((el, index) => (
                    <Box w={{base: '200px', md: '18vw'}} key={el.id} bg='#fff' p='30px 20px' borderRadius={6} boxShadow='md' cursor='pointer'>
                        <Center><Image h='180px' w='100%' src={process.env.PUBLIC_URL+`/Images/netmedTB${index+1}.jpg`}></Image></Center>
                        <Center><Text mt='20px' fontWeight={'600'}>{el.title}</Text></Center>
                        <Center><Text mt='30px' color='#60a723' fontWeight={500} fontSize={'15px'}>{el.off}</Text></Center>
                    </Box>
                )))
            }
        </Grid>
    </Box>
  )
}
