import React from "react";
import { useDisclosure,Button,
    Drawer,Stack,Box,FormLabel,
    Input,Select,Textarea,
    DrawerOverlay,DrawerContent,
    DrawerCloseButton, DrawerFooter,
    DrawerHeader,DrawerBody,
    InputGroup,InputLeftAddon, Flex,Text} from '@chakra-ui/react' 
 
 import { SpinnerIcon,CheckCircleIcon,RepeatIcon } from '@chakra-ui/icons'

export const OrderStatus=()=>{
    return (
        <Box bg='#151b39' w='70%' p={4} color='white' m="auto" borderRadius="10px"  h="fit-content">
             <Flex justifyContent="space-between">
          <Text  fontSize="22px">Order Review</Text>
          
          
          <Box h="fit-content" display='flex' justifyContent='space-around' w="300px">
            
            <Box >
            <SpinnerIcon m='5px'/>
            <Text fontSize='12px'>Your cart</Text>

            </Box>
            <Box>
            <RepeatIcon m='5px'/>
            <Text fontSize='12px'>Order review</Text>
            </Box>
          

          <Box>
          <CheckCircleIcon m='5px'/>
          <Text fontSize='12px'>Payment Details </Text>
          </Box>
         
          </Box>

             </Flex>
        </Box>
    )
}