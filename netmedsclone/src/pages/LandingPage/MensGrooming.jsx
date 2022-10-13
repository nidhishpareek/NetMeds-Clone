import React from 'react'
import { Box, Center, Grid, Heading, Image, Link, Text } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export default function MensGrooming() {
    const mensGrooming = [
        {
            id: 1,
            title: 'Shaving',
            off: 'Up to 31% off'
        },
        {
            id: 2,
            title: 'Razors & Cartridges',
            off: 'Up to 46% off'
        },
        {
            id: 3,
            title: 'Beard Oil',
            off: 'Up to 25% off'
        },
        {
            id: 4,
            title: 'Beard Wash',
            off: 'Up to 20% off'
        },
        {
            id: 5,
            title: 'Hair Gels & Waxes',
            off: 'Up to 23% off'
        }
    ]
  return (
    <Box p='0 25px' mb='30px' display={{base: 'none', md: 'block'}}>
        <Box display={'flex'} alignItems='center' justifyContent='space-between' mb='30px'>
            <Box>
               <Heading as='h2' fontSize='25px' fontWeight='500'>Men's Grooming</Heading>
            </Box>
            <Box>
                <Link color='red' style={{textDecoration: 'none'}} ><Text>View All <ChevronRightIcon/></Text></Link>
            </Box>
        </Box>
        <Grid templateColumns={`repeat(${mensGrooming.length},1fr)`} gap={3}>
            {
                mensGrooming.map(((el, index) => (
                    <Box key={el.id} bg='#fff' p='30px 20px' borderRadius={6} boxShadow='md' cursor='pointer'>
                        <Center><Image h='180px' w='100%' src={process.env.PUBLIC_URL+`/Images/netmedMG${index+1}.jpg`}></Image></Center>
                        <Center><Text mt='20px' fontWeight={'600'}>{el.title}</Text></Center>
                        <Center><Text mt='30px' color='#60a723' fontWeight={500} fontSize={'15px'}>{el.off}</Text></Center>
                    </Box>
                )))
            }
        </Grid>
    </Box>
  )
}
