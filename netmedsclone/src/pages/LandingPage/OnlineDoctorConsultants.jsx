import React from 'react'
import { Box, Button, Center, Flex, Grid, Heading, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react'

export const OnlineDoctorConsultants = () => {
  return (
    <Box borderTop='1px solid #dddde0' borderBottom='1px solid #dddde0' p='30px 0' m='0 25px 20px 25px'>
        <Grid gap={{base: '10px', md: '0'}} gridTemplateColumns={{base: 'repeat(1,1fr)', md: 'repeat(2,1fr)'}} justifyContent='space-between'>
            <Flex>
                <Center>
                    <Box>
                        <Image w={{base: '100px', md: '90px'}} h={{base: '100px', md: '90px'}} src='https://www.netmeds.com/assets/glorymsite/images/icons/new_icons/online_consultation.svg'></Image>
                   </Box>
                </Center>
                <Box ml='30px'>
                    <Heading as='h6' mb='10px' size={'md'} fontWeight='500'>Easy Online Doctor Consultations</Heading>
                        <Text fontSize={'sm'}>Skip the queue! Speak with a doctor right now</Text>
                        <Text mb='5px' fontSize={'sm'}>More than 25+ specialities to choose from, starting at just ₹149</Text>
                </Box>
            </Flex>
            <Flex alignItems={'center'} justifyContent={{base: '', md: 'flex-end'}}>
                <Box>
                    <Button h='50px' letterSpacing={'1px'} borderRadius={'3px'} boxShadow= '0 6px 12px 0 rgb(36 174 177 / 40%)'  p='0 20px' bg='#24aeb1' color='#fff' _hover={{bg:'#24aeb1'}} fontSize='14px'>Learn More</Button>
                </Box>
            </Flex>
        </Grid>
    </Box>
  )
}
