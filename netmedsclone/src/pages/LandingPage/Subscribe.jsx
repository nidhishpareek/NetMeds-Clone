import { Box, Button, Center, Flex, Grid, Heading, Image, ListItem, UnorderedList } from '@chakra-ui/react'

export const Subscribe = () => {
  return (
    <Box borderTop='1px solid #dddde0' borderBottom='1px solid #dddde0' p='30px 0' m='0 25px 20px 25px'>
        <Grid gap={{base: '10px', md: '0'}} gridTemplateColumns={{base: 'repeat(1,1fr)', md: 'repeat(2,1fr)'}}>
            <Flex>
                <Center>
                    <Box>
                        <Image h='100px' src='https://www.netmeds.com/assets/gloryweb/images/icons/new-icons/subscribe_and_schedule.svg'></Image>
                   </Box>
                </Center>
                <Box ml='30px'>
                    <Heading as='h6' size={'md'} fontWeight='500'>Get medicine refill every month</Heading>
                    <UnorderedList ml='30px' fontSize={'sm'} mt='10px'>
                        <ListItem mb='5px'>Subscribe and schedule next deliveries</ListItem>
                        <ListItem>Subscribe for 12 months and get the last month free. *T&C Apply</ListItem>
                    </UnorderedList>
                </Box>
            </Flex>
            <Flex alignItems={'center'} justifyContent={{base: '', md: 'flex-end'}}>
                <Box>
                    <Button h='50px' letterSpacing={'1px'} borderRadius={'3px'} boxShadow= '0 6px 12px 0 rgb(36 174 177 / 40%)'  p='0 20px' bg='#24aeb1' color='#fff' _hover={{bg:'#24aeb1'}} fontSize='14px'>Subscribe</Button>
                </Box>
            </Flex>
        </Grid>
    </Box>
  )
}
