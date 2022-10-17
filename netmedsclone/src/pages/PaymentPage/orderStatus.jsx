import React from "react";
import { useDisclosure,Button,
    Drawer,Stack,Box,FormLabel,
    Input,Select,Textarea,
    DrawerOverlay,DrawerContent,
    DrawerCloseButton, DrawerFooter,
    DrawerHeader,DrawerBody,
    InputGroup,InputLeftAddon, Flex,Text,Progress} from '@chakra-ui/react' 
 
 import { SpinnerIcon,CheckCircleIcon,RepeatIcon } from '@chakra-ui/icons'

export const OrderStatus=()=>{
    return (
        <Box bg='#151b39' w={{ base: '90%', md: 'auto', lg: '70%' }} p={4} color='white'  borderRadius="10px"  h="fit-content" m={{base:"20px", lg:"auto"}}>
             <Flex justifyContent="space-between">
          <Text  fontSize="22px">Order Review</Text>
          
          
          <Box h="fit-content" display='flex' justifyContent='space-around' w="300px">
            
            <Box align='center'>
            <SpinnerIcon m='5px' />
            <Text fontSize='10px'>Your cart</Text>

            </Box>


            
            
            <Box align='center'>
            <RepeatIcon m='5px'/>
            <Text fontSize='10px'>Order review</Text>
            </Box>
          

          <Box align='center'>
          <CheckCircleIcon m='5px'/>
          <Text fontSize='10px'>Payment Details </Text>
          </Box>
         
          </Box>

             </Flex>
        </Box>
    )
}