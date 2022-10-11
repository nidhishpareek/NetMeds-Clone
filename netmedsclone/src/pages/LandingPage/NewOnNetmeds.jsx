import { Box, Grid, Heading, Image } from '@chakra-ui/react'
import React from 'react'

export default function NewOnNetmeds() {
    const newOnNetmeds = [
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
    <Box mb='30px' p='8px 25px' bgGradient='linear(#fff 0%, #fff 25%, #f3f7fb 50%)'>
        <Box display={'flex'} alignItems='center' justifyContent='space-between' mb='30px'>
            <Box>
            <Heading as='h2' fontSize='25px' fontWeight='500'>New On Netmeds</Heading>
            </Box>
        </Box>
        <Grid gridTemplateColumns={`repeat(${newOnNetmeds.length},1fr)`} gap={4}>
            {
                newOnNetmeds.map(el => (
                    <Box key={el.id}>
                        <Image borderRadius={'10px'} w='100%' h='100%' src={process.env.PUBLIC_URL+`/Images/netmedNON${el.id}.jpg`}></Image>
                    </Box>
                ))
            }
        </Grid>

    </Box>
  )
}
