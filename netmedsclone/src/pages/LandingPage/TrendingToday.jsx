import { Box, Grid, Heading, Image } from '@chakra-ui/react'
import React from 'react'

export default function() {
    const trending = [
        {
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        }
    ]
  return (
    <Box  mb='30px' p='8px 25px'>
        <Box display={'flex'} alignItems='center' justifyContent='space-between' mb='30px'>
            <Box>
            <Heading as='h2' fontSize='25px' fontWeight='500'>Trending Today</Heading>
            </Box>
        </Box>
        <Grid gridTemplateColumns={`repeat(${trending.length},1fr)`} gap={4}>
            {
                trending.map(el => (
                    <Box key={el.id}>
                        <Image borderRadius={'10px'} w='100%' h='100%' src={process.env.PUBLIC_URL+`/Images/netmedT${el.id}.${el.id==2 ? 'png': 'jpg'}`}></Image>
                    </Box>
                ))
            }
        </Grid>

    </Box>
  )
}
