import { useDisclosure,Button,
    Drawer,Stack,Box,FormLabel,
    Input,Select,Textarea,
    DrawerOverlay,DrawerContent,
    DrawerCloseButton, DrawerFooter,
    DrawerHeader,DrawerBody,Checkbox,
    InputGroup,InputLeftAddon, Flex,Text,Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,CloseButton,FormControl} from '@chakra-ui/react'
 
 import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
 import React from "react"
 
  export const NewCarddetails=()=>{
           
       const { isOpen, onOpen, onClose } = useDisclosure()
       const firstField = React.useRef()
     
       const [message, setMessage] = React.useState('');
       const [cvvdata, setcvvdata] = React.useState('');
       const [yydata, setyydata] = React.useState('');
       const [mmdata, setmmdata] = React.useState('');
       const isAnonymous = false;
        
        
        
      
    
       return (
        <FormControl isRequired>
    
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
                       type="number"
                       id="message"
                       name="message"
                       value={message}
                       onChange={event => setMessage(event.target.value)}
                     />

                   </Box>
 
 
                l<Flex>
                <Input type="number" htmlSize={5} width='auto' placeholder='MM' required
                value={mmdata}
                
                onChange={event => setmmdata(event.target.value)}
                />
                <Input type="number" htmlSize={5} width='auto' placeholder='YY' required
                value={yydata}
                
                onChange={event => setyydata(event.target.value)}
                />
                
                <Input type="number" htmlSize={5} width='auto' placeholder='CVV' required 
                value={cvvdata}
                
                onChange={event => setcvvdata(event.target.value)}
                />
                </Flex>
 
 
 
 
                   <Box>
                     <FormLabel htmlFor='username'>Name On Card</FormLabel>
                     <Input
                       ref={firstField}
                       id='FirstName'
                       placeholder='Name on Card'
                       type="text"
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
                    
                    if(message.length!=16 ){
                        alert(" Wrong Card Number  You Enter !  "+message.length)
                    }
                    else if(mmdata.length!=2){
                      alert(" Wrong Month Details Must Be 2 digit ! ")
                    }
                    else if(yydata.length!=2){
                      
                      alert(" Wrong Year Details Must Be Year Last 2 digit ! ")
                    }
                    else if(cvvdata.length!=3){
                      
                      alert(" Wrong CVV Details Check CVV on Backside Of Your Card ! ")
                    }
                    else{
                        alert(" Payment successful :)")
                    }
                }}
                    >Pay</Button>
               </DrawerFooter>
             </DrawerContent>
           </Drawer>
         </FormControl>
       )
     }
   
  