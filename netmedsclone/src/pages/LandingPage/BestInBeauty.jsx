import React from 'react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Flex, Grid, Heading, Image, Link, Text } from '@chakra-ui/react'

export default function BestInBeauty() {
    const bestInBeautyData = [
        {
            id: 1,
            title: 'Maybelline'
        },
        {
            id: 2,
            title: 'Garnier'
        },
        {
            id: 3,
            title: 'Myglamm'
        },
        {
            id: 4,
            title: 'Colorbar'
        },
        {
            id: 5,
            title: 'Plum'
        }
    ]
  return (
    <Box>
        <Box bg='#8a9095' h='200px' p='15px 30px'>
            <Box display={'flex'} alignItems='center' justifyContent='space-between' mb='20px'>
                <Box>
                    <Heading color='#fff' as='h2' fontSize='25px' fontWeight='500'>Best in Beauty</Heading>
                </Box>
                <Box>
                    <Link color='#fff' style={{textDecoration: 'none'}} ><Text>View All <ChevronRightIcon/></Text></Link>
                </Box>
            </Box>
        </Box>
        <Box h='200px' position='relative'>
        <Grid position={'absolute'} bottom='25px' m='15px 30px' gap='10px' templateColumns={`repeat(${bestInBeautyData.length},1fr)`} g={3}>
            {
                bestInBeautyData.map(((el, index) => (
                    <Box key={el.id} boxShadow='rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px' bg='#fff' p='30px 20px' borderRadius={6} cursor='pointer'>
                        <Center><Image h='180px' w='100%' src={process.env.PUBLIC_URL+`/Images/netmedBIB${index+1}.jpg`}></Image></Center>
                        <Center><Text mt='20px' fontWeight={'600'}>{el.title}</Text></Center>
                    </Box>
                )))
            }
        </Grid>
        </Box>
    </Box>
  )
}