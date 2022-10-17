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
import React, { useContext } from "react"
import { useState } from 'react'
import { AppContext } from '../../context/AppContext';
import { Navigate, useNavigate } from 'react-router-dom';
import { OrderReview } from './orderReview';

var userAddress=JSON.parse(localStorage.getItem("userAddress")) || {};

 export const SlideAddress=()=>{

      const { isOpen, onOpen, onClose } = useDisclosure()
      const firstField = React.useRef()

     

      // console.log("useref",firstField.current)
      const isError = Input === ''

      // const [address,setAddress]=useState({FirstName:"",LastName:"",Address:"",Landmark:"",Phonenumber:"",City:"",State:"",PinCode:""})
      const [userAddressdata, setuserAddressdata] = useState({FirstName:"",LastName:"",Address:"",Landmark:"",Phonenumber:"",City:"",State:"",PinCode:""})
      const{FirstName,LastName,Address,Landmark,Phonenumber,City,State,PinCode}=userAddressdata;

      
       
      const handelChange=(e)=>{
        const {name,value} = e.target;
        setuserAddressdata({
         ...userAddressdata,
          [name]:value
        })
      }


      

      const handelClick=()=>{
        var UserAddressobj={...userAddressdata};
        localStorage.setItem("userAddress",JSON.stringify(UserAddressobj));

        onClose()
        window.location.reload(false);

        
       
    }


    var userDetails=JSON.parse(localStorage.getItem("userDetails"))
      
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
                      type="number"
                      name="PinCode" value={PinCode}  onChange={handelChange}
                      required
                    />
                  </Box>


               l<Flex>
               <Input htmlSize={5} width='auto' type="text" placeholder='City' name="City" value={City} required onChange={handelChange} />
               <Input htmlSize={5} width='auto' type="text" placeholder='State' name="State" value={State} required onChange={handelChange} />
               </Flex>




                  <Box>
                    <FormLabel htmlFor='username'>First Name</FormLabel>
                    <Input
                      ref={firstField}
                      id='FirstName'
                      placeholder='First Name'
                      type="text"
                      name="FirstName" value={userDetails.firstName}  
                      required
                    />
                  </Box>
                  <Box>
                    <FormLabel htmlFor='username'>Last Name</FormLabel>
                    <Input
                      ref={firstField}
                      id='LastName'
                      placeholder='Last Name'
                      type="text"
                      name="LastName" value={userDetails.lastName}  
                      required 
                    />
                  </Box>

                  <Box>
                    <FormLabel htmlFor='username'></FormLabel>
                    <Input
                      ref={firstField}
                      id='Address'
                      placeholder='Address'
                      type="text"
                      name="Address" value={Address}  onChange={handelChange}
                      required
                    />
                  </Box>

                  <Box>
                    <FormLabel htmlFor='username'></FormLabel>
                    <Input
                      ref={firstField}
                      id='Landmark'
                      placeholder='Landmark'
                      type="text"
                      name="Landmark" value={Landmark}  onChange={handelChange}
                      required
                    />
                  </Box>

                  <InputGroup>
                     <InputLeftAddon children='+91' />
                      <Input required type="number" placeholder='phone number' name="Phonenumber" value={userDetails.mobileNumber}  onChange={handelChange} />
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
  
 