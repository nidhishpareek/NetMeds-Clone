import { ChevronRightIcon } from "@chakra-ui/icons"
import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react"

export const PaymentsPartner = () => {
  return (
    <Box p={2} mb='10px'>
        <Box display={'flex'} alignItems='center' justifyContent='space-between' mb='30px'>
            <Box>
            <Heading as='h2' fontSize='25px' fontWeight='500'>Payments Partners Offers</Heading>
            </Box>
            <Box>
                <Link color='red' style={{textDecoration: 'none'}} ><Text>View All <ChevronRightIcon/></Text></Link>
            </Box>
        </Box>
        <Flex gap={4}>
            <Flex p={2} borderRadius='5px' bg='#fff'>
                <Box display={'flex'} justifyContent='center' alignItems={'center'} p='0 10px'>
                    <Image borderRight={'1px solid gray'} pr='10px' w='80px' h='40px' src={process.env.PUBLIC_URL + '/Images/netmedP1.png'}></Image>
                </Box>
                <Box>
                    <Text fontSize={'12px'} as='b'>Get up to Rs. 1000 Simpl Cashback* (5%)!..</Text>
                    <Text fontSize={'12px'}>Get up to Rs. 1000 Simpl Cashback (5%) on your FIRST-EVER payment via Simpl for ANY purchases* of AN..</Text>
                </Box>
            </Flex>
            <Flex p={2} borderRadius='5px' bg='#fff'>
                <Box display={'flex'} justifyContent='center' alignItems={'center'} p='0 10px'>
                    <Image borderRight={'1px solid gray'} pr='10px' w='80px' h='40px' src={process.env.PUBLIC_URL + '/Images/netmedP2.png'}></Image>
                </Box>
                <Box>
                    <Text fontSize={'12px'} as='b'>Use Pay with Rewards, Get max. Rs. 1000 Cashback!..</Text>
                    <Text fontSize={'12px'}>Get assured cashback of max. Rs. 1000, when you pay using the “Pay with Rewards” payment option ..</Text>
                </Box>
            </Flex>
            <Flex p={2} borderRadius='5px' bg='#fff'>
                <Box display={'flex'} justifyContent='center' alignItems={'center'} p='0 10px'>
                    <Image borderRight={'1px solid gray'} pr='10px' w='80px' h='40px' src={process.env.PUBLIC_URL + '/Images/netmedP3.png'}></Image>
                </Box>
                <Box>
                    <Text fontSize={'12px'} as='b'>Get up to Rs. 300 Paytm Cashback!..</Text>
                    <Text fontSize={'12px'}>Get Paytm Cashback of max. Rs. 300 on a minimum purchase of ANY products* worth Rs. 599, when you pa..</Text>
                </Box>
            </Flex>
        </Flex>
    </Box>
  )
}
