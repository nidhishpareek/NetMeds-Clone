import { useDisclosure,Button,
   Drawer,Stack,Box,FormLabel,
   Input,Select,Textarea,
   DrawerOverlay,DrawerContent,
   DrawerCloseButton, DrawerFooter,
   DrawerHeader,DrawerBody,
   InputGroup,InputLeftAddon, Flex} from '@chakra-ui/react'

import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import React from "react"

 export const SlideAddress=()=>{

      const { isOpen, onOpen, onClose } = useDisclosure()
      const firstField = React.useRef()
    
      return (
        <>
   
          <Button leftIcon={<AddIcon />} colorScheme='teal' onClick={onOpen}>
            Change Address
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
              ADD ADDRESS
              </DrawerHeader>
    
              <DrawerBody>
                <Stack spacing='24px'>
                  <Box>
                    <FormLabel htmlFor='username'></FormLabel>
                    <Input
                      ref={firstField}
                      id='username'
                      placeholder='Pin Code'
                    />
                  </Box>


               l<Flex>
               <Input htmlSize={5} width='auto' placeholder='City' />
               <Input htmlSize={5} width='auto' placeholder='State' />
               </Flex>




                  <Box>
                    <FormLabel htmlFor='username'></FormLabel>
                    <Input
                      ref={firstField}
                      id='FirstName'
                      placeholder='First Name'
                    />
                  </Box>
                  <Box>
                    <FormLabel htmlFor='username'></FormLabel>
                    <Input
                      ref={firstField}
                      id='LastName'
                      placeholder='Last Name'
                    />
                  </Box>

                  <Box>
                    <FormLabel htmlFor='username'></FormLabel>
                    <Input
                      ref={firstField}
                      id='Address'
                      placeholder='Address'
                    />
                  </Box>

                  <Box>
                    <FormLabel htmlFor='username'></FormLabel>
                    <Input
                      ref={firstField}
                      id='Landmark'
                      placeholder='Landmark'
                    />
                  </Box>

                  <InputGroup>
                     <InputLeftAddon children='+91' />
                      <Input type='tel' placeholder='phone number' />
                  </InputGroup>
    
                  {/* <Box>
                    <FormLabel htmlFor='owner'>Select Owner</FormLabel>
                    <Select id='owner' defaultValue='segun'>
                      <option value='segun'>Segun Adebayo</option>
                      <option value='kola'>Kola Tioluwani</option>
                    </Select>
                  </Box> */}
    
                  {/* <Box>
                    <FormLabel htmlFor='desc'>Description</FormLabel>
                    <Textarea id='desc' />
                  </Box> */}
                  
                </Stack>
              </DrawerBody>
    
              <DrawerFooter borderTopWidth='1px'>
                <Button colorScheme='green' width='100%'>Save Address</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      )
    }
  
 