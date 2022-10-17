import { useDisclosure,Button,
   Drawer,Stack,Box,
   Input,Select,Textarea,
   DrawerOverlay,DrawerContent,
   DrawerCloseButton, DrawerFooter,
   DrawerHeader,DrawerBody,
   InputGroup,InputLeftAddon, Flex,FormControl,
   FormLabel,
   FormErrorMessage,
   FormHelperText,} from '@chakra-ui/react'

import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import React from "react"
import { useState } from 'react'

var userAddressArray=JSON.parse(localStorage.getItem("userAddress")) || [];

 export const SlideAddress=()=>{

      const { isOpen, onOpen, onClose } = useDisclosure()
      const firstField = React.useRef()

      // console.log("useref",firstField.current)
      const isError = Input === ''

      const [address,setAddress]=useState({FirstName:"",LastName:"",Address:"",Landmark:"",Phonenumber:"",City:"",State:"",PinCode:""})

      const{FirstName,LastName,Address,Landmark,Phonenumber,City,State,PinCode}=address;

      const handelChange=(e)=>{
        const {name,value} = e.target;
        setAddress({
         ...address,
          [name]:value
        })
      }


      const handelClick=()=>{
        var UserAddressobj={...address};

        userAddressArray.push(UserAddressobj);
    
        localStorage.setItem("userAddress",JSON.stringify(userAddressArray));

        
       
    }

      return (
        <FormControl isInvalid={isError}>
   
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
                      name="PinCode" value={PinCode}  onChange={handelChange}
                    />
                  </Box>


               l<Flex>
               <Input htmlSize={5} width='auto' placeholder='City' name="City" value={City}  onChange={handelChange} />
               <Input htmlSize={5} width='auto' placeholder='State' name="State" value={State}  onChange={handelChange} />
               </Flex>




                  <Box>
                    <FormLabel htmlFor='username'></FormLabel>
                    <Input
                      ref={firstField}
                      id='FirstName'
                      placeholder='First Name'
                      name="FirstName" value={FirstName}  onChange={handelChange}
                    />
                  </Box>
                  <Box>
                    <FormLabel htmlFor='username'></FormLabel>
                    <Input
                      ref={firstField}
                      id='LastName'
                      placeholder='Last Name'
                      name="LastName" value={LastName}  onChange={handelChange}
                    />
                  </Box>

                  <Box>
                    <FormLabel htmlFor='username'></FormLabel>
                    <Input
                      ref={firstField}
                      id='Address'
                      placeholder='Address'
                      name="Address" value={Address}  onChange={handelChange}
                    />
                  </Box>

                  <Box>
                    <FormLabel htmlFor='username'></FormLabel>
                    <Input
                      ref={firstField}
                      id='Landmark'
                      placeholder='Landmark'
                      name="Landmark" value={Landmark}  onChange={handelChange}
                    />
                  </Box>

                  <InputGroup>
                     <InputLeftAddon children='+91' />
                      <Input type='tel' placeholder='phone number' name="Phonenumber" value={Phonenumber}  onChange={handelChange} />
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
                <Button colorScheme='green' width='100%' onClick={handelClick}>Save Address</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          {/* {!isError ? (
        <FormHelperText>
         
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )} */}
          </FormControl>
      )
    }
  
 