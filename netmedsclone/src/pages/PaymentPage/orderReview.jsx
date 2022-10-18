import { Grid, GridItem, Spinner } from "@chakra-ui/react";
import {SlideAddress} from "./rSlideAddressPage"
import { OrderStatus } from "./orderStatus";
import React, { useContext } from "react"
import { SimpleGrid, Box, Text, Image, Flex, Input,Button,Icon,Progress } from "@chakra-ui/react";
import { SpinnerIcon,CheckCircleIcon,RepeatIcon,EmailIcon } from '@chakra-ui/icons'
import { Navigate, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";


var userAddress=JSON.parse(localStorage.getItem("userAddress")) || {};
// var userDetails=JSON.parse(localStorage.getItem("userDetails"))




// async function GetData(){
//   const key="";
//   // const url="https://jsonplaceholder.typicode.com/posts?_limit=10";
//    const url=`https://netmedsdata.onrender.com/cart`;
// try{
//     const res= await fetch(url)
//     const data=await res.json();
//     //  console.log(data);
//     return data;
// }
// catch(err){
//    console.log("err",err);
// }

// }









export const OrderReview = () => {

  

  const[userDetails,setuserDetails]=React.useState(JSON.parse(localStorage.getItem("userDetails")));
  const[page,setPage]=React.useState(1);
  
  const {totalMRP,discount,promoCodeDiscount,userAddressdata,getData,cartData,loading}= useContext(AppContext);

  // const{FirstName,LastName,Address,Landmark,Phonenumber,City,State,PinCode}=userAddressdata;

    React.useEffect(()=>{
        // Data1()
        // cartDataPrice()
        // cartData()
        // console.log("calling useeffect")
        getData();
    },[])


    // const Data1=async ()=>{
    //     try{
    //         const items= await getData();
    //         // console.log(items)
    //         setPosts(items);
    //     }
    //     catch(err){
    //         console.log("err");
    //     }
        
    // }
 
 

// console.log(posts.title);

const[Productprice,setProductprice]=React.useState('');

// let TotalPrice=0;


// const cartDataPrice=()=>{
//   {posts.map((post)=>
//     (
//       TotalPrice=TotalPrice+parseInt(post.actual_price)
    
//     )
//     )}
//     // console.log(TotalPrice);
//    setProductprice(TotalPrice);
    
//     // console.log("heee",Productprice);
// }







const navigateToDetails = useNavigate();
const handleNavigate = () => {
  navigateToDetails('/payment/details');

}


const ProductData={
  
  DeliveryDate:"19-October-2022",

}






const DELIVERYADDRESS={
  
  
  ...userAddress,



}

const Username={
  ...userDetails
}


const PaymentDetails={
  
  Discount:0,
}






  
  return (
    <Box mt="20px">
      {
                    loading && <Box zIndex={'2'} opacity='0.8' display={'grid'} position='fixed' bottom='0px' placeContent='center' w='100vw' h='110vh' bg='black'><Spinner color='#fff' size='xl' /></Box>
                }
    <OrderStatus/>
    <Box w={{ base: '100%', md: '100%', lg: '70%' }} m="auto" mt='10px'  >
    
      <Box   justifyContent='space-between' wrap='wrap'  display={{base:"block", lg:"flex"} } >
        

        <SimpleGrid columns={1} w={{   md: '100%'}} mr="20px"  padding={{base:"20px", lg:"0px"}}>
          <Box   >
          <Text color='rgba(21,27,57,.6)'fontSize='12px'>PRODUCTS</Text>
            <Box  padding='10px' mb='50px' id='boxshadow'>
              <Text fontSize='12px'mb='5px'>Delivery Estimate</Text>
              <Text fontSize='14px' color='#151b39' fontWeight='bold' mb='10px'>{ProductData.DeliveryDate}</Text>


              {cartData.map((post)=>
    (
      <Box  mb="10px" key={post.title}>
      <Flex >
                <Box mr="12px" >
                  <Image  w='50px'
                    src={post.img1}
                    alt="Product Img"
                  />
                </Box>

                <Box  mr='40px'>
                  
                  <Text fontSize='16px' mb='20px' w="80%">{post.title}</Text>
                    <Text fontSize='12px' w={{ base: '100%', md: '100%', lg: '70%' }} lineHeight='30px'>
                    {post.manufacturer}
                    </Text>
                </Box>

                
              
              <Box ml="auto" w="90px" >
              <Box   ml="0px" >
                  <Text fontSize='14px' color='#ef4281' >Rs.{post.actual_price}</Text>
                  {post.crossed_price && <Text mb='15px' color='#151B3999' fontWeight={'400'} textDecoration={'line-through'} fontSize={'12px'}>Rs.{post.crossed_price.toFixed(2)}</Text>}
                <Text fontSize={'12px'} color='#151B3999'>QTY: {post.quantity ? post.quantity : 1}</Text>
              </Box>
              </Box>
              </Flex>
              <hr/>
           </Box>
           
    )
    )}


            </Box>



            <Box   padding='10px' mb='60px' id='boxshadow'>
              <Flex justifyContent="space-between" >
                <Text fontSize='12px' color='rgba(21,27,57,.6)' mb='10px'>DELIVERY ADDRESS</Text>
                <Text fontSize='16px' color='#ef4281' ><SlideAddress/></Text>
              </Flex>

              <Box >
                <Text color='#151b39' mb='10px' fontSize='16px' fontWeight='bold'>{Username.firstName +" "+Username.lastName}</Text>
                    <Text lineHeight='40px' w={{ base: '100%', md: '100%', lg: '30%' }} fontSize='14px'>
                    {DELIVERYADDRESS.Address+" "+DELIVERYADDRESS.Landmark}
                    
                    </Text>

                    <Text lineHeight='40px' w={{ base: '100%', md: '100%', lg: '30%' }} fontSize='14px'>
                    
                    {DELIVERYADDRESS.City+"   "+DELIVERYADDRESS.State+"   "+DELIVERYADDRESS.PinCode+" "}
                    
                    </Text>
                    <Text lineHeight='40px' w={{ base: '100%', md: '100%', lg: '30%' }} fontSize='14px'>
                    
                    {DELIVERYADDRESS.Phonenumber+"   "}
                    
                    </Text>
              </Box>
            </Box>




            <Box  padding='10px'mb='60px' id='boxshadow' >
              <Text color='rgba(21,27,57,.6)' fontSize='12px'  mb='20px'>Customer Notes</Text>
              <textarea style={{padding: '5px'}} name="paragraph_text" cols="30" rows="5" ></textarea>
            </Box>
          </Box>







        </SimpleGrid>


      
        <Box   height='auto' padding='10px' id='boxshadow2' w={{base:"100%",lg:"50%"} } mt="20px">
            <Text color='rgba(21,27,57,.6)'fontSize='12px'>PAYMENT DETAILS</Text>
            <Box   lineHeight='40px'  >
            <Flex justifyContent="space-between">
              <Text>MRP Total</Text>
              <Text>Rs.{totalMRP.toFixed(2)}</Text>
            </Flex>


            <Flex justifyContent="space-between">
              <Text>Netmeds Discount</Text>
              <Text>- Rs.{discount.toFixed(2)}</Text>
            </Flex>
            {
                                    promoCodeDiscount==0? <Box></Box> : 
                                    <Flex fontSize={'14px'} mb='10px' justifyContent={'space-between'}>
                                        <Text>Promocode Discount</Text>
                                        <Text>-Rs.{parseFloat(promoCodeDiscount).toFixed(2)}</Text>
                                    </Flex>
                                }

            <Flex justifyContent="space-between" fontWeight='bold'>
              <Text >Total Amount</Text>
              <Text > *Rs.{(totalMRP-discount).toFixed(2)}</Text>
            </Flex>
            </Box>
            <Box bg='#f3f8ec' mt='20px' p='10px'>
              <Text color='#378f30' fontSize='14px'> TOTAL SAVINGS   RS.{(discount+promoCodeDiscount).toFixed(2)}</Text>
            </Box>

            <Flex justifyContent='space-between' mt='30px'>

              <Box >
                <Text>TOTAL AMOUNT</Text>
                <Text fontWeight='bold' fontSize='20px'> Rs.{(totalMRP-discount).toFixed(2)}</Text>
              </Box>

              <Box >
                <Button
                  bg='#24aeb1'
                  color='#fff'
                  variant="solid"
                  size='lg'
                  colorScheme='teal'
                  onClick={handleNavigate}
                  
                >
                  Pay
                </Button>
              </Box>

            </Flex>
          </Box>





      </Box>
    </Box>

    </Box>
  );
};


