import React from 'react'
import { Box, Center, Grid, Heading, Image, Link, Text } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export default function CategoriesOnFocus() {
    const categoriesOnFocus = [
        {
            id: 1,
            title: 'Feminine Hygiene',
            off: 'Up to 50% off'
        },
        {
            id: 2,
            title: 'Body Care',
            off: 'Up to 60% off'
        },
        {
            id: 3,
            title: 'Ayurvedic',
            off: 'Up to 76% off'
        },
        {
            id: 4,
            title: 'Orthopaedics',
            off: 'Up to 83% off'
        },
        {
            id: 5,
            title: 'Sports Supplements',
            off: 'Up to 60% off'
        }
    ]
  return (
    <Box p='0 25px' mb='30px' display={{base: 'none', md: 'block'}}>
        <Box display={'flex'} alignItems='center' justifyContent='space-between' mb='30px'>
            <Box>
               <Heading as='h2' fontSize='25px' fontWeight='500'>Categories in Focus</Heading>
            </Box>
            <Box>
                <Link color='red' style={{textDecoration: 'none'}} ><Text>View All <ChevronRightIcon/></Text></Link>
            </Box>
        </Box>
        <Grid templateColumns={`repeat(${categoriesOnFocus.length},1fr)`} gap={3}>
            {
                categoriesOnFocus.map(((el, index) => (
                    <Box key={el.id} bg='#fff' p='30px 20px' borderRadius={6} boxShadow='md' cursor='pointer'>
                        <Center><Image h='180px' w='100%' src={process.env.PUBLIC_URL+`/Images/netmedCOF${index+1}.jpg`}></Image></Center>
                        <Center><Text mt='20px' fontWeight={'600'}>{el.title}</Text></Center>
                        <Center><Text mt='30px' color='#60a723' fontWeight={500} fontSize={'15px'}>{el.off}</Text></Center>
                    </Box>
                )))
            }
        </Grid>
    </Box>
  )
}
