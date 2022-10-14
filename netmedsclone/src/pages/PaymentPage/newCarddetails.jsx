import { useDisclosure,Button,
    Drawer,Stack,Box,FormLabel,
    Input,Select,Textarea,
    DrawerOverlay,DrawerContent,
    DrawerCloseButton, DrawerFooter,
    DrawerHeader,DrawerBody,Checkbox,
    InputGroup,InputLeftAddon, Flex,Text,Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,CloseButton} from '@chakra-ui/react'
 
 import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
 import React from "react"
 
  export const NewCarddetails=()=>{
           
       const { isOpen, onOpen, onClose } = useDisclosure()
       const firstField = React.useRef()
     
       const [message, setMessage] = React.useState('');
       const isAnonymous = false;
        
        
        
      
    
       return (
         <>
    
           <Button w="40%" colorScheme='teal' onClick={onOpen}>
            Add New Card
           </Button>
           <Drawer
             isOpen={isOpen}
             placement='right'
             initialFocusRef={firstField}
             onClose={onClose}
           >
             <DrawerOverlay />
             <DrawerContent>
               <DrawerCloseButton />
               <DrawerHeader borderBottomWidth='1px'>
               ENTER CARD DETAILS
               </DrawerHeader>
     
               <DrawerBody>
                 <Stack spacing='24px'>
                   <Box>
                     <FormLabel htmlFor='username'>Card Number</FormLabel>
                     <Input
                       type="text"
                       id="message"
                       name="message"
                       value={message}
                       onChange={event => setMessage(event.target.value)}
                     />

                   </Box>
 
 
                l<Flex>
                <Input htmlSize={5} width='auto' placeholder='MM' required/>
                <Input htmlSize={5} width='auto' placeholder='YY' required/>
                
                <Input htmlSize={5} width='auto' placeholder='CVV' required/>
                </Flex>
 
 
 
 
                   <Box>
                     <FormLabel htmlFor='username'></FormLabel>
                     <Input
                       ref={firstField}
                       id='FirstName'
                       placeholder='Name on Card'
                     />
                   </Box>

                   <Box>
                   <Flex align='center'>
                    <Checkbox size='md' colorScheme='green'  > </Checkbox>
                        <Text fontSize='14px'm='5px'>Save this card for future payments</Text>
                    </Flex>
                     </Box>
 
                   
                 </Stack>
               </DrawerBody>
     
               <DrawerFooter borderTopWidth='1px'>
                 <Button colorScheme='green' width='100%' disabled={isAnonymous ? true : false} onClick={()=>{
                    
                    if(message.length==16){
                        alert(" Payment Sucsses ")
                    }
                    else{
                        alert("Wrong Details")
                    }
                }}
                    >Pay</Button>
               </DrawerFooter>
             </DrawerContent>
           </Drawer>
         </>
       )
     }
   
  