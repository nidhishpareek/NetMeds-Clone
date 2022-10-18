import {
  useDisclosure, Button,
  Drawer, Stack, Box, FormLabel,
  Input, Select, Textarea,
  DrawerOverlay, DrawerContent,
  DrawerCloseButton, DrawerFooter,
  DrawerHeader, DrawerBody, Checkbox,
  InputGroup, InputLeftAddon, Flex, Text, Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription, CloseButton, FormControl
} from '@chakra-ui/react'

import { Navigate, useNavigate } from "react-router-dom";

import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import React from "react"
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { useDispatch } from 'react-redux';
import { EmptyCart, EMPTYCART, removeCartRedux } from '../../Redux/action';
import axios from 'axios';
import { Cart_API } from '../../api';

export const NewCarddetails = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef()

  const [message, setMessage] = React.useState('');
  const [cvvdata, setcvvdata] = React.useState('');
  const [yydata, setyydata] = React.useState('');
  const [mmdata, setmmdata] = React.useState('');
  const isAnonymous = false;
  const { deleteAll } = useContext(AppContext);
  const dispatch = useDispatch();
  const {cartData} = useContext(AppContext);

  const navigateToDetails = useNavigate();
  const handleNavigate = () => {
    console.log('here')
    navigateToDetails('/');
    // window.location.reload(false);
    deleteAll();
  }
  

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
                  <Text fontSize='14px' m='5px'>Save this card for future payments</Text>
                </Flex>
              </Box>


            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
            <Button colorScheme='green' width='100%' disabled={isAnonymous ? true : false} onClick={() => {

              if (message.length == 0 || mmdata.length == 0 || yydata.length == 0 || cvvdata.length == 0) {
                alert("Fill All The Details")
              }
              else {

                if (message.length != 16) {
                  alert(" Wrong Card Number  You Enter !  " + message.length)
                }
                else if (mmdata.length != 2 || parseInt(mmdata) > 12) {
                  alert(" Wrong Month Details, Must Be 2 Digit And Month Value Must Be Less Than 12! ")
                }
                else if (yydata.length != 2 || parseInt(yydata) < 22) {

                  alert(" Wrong Year Details, Must Be Year Last 2 digit And Exp. Year Must Be Greater Than 2022! ")
                }
                else if (cvvdata.length != 3) {

                  alert(" Wrong CVV Details Check CVV on Backside Of Your Card ! ")
                }
                else {
                  alert(" Payment successful :)")
                  handleNavigate()
                  deleteAll();
                  dispatch(EmptyCart());

                }
              }

            }}
            >Pay</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </FormControl>
  )
}

