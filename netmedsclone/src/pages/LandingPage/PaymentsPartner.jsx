import { ChevronRightIcon } from "@chakra-ui/icons"
import { Box, Flex, Grid, Heading, Image, Link, Text } from "@chakra-ui/react"

export const PaymentsPartner = () => {
    const paymentsdata = [
        {
            id: 1,
            boldTitle: 'Get up to Rs. 1000 Simpl Cashback* (5%)!..',
            title: 'Get up to Rs. 1000 Simpl Cashback (5%) on your FIRST-EVER payment via Simpl for ANY purchases* of AN..'
        },
        {
            id: 2,
            boldTitle: 'Use Pay with Rewards, Get max. Rs. 1000 Cashback!..',
            title: 'Get assured cashback of max. Rs. 1000, when you pay using the “Pay with Rewards” payment option ..'
        },
        {
            id: 3,
            boldTitle: 'Get up to Rs. 300 Paytm Cashback!..',
            title: 'Get Paytm Cashback of max. Rs. 300 on a minimum purchase of ANY products* worth Rs. 599, when you pa..'
        }
    ]
  return (
    <Box p='8px 25px' mb='10px' display={{base: 'none', md: 'none', lg: 'block'}}>
        <Box display={'flex'} alignItems='center' justifyContent='space-between' mb='30px'>
            <Box>
            <Heading as='h2' fontSize='25px' fontWeight='500'>Payments Partners Offers</Heading>
            </Box>
            <Box>
                <Link color='red' style={{textDecoration: 'none'}} ><Text>View All <ChevronRightIcon/></Text></Link>
            </Box>
        </Box>
        <Flex gap={4}>
            {
                paymentsdata.map(el => (
                    <Flex key={el.id} p={2} borderRadius='5px' bg='#fff'>
                        <Box display={'flex'} justifyContent='center' alignItems={'center'} p='0 10px'>
                            <Image borderRight={'1px solid gray'} pr='10px' w='80px' h='40px' src={process.env.PUBLIC_URL + `/Images/netmedP${el.id}.png`}></Image>
                        </Box>
                        <Box>
                            <Text fontSize={'12px'} as='b'>{el.boldTitle}</Text>
                            <Text fontSize={'12px'}>{el.title}</Text>
                        </Box>
                    </Flex>
                ))
            }
        </Flex>
    </Box>
  )
}
