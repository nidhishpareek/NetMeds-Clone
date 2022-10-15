import { Grid, GridItem } from "@chakra-ui/react";
import {SlideAddress} from "./rSlideAddressPage"
import { OrderStatus } from "./orderStatus";
import React from "react"
import { SimpleGrid, Box, Text, Image, Flex, Input,Button,Icon,Progress } from "@chakra-ui/react";
import { SpinnerIcon,CheckCircleIcon,RepeatIcon,EmailIcon } from '@chakra-ui/icons'
export const OrderReview = () => {

  const[posts,setPosts]=React.useState([]);
  async function GetData(){
    const key="";
    // const url="https://jsonplaceholder.typicode.com/posts?_limit=10";
     const url=``;
  try{
      const res= await fetch(url)
      const data=await res.json();
       console.log(data);
      return data;
  }
  catch(err){
     console.log("err",err);
  }

}



  
  return (
    <Box>
    <OrderStatus/>
    <Box w='70%' m="auto" mt='30px'>
    
      <Flex   justifyContent='space-between' wrap='wrap' >
        

        <SimpleGrid columns={1}  >
          <Box   >
          <Text color='rgba(21,27,57,.6)'fontSize='12px'>PRODUCTS</Text>
            <Box  padding='10px' mb='50px' id='boxshadow'>
              <Text fontSize='12px'mb='5px'>Delivery Estimate</Text>
              <Text fontSize='14px' color='#151b39' fontWeight='bold' mb='10px'>16-October-2022</Text>
              <Flex>
                <Box >
                  <Image  w='50px'
                    src="https://www.netmeds.com/images/product-v1/75x75/362506/scalpe_plus_anti_dandruff_shampoo_75_ml_0_1.jpg"
                    alt="Product Img"
                  />
                </Box>

                <Box  mr='40px'>
                  
                  <Text fontSize='16px' mb='30px'>Scalpe Plus Anti Dandruff Shampoo 75 ml</Text>
                    <Text fontSize='12px' w='50%' lineHeight='30px'>
                    Mrf: Glenmark Pharmaceuticals Ltd
                        Seller : RELIANCE RETAIL LIMITED [BIKANER FC]
                        Expiry : Jul 2024
                    </Text>
                </Box>

                <Box >
                  Price
                  <Text fontSize='16px' color='#ef4281' mb='30px'>Rs.448.00</Text>
                  <Text fontSize='12px' fontWeight='bold'>Qty:2</Text>
                </Box>
              </Flex>
            </Box>



            <Box   padding='10px' mb='60px' id='boxshadow'>
              <Flex justifyContent="space-between" >
                <Text fontSize='12px' color='rgba(21,27,57,.6)' mb='10px'>DELIVERY ADDRESS</Text>
                <Text fontSize='16px' color='#ef4281' ><SlideAddress/></Text>
              </Flex>

              <Box >
                <Text color='#151b39' mb='10px' fontSize='16px' fontWeight='bold'>Akshay Pareek</Text>
                    <Text lineHeight='40px' w='30%' fontSize='14px'>
                    
                    Riet college jaipur,
                    near rcew girls college,
                    Jaipur - 302026, Rajasthan.
                    +91 - 8290918154
                    </Text>
              </Box>
            </Box>




            <Box  padding='10px'mb='60px' id='boxshadow' >
              <Text color='rgba(21,27,57,.6)' fontSize='12px'  mb='20px'>Coustomer Notes</Text>
              <textarea name="paragraph_text" cols="30" rows="5" ></textarea>
            </Box>
          </Box>







        </SimpleGrid>


      
        <Box   height='auto' padding='10px' id='boxshadow2' w={{ base: '100%', md: '100%', lg: '30%' }}>
            <Text color='rgba(21,27,57,.6)'fontSize='12px'>PAYMENT DETAILS</Text>
            <Box   lineHeight='40px'  >
            <Flex justifyContent="space-between">
              <Text>MRP Total</Text>
              <Text>Rs.560.00</Text>
            </Flex>


            <Flex justifyContent="space-between">
              <Text>Netmeds Discount</Text>
              <Text>- Rs.112.00</Text>
            </Flex>


            <Flex justifyContent="space-between" fontWeight='bold'>
              <Text >Total Amount</Text>
              <Text > *Rs.448.00</Text>
            </Flex>
            </Box>
            <Box bg='#f3f8ec' mt='20px' p='10px'>
              <Text color='#378f30' fontSize='14px'> TOTAL SAVINGS   RS.112.00</Text>
            </Box>

            <Flex justifyContent='space-between' mt='30px'>

              <Box >
                <Text>TOTAL AMOUNT</Text>
                <Text fontWeight='bold' fontSize='20px'> Rs.448.00</Text>
              </Box>

              <Box >
                <Button
                  bg='#24aeb1'
                  color='#fff'
                  variant="solid"
                  size='lg'
                  colorScheme='teal'
                  
                >
                  Pay
                </Button>
              </Box>

            </Flex>
          </Box>





      </Flex>
    </Box>

    </Box>
  );
};
