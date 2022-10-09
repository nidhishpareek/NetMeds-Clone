import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Center, Grid, Heading, Image, Link, Text } from "@chakra-ui/react";

export default function ShopByCategory() {
    const showByCategory = [
        {
            id: 1,
            title: 'Ayush'
        },
        {
            id: 2,
            title: 'Hair Care'
        },
        {
            id: 3,
            title: 'Body Care'
        },
        {
            id: 4,
            title: 'Treatments'
        },
        {
            id: 5,
            title: 'Cold And Fever'
        }
    ]
  return (
    <Box p={2}>
        <Box display={'flex'} alignItems='center' justifyContent='space-between' mb='30px'>
            <Box>
            <Heading as='h2' fontSize='25px' fontWeight='500'>Shop By Category</Heading>
            </Box>
            <Box>
                <Link color='red' style={{textDecoration: 'none'}} ><Text>View All <ChevronRightIcon/></Text></Link>
            </Box>
        </Box>
        <Grid templateColumns={'repeat(5,1fr)'} gap={3}>
            {
                showByCategory.map(((el, index) => (
                    <Box bg='#fff' p='30px 20px' borderRadius={6} boxShadow='md' cursor='pointer'>
                        <Center><Image h='180px' w='100%' src={process.env.PUBLIC_URL+`/Images/netmedSBC${index+1}.jpg`}></Image></Center>
                        <Center><Text mt='20px'>{el.title}</Text></Center>
                    </Box>
                )))
            }
        </Grid>
    </Box>
  )
}
