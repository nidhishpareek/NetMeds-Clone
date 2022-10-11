import React from 'react'
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Center, Grid, Heading, Image, Link, Text } from "@chakra-ui/react";

export default function HealthConcern() {
    const healthConcernData = [
        {
            id: 1,
            title: 'Lung Care'
        },
        {
            id: 2,
            title: 'Weight Care'
        },
        {
            id: 3,
            title: "Women's Care"
        },
        {
            id: 4,
            title: 'Bone And Joint Pain'
        },
        {
            id: 5,
            title: 'Cold And Fever'
        }
    ]
  return (
    <Box p='0 25px' mb='30px'>
        <Box display={'flex'} alignItems='center' justifyContent='space-between' mb='30px'>
            <Box>
            <Heading as='h2' fontSize='25px' fontWeight='500'>Health Concerns</Heading>
            </Box>
            <Box>
                <Link color='red' style={{textDecoration: 'none'}} ><Text>View All <ChevronRightIcon/></Text></Link>
            </Box>
        </Box>
        <Grid templateColumns={`repeat(${healthConcernData.length},1fr)`} gap={3}>
            {
                healthConcernData.map(((el, index) => (
                    <Box key={el.id} bg='#fff' h='300px' p='30px 20px' borderRadius={6} boxShadow='md' cursor='pointer'>
                        <Center><Image mt='30px' h='100px' w='50%' src={process.env.PUBLIC_URL+`/Images/netmedHC${index+1}.jpg`}></Image></Center>
                        <Center><Text  fontWeight={'600'} mt='50px'>{el.title}</Text></Center>
                    </Box>
                )))
            }
        </Grid>
    </Box>
  )
}
