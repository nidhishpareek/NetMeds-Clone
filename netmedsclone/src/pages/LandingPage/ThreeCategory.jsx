import { ChevronRightIcon } from "@chakra-ui/icons"
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react"

export const ThreeCategory = () => {
    const threeCategory = [
        {
            id: 1,
            boldTitle: 'Order Medicine',
            title: 'Save upto 25% off'
        },
        {
            id: 2,
            boldTitle: 'Beauty',
            title: 'Save upto 40% off'
        },
        {
            id: 3,
            boldTitle: 'Wellness',
            title: 'Flat 15% off'
        }
    ]
   return  <Box p='8px 25px' mb='10px' display={{base: 'none', md: 'block'}}>
   <Grid gap={{base: 2, md: 6}} gridTemplateColumns={{base: 'repeat(1,1fr)', md: 'repeat(2,1fr)', lg: 'repeat(3,1fr)'}}>
        {
            threeCategory.map(el => (
                <Flex key={el.id} p={{base: '5px'}} borderRadius='5px' bg='#fff' cursor='pointer'>
                    <Box width={'30%'} display={'flex'} justifyContent='center' alignItems={'center'} p='0 10px'>
                        <Image pr='10px' w='150px' h='60px' src={process.env.PUBLIC_URL + `/Images/netmed3C${el.id}.svg`}></Image>
                    </Box>
                    <Box width='80%' display={'flex'} justifyContent={'space-between'}>
                            <Box display={'grid'} placeContent='center'>
                                <Text fontSize={{base: '12px', md: '15px', lg: '20px'}} as='b'>{el.boldTitle}</Text>
                                <Text color={'#5ea533 '} fontSize={'15px'} fontWeight='600'>{el.title}</Text>
                            </Box>
                            <Box display={'grid'} placeContent='center'>
                                <ChevronRightIcon color={'gray.500'}/>
                            </Box>
                    </Box>
                </Flex>
            ))
        }
   </Grid>
</Box>
}