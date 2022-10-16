import { Grid, GridItem } from "@chakra-ui/react";
import {SlideAddress} from "./rSlideAddressPage"
import { OrderStatus } from "./orderStatus";
import React from "react"
import { SimpleGrid, Box, Text, Image, Flex, Input,Button,Icon,Progress } from "@chakra-ui/react";
import { SpinnerIcon,CheckCircleIcon,RepeatIcon,EmailIcon } from '@chakra-ui/icons'
import { Navigate, useNavigate } from "react-router-dom";


async function GetData(){
  const key="";
  // const url="https://jsonplaceholder.typicode.com/posts?_limit=10";
   const url=`https://netmedsdata.onrender.com/cart`;
try{
    const res= await fetch(url)
    const data=await res.json();
    //  console.log(data);
    return data;
}
catch(err){
   console.log("err",err);
}

}









export const OrderReview = () => {
  const[posts,setPosts]=React.useState([]);
  const[page,setPage]=React.useState(1);
  

    

    React.useEffect(()=>{
        Data1()
        cartDataPrice()
        // cartData()
        console.log("calling useeffect")
    },[])


    const Data1=async ()=>{
        try{
            const items= await GetData();
            // console.log(items)
            setPosts(items);
        }
        catch(err){
            console.log("err");
        }
        
    }
 
 

// console.log(posts.title);

const[Productprice,setProductprice]=React.useState('');

let TotalPrice=0;


const cartDataPrice=()=>{
  {posts.map((post)=>
    (
      TotalPrice=TotalPrice+parseInt(post.actual_price)
    
    )
    )}
    console.log(TotalPrice);
   setProductprice(TotalPrice);
    
    console.log("heee",Productprice);
}







const navigateToDetails = useNavigate();
const handleNavigate = () => {
  navigateToDetails('/payment/details');

}


const ProductData={
  Imageurl:"https://www.netmeds.com/images/product-v1/75x75/362506/scalpe_plus_anti_dandruff_shampoo_75_ml_0_1.jpg",
  name:"Scalpe Plus Anti Dandruff Shampoo 70 ml",
  Details:"Mrf: Glenmark Pharmaceuticals Ltd Seller : RELIANCE RETAIL LIMITED [BIKANER FC] Expiry : Jul 2024",
  Qty:"2",
  DeliveryDate:"19-October-2022",

}

const DELIVERYADDRESS={
  Name:"Akshay Pareek",
  Address:"Riet college jaipur,near rcew girls college,Jaipur - 302026, Rajasthan.+91 - 8290918154",

}


const PaymentDetails={
  
  Discount:121,
}





  
  return (
    <Box>
    <OrderStatus/>
    <Box w={{ base: '100%', md: '100%', lg: '70%' }} m="auto" mt='30px'>
    
      <Flex   justifyContent='space-between' wrap='wrap' >
        

        <SimpleGrid columns={1} w={{  md: '70%'}} >
          <Box   >
          <Text color='rgba(21,27,57,.6)'fontSize='12px'>PRODUCTS</Text>
            <Box  padding='10px' mb='50px' id='boxshadow'>
              <Text fontSize='12px'mb='5px'>Delivery Estimate</Text>
              <Text fontSize='14px' color='#151b39' fontWeight='bold' mb='10px'>{ProductData.DeliveryDate}</Text>


              {posts.map((post)=>
    (
      <Box  mb="10px">
      <Flex >
                <Box >
                  <Image  w='50px'
                    src={post.img1}
                    alt="Product Img"
                  />
                </Box>

                <Box  mr='40px'>
                  
                  <Text fontSize='16px' mb='30px'>{post.title}</Text>
                    <Text fontSize='12px' w={{ base: '100%', md: '100%', lg: '50%' }} lineHeight='30px'>
                    {post.manufacturer}
                    </Text>
                </Box>

                
              

              <Box  ml="auto" >
                    Price
                  <Text fontSize='16px' color='#ef4281' mb='30px'>{post.actual_price}</Text>
                <Text fontSize='12px' fontWeight='bold'>Qty:{ProductData.Qty}</Text>
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
                <Text color='#151b39' mb='10px' fontSize='16px' fontWeight='bold'>{DELIVERYADDRESS.Name}</Text>
                    <Text lineHeight='40px' w={{ base: '100%', md: '100%', lg: '30%' }} fontSize='14px'>
                    
                    {DELIVERYADDRESS.Address}
                    </Text>
              </Box>
            </Box>




            <Box  padding='10px'mb='60px' id='boxshadow' >
              <Text color='rgba(21,27,57,.6)' fontSize='12px'  mb='20px'>Coustomer Notes</Text>
              <textarea name="paragraph_text" cols="30" rows="5" ></textarea>
            </Box>
          </Box>







        </SimpleGrid>


      
        <Box   height='auto' padding='10px' id='boxshadow2' w={{ base: '100%', md: 'auto', lg: '30%' }}>
            <Text color='rgba(21,27,57,.6)'fontSize='12px'>PAYMENT DETAILS</Text>
            <Box   lineHeight='40px'  >
            <Flex justifyContent="space-between">
              <Text>MRP Total</Text>
              <Text>Rs.{Productprice}</Text>
            </Flex>


            <Flex justifyContent="space-between">
              <Text>Netmeds Discount</Text>
              <Text>- Rs.{PaymentDetails.Discount}</Text>
            </Flex>


            <Flex justifyContent="space-between" fontWeight='bold'>
              <Text >Total Amount</Text>
              <Text > *Rs.{parseInt(Productprice)-PaymentDetails.Discount}</Text>
            </Flex>
            </Box>
            <Box bg='#f3f8ec' mt='20px' p='10px'>
              <Text color='#378f30' fontSize='14px'> TOTAL SAVINGS   RS.{PaymentDetails.Discount}</Text>
            </Box>

            <Flex justifyContent='space-between' mt='30px'>

              <Box >
                <Text>TOTAL AMOUNT</Text>
                <Text fontWeight='bold' fontSize='20px'> Rs.{parseInt(Productprice)-PaymentDetails.Discount}</Text>
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





      </Flex>
    </Box>

    </Box>
  );
};


