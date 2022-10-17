import { Box, Button, Center, Flex, Grid, Heading, Image, ListItem, UnorderedList } from '@chakra-ui/react'
import React from 'react'

export const FirstMembership = () => {
  return (
    <Box borderTop='1px solid #dddde0' w='100%' borderBottom='1px solid #dddde0' p='30px 25px' mb='20px' >
        <Grid gap={{base: '10px', md: '0'}} gridTemplateColumns={{base: 'repeat(1,1fr)', md: 'repeat(2,1fr)'}}>
            <Flex>
                <Center>
                    <Box>
                        <Image w={{base: '100px', md: 'auto'}} h={{base: '100px', md: 'auto'}} src='https://www.netmeds.com/assets/gloryweb/images/icons/new-icons/netmeds_first_membership.svg'></Image>
                   </Box>
                </Center>
                <Box ml='30px'>
                    <Heading as='h6' size={'md'} fontWeight='500'>Netmeds First Membership</Heading>
                    <UnorderedList ml='30px' fontSize={'sm'} mt='10px'>
                        <ListItem mb='5px'>Get special discounts and offers on Netmeds services.</ListItem>
                        <ListItem mb='5px'>Get 2.5% NMS Cash on pre-paid, Medicine orders of ANY value!</ListItem>
                    </UnorderedList>
                </Box>
            </Flex>
            <Flex ml={{base: '', md: '45%'}} p={{base: '', md: '0'}} alignItems={'center'} justifyContent='space-between'>
                <Box color={'#ef4281'} fontWeight='600'><i className="fa-solid fa-bolt"></i> Starting at ₹299</Box>
                <Box>
                    <Button h='50px' letterSpacing={'1px'} borderRadius={'3px'} boxShadow= '0 6px 12px 0 rgb(36 174 177 / 40%)'  p='0 20px' bg='#24aeb1' color='#fff' _hover={{bg:'#24aeb1'}} fontSize='14px'>Explore Plans</Button>
                </Box>
            </Flex>
        </Grid>
    </Box>
  )
}
