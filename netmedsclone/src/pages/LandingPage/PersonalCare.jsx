import React from 'react'
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Center, Grid, Heading, Image, Link, Text } from "@chakra-ui/react";

export default function PersonalCare() {
    const personalCareData = [
        {
            id: 1,
            title: 'Body Care'
        },
        {
            id: 2,
            title: 'Mom & Baby'
        },
        {
            id: 3,
            title: 'Skin Treatment'
        },
        {
            id: 4,
            title: 'Face Wash & Cleansers'
        },
        {
            id: 5,
            title: 'Shower Gels & Body Wash'
        }
    ]
  return (
    <Box p='0 25px' mb='30px' display={{base: 'none', md: 'block'}}>
        <Box display={'flex'} alignItems='center' justifyContent='space-between' mb='30px'>
            <Box>
            <Heading as='h2' fontSize='25px' fontWeight='500'>Personal Care</Heading>
            </Box>
            <Box>
                <Link color='red' style={{textDecoration: 'none'}} ><Text>View All <ChevronRightIcon/></Text></Link>
            </Box>
        </Box>
        <Grid templateColumns={`repeat(${personalCareData.length},1fr)`} gap={3}>
            {
                personalCareData.map(((el, index) => (
                    <Box key={el.id} bg='#fff' p='30px 20px' borderRadius={6} boxShadow='md' cursor='pointer'>
                        <Center><Image h='180px' w='100%' src={process.env.PUBLIC_URL+`/Images/netmedPC${index+1}.jpg`}></Image></Center>
                        <Center><Text mt='20px' fontWeight={'600'}>{el.title}</Text></Center>
                    </Box>
                )))
            }
        </Grid>
    </Box>
  )
}
