import { Grid, GridItem } from "@chakra-ui/react";
import {SlideAddress} from "./rSlideAddressPage"
import { OrderStatus } from "./orderStatus";
import { SimpleGrid, Box, Text, Image, Flex, Input,Button,Icon ,Select,Checkbox} from "@chakra-ui/react";
import { SpinnerIcon,CheckCircleIcon,RepeatIcon,EmailIcon } from '@chakra-ui/icons'
import React from "react"
import {NewCarddetails} from"./newCarddetails"
export const PymentDetails=()=>{

const{Change,setChange}=React.useState(false)

    const PayButton=(el)=>{
        console.log(Change)
        return(
            <Box>
            <Button
                  bg='#24aeb1'
                  color='#fff'
                  variant="solid"
                  size='lg'
                  colorScheme='teal'
                  
                >
                  Pay RS 448
                </Button>

                </Box>
        )
    }


    const PaymentDetails={
      MrpTotal:"560.00",
      Discount:"112.00",
      TotalAmount:"4490.00",
      SAVINGS :"112.00"
    }




    return (
        <Box>
    <OrderStatus/>
    <Box w={{ base: '100%', md: '100%', lg: '70%' }} m="auto" mt='30px' >
    
      <Flex   justifyContent='space-between' wrap='wrap' >
        

        <SimpleGrid columns={1}  w={{  md: '70%'}} >
          <Box   >
            <Box  padding='20px' mb='50px' id='boxshadow' >
            <Flex align='center'>
            <Checkbox size='md' colorScheme='green'  > </Checkbox>
              <Text fontSize='14px'm='5px'>VOUCHERS</Text>
              </Flex>
            </Box>



            <Box   padding='10px' mb='60px' id='boxshadow'>
            <Text fontSize='12px' color='rgba(21,27,57,.6)' mb='10px'>UPI</Text>
              <Flex justifyContent="space-between" >
                <Flex align='center'>
                <Image h='30px' mr='15px'src='https://www.netmeds.com/assets/pgicon/googlepaylogo.png' alt='img'/>
                <Text  fontSize='14px' >Google Pay</Text>
                </Flex>
                <Checkbox size='md' colorScheme='green' >
                   
                </Checkbox>
              </Flex>

              <Box >
              </Box>
            </Box>
            


            <Box  padding='10px' mb='50px' id='boxshadow'>
              <Text fontSize='12px'mb='5px'>NET BANKING</Text>
             
              <Flex justify='space-around' mt='20px' mb='10px'>
                
                  <Image  w='42px' h='42px'
                    src="https://www.netmeds.com/assets/pgicon/axis.png"
                    alt="Product Img"
                  />

                  <Image  w='42px' h='42px'
                    src="https://www.netmeds.com/assets/pgicon/Hdfc.png"
                    alt="Product Img"
                  />

                  <Image  w='42px' h='42px'
                    src="https://www.netmeds.com/assets/pgicon/icici.png"
                    alt="Product Img"
                  />

                  <Image  w='42px' h='42px'
                    src="https://www.netmeds.com/assets/pgicon/kotak.png"
                    alt="Product Img"
                  />

                   <Image  w='42px' h='42px'
                    src="https://www.netmeds.com/assets/pgicon/Sbi.png"
                    alt="Product Img"
                  />


                
                 
              </Flex>

              <Box>
              <Select placeholder='More Banks' w="40%">
               <option value='option1'>Axis Bank</option>
                <option value='option2'>HDFC Bank</option>
               <option value='option3'>ICICI Bank</option>
               <option value='option3'>State Bank Of India</option>
               <option value='option3'>PNB Bank</option>
              </Select>

              </Box>
            </Box>



            <Box   padding='10px' mb='60px' id='boxshadow'>
            <Text fontSize='12px' color='rgba(21,27,57,.6)' mb='10px'>CREDIT & DEBIT CARDS</Text>
                  
             <Box  align="center"><NewCarddetails/></Box> 
            </Box>









            <Box  padding='10px'mb='60px' id='boxshadow' >
              <Text color='rgba(21,27,57,.6)' fontSize='12px'  mb='20px'>PREFERED PAYMENT</Text>
              <Flex justifyContent="space-between" >
                <Flex align='center'>
                <Image h='30px' mr='15px'src='https://www.netmeds.com/assets/pgicon/Paytm_lo.png' alt='img'/>
                <Text  fontSize='14px' >Paytm</Text>
                </Flex>
                <Text color='#ef4281' fontSize='12px'>Link</Text>
              </Flex>
              <Text ml='40px' color='rgba(21,27,57,.6)' fontSize='12px'>Pay using your Paytm wallet and get cashback between Rs. 30 to Rs. 300. Valid once per user. Minimum order value: Rs. 599.</Text>
            </Box>



            <Box  padding='20px'mb='60px' id='boxshadow' >
              <Text color='rgba(21,27,57,.6)' fontSize='12px'  mb='20px'>OTHER PAYMENTS</Text>
              <Flex justifyContent="space-between" >
                <Flex align='center'>
                <Image h='30px' mr='15px'src='https://www.netmeds.com/assets/pgicon/Phone_Pay_lo.png' alt='img'/>
                <Text  fontSize='14px' >PhonePay</Text>
                </Flex>
                <Checkbox size='md' colorScheme='green'  >
                   
                </Checkbox>
              </Flex>
            </Box>



            <Box  padding='20px'mb='60px' id='boxshadow' >
              <Text color='rgba(21,27,57,.6)' fontSize='12px'  mb='20px'>Cash on Delivery</Text>
              <Flex justifyContent="space-between" >
                <Flex align='center'>
                <Image h='30px' mr='15px'src='https://www.netmeds.com/assets/pgicon/COD.png' alt='img'/>
                <Text  fontSize='14px' >Cash</Text>
                </Flex>
                <Checkbox size='md' colorScheme='green'  >
                   
                </Checkbox>
              </Flex>
              <Text ml='40px' color='rgba(21,27,57,.6)' fontSize='12px'>Hear us out! Pay online and earn 50% NMS SuperCash (up to Rs. 3000) on all prepaid orders</Text>
            </Box>



            <Box  padding='20px'mb='60px' id='boxshadow' >
              <Text color='rgba(21,27,57,.6)' fontSize='12px'  mb='20px'>REWARD PAY</Text>
              <Flex justifyContent="space-between" >
                <Flex align='center'>
                <Image h='30px' mr='15px'src='https://www.netmeds.com/msassets/images/icons/TWID.png' alt='img'/>
                <Text  fontSize='14px' >Coin</Text>
                </Flex>
                <Checkbox size='md' colorScheme='green'  >
                   
                </Checkbox>
              </Flex>
              <Text ml='40px' color='rgba(21,27,57,.6)' fontSize='12px'>Pay with Rewards and get cashback upto Rs 1000</Text>
              

            </Box>


          </Box>







        </SimpleGrid>


      
        <Box   height='auto' padding='10px' id='boxshadow2'  w={{ base: '100%', md: 'auto', lg: '30%' }}>
            <Text color='rgba(21,27,57,.6)'fontSize='12px'>PAYMENT DETAILS</Text>
            <Box   lineHeight='40px'  >
            <Flex justifyContent="space-between">
              <Text>MRP Total</Text>
              <Text>Rs.{PaymentDetails.MrpTotal}</Text>
            </Flex>


            <Flex justifyContent="space-between">
              <Text>Netmeds Discount</Text>
              <Text>- Rs.{PaymentDetails.Discount}</Text>
            </Flex>


            <Flex justifyContent="space-between" fontWeight='bold'>
              <Text >Total Amount</Text>
              <Text > *Rs.{PaymentDetails.TotalAmount}</Text>
            </Flex>
            </Box>
            <Box bg='#f3f8ec' mt='20px' p='10px'>
              <Text color='#378f30' fontSize='14px'> TOTAL SAVINGS   RS.{PaymentDetails.SAVINGS}</Text>
            </Box>

            <Flex justifyContent='space-between' mt='30px'>

              <Box >
                <Text>TOTAL AMOUNT</Text>
                <Text fontWeight='bold' fontSize='20px'>Rs.{PaymentDetails.TotalAmount}</Text>
              </Box>

              

            </Flex>
          </Box>





      </Flex>
    </Box>

    </Box>
    )
 }

