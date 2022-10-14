import React from 'react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Center, Grid, Heading, Image, Link, Text } from '@chakra-ui/react'

export default function HealthLibrary() {
    const healthLibraryData = [
        {
            id: 1,
            title: 'World Arthritis Day 2022: What Are 5 Major Bone Co..'
        },
        {
            id: 2,
            title: 'Licorice/Mulethi For Skin: 5 Superb Beauty Benefit..'
        },
        {
            id: 3,
            title: 'Evoked Potentials Testing: What Is It And What To ..'
        },
        {
            id: 4,
            title: 'Oats Diet For Weight Loss: Know How This Whole Gra..'
        }
    ]
  return (
    <Box>
        <Box bg='#ef4281' h='150px' p='15px 30px'>
            <Box display={'flex'} alignItems='center' justifyContent='space-between' mb='20px'>
                <Box>
                    <Heading color='#fff' as='h2' fontSize='25px' fontWeight='500'>Health Library</Heading>
                </Box>
                <Box>
                    <Link color='#fff' style={{textDecoration: 'none'}} ><Text>View All <ChevronRightIcon/></Text></Link>
                </Box>
            </Box>
        </Box>
        <Box h={{base: '90px', lg: '140px'}} position='relative'>
            <Box overflow={{base: 'scroll', md: 'hidden'}} w='100%' position={'absolute'} bottom='25px'>
                <Grid m='15px 30px' gap='10px' templateColumns={`repeat(${healthLibraryData.length},1fr)`} g={3}>
                    {
                        healthLibraryData.map(((el, index) => (
                            <Box w={{base: '200px', md: '100%'}} h={{base: '140px', lg:'190px'}} key={el.id} boxShadow='rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px' bg='#fff' borderRadius={6} cursor='pointer'>
                                <Center><Image  w='100%' borderRadius='6px 6px 0 0' src={process.env.PUBLIC_URL+`/Images/netmedHL${index+1}.jpg`}></Image></Center>
                                <Center><Text noOfLines={[1,2]} textOverflow="ellipsis" m='15px' fontSize={{base: '12px', lg: '15px'}} h='40px' fontWeight={'600'}>{el.title}</Text></Center>
                            </Box>
                        )))
                    }
                </Grid>
            </Box>
        </Box>
    </Box>
  )
}
