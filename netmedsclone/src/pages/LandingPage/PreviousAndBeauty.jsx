import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Circle, Flex, Heading, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

export default function PreviousAndBeauty() {
  return (
    <Box p='8px 25px' m='20px 0' display={{base: 'none', md: 'flex'}}>
        <Flex w='100%' borderRight='1px solid rgb(181, 181, 181)' p='0 20px 0 0'>
            <Box >
                <Heading as='h2' fontSize='25px' mb='10px' fontWeight='500'>Previous Orders</Heading>
                <Text>Your previously ordered products</Text>
                <Flex mt='40px'>
                    <Text color={'#24aeb1'} mr='30px' cursor={'pointer'}>View Orders</Text>
                    <Circle w='30px' h='30px' cursor={'pointer'} bg={'#24aeb1'}><ChevronRightIcon color={'#fff'}/></Circle>
                </Flex>
            </Box>
            <Spacer/>
            <Box display={'grid'} placeContent='center'>
                <Center><Image w='120px' h='120px' src={process.env.PUBLIC_URL+`/Images/netmedsPrevious_products.svg`}></Image></Center>
            </Box>
        </Flex>
        <Flex w='100%' pl='20px'>
            <Box>
                <Heading as='h2' fontSize='25px' mb='10px' fontWeight='500'>Beauty Products</Heading>
                <Text color='#80b552' fontWeight={'400'}>Save Upto 40% off</Text>
                <Flex>
                    <Button h='35px' letterSpacing={'1px'} borderRadius={'3px'} boxShadow= '0 6px 12px 0 rgb(36 174 177 / 40%)'  p='0 20px' bg='#24aeb1' color='#fff' _hover={{bg:'#24aeb1'}} fontSize='14px' mt='40px'>Explore Beauty</Button>
                </Flex>
            </Box>
            <Spacer />
            <Box display={'grid'} placeContent='center'>
                <Center><Image w='120px' h='120px' src={process.env.PUBLIC_URL+`/Images/netmedBeauty_products.svg`}></Image></Center>
            </Box>
        </Flex>
    </Box>
  )
}
