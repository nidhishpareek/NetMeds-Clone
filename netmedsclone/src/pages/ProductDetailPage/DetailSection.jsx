import { Box, Button, Image, Input, Text, useToast } from '@chakra-ui/react';
import React, { useContext, useState } from 'react'
import { Data } from '../Context/DataContext';
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { HiArrowCircleRight } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux';
import { setCartProduct } from '../../Redux/action';
import axios from 'axios';
import { Cart_API } from '../../api';

function DetailSection() {
    const { currProduct } = useContext(Data);
    const dispatch = useDispatch();
    // const cart = useSelector((state) => state.cart);
    const [cartData, setCartData] = useState([])
    const { title, country, actual_price, crossed_price, category, sub_category, manufacturer } = currProduct
    const discount = Math.round(((crossed_price - actual_price) / crossed_price) * 100)
    const toast = useToast();
    const handleAdd = (item) => {
        axios.get(Cart_API).then((res) => setCartData(res.data))
        console.log(cartData)
        const check = cartData.filter(allItem => allItem.id === item.id)
        if (check.length === 0) {
            axios.post(Cart_API, item)
                .then(() => {
                    dispatch(setCartProduct(item))
                    toast({
                        title: 'Item added to cart',
                        status: 'success',
                        isClosable: true,
                    })
                })
                .catch((err) => {
                    console.log(err)

                })
        } else if (check.length === 1) {
            toast({
                title: 'Item is already in cart',
                status: 'error',
                isClosable: true,
            })
        }
    }

    return (
        <Box w={{ base: "100%", lg: "50%" }} ml={{ base: "20px" }} pr={{ base: "0", lg: "25px" }}>
            <Text fontSize={"20px"}>{title}</Text>
            <Box mt="10px" mb="10px">
                {category && <Text as="span" background={"#f6f6f7"} color="#6f7284" fontSize={"12px"} textOverflow="ellipsis" p="3px 8px" mr="5px" borderRadius={"5px"} mt="90px">{category}</Text>}
                {sub_category && <Text as="span" background={"#f6f6f7"} color="#6f7284" fontSize={"12px"} textOverflow="ellipsis" p="3px 8px" mr="5px" borderRadius={"5px"}>{sub_category}</Text>}
            </Box>
            <Box display={"flex"} mt="10px" mb="20px">
                <Image src="https://www.netmeds.com/assets/version1665682643/gloryweb/images/icons/icon_favourite.svg" mr="30px" />
                <Text display={"flex"} alignItems="center" mr="10px" color="#73c330" fontSize={"15px"} fontWeight='700'>4.8
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                </Text>
                <Text fontSize={"14px"} color="#0d6efd">5 Ratings & 5 Reviews</Text>

            </Box>

            <hr />
            <Box display={"flex"} mt="20px" alignItems={"baseline"}>
                <Text color="#6f7284" fontSize='16px' fontWeight={700}>Best Price*</Text><Text as='span' color="#ef4281" fontSize={"20px"} fontWeight="700">₹{actual_price}</Text>
            </Box>
            {crossed_price && <Text fontSize={"12px"} color="#6f7284" fontWeight={500}>MRP <Text as='span' textDecoration={"line-through"}>₹{crossed_price}</Text ><Text as="span" color="#378f30" fontSize="11px" fontWeight={600}> GET {discount}% OFF</Text></Text>
            }
            <Text color={"#6f7284"} fontSize="12px" mt="5px">(Inclusive of all taxes)</Text>
            <Box color={"#6f7284"} fontSize="12px" mt="5px" fontStyle={"italic"}>
                <Text>*Mkt: {manufacturer}</Text>
                <Text>*Country of Origin: {country}</Text>
                <Text>*Delivery charges if applicable will be applied at checkout</Text>
            </Box>
            <Button mt="20px" mb="15px" background={"#24aeb1"} color="white" _hover={{ bgColor: "#24aeb1" }} onClick={() => handleAdd(currProduct)}>ADD TO CART</Button>
            <hr />
            <Text color="#6f7284" fontSize={"15px"} fontWeight="600" mt="20px">Check Availability & Expiry</Text>
            <Box display={"flex"} alignItems={"flex-end"} borderBottom={"3px solid #02b7c2"} width="200px" pb="3px">
                <Text as='span' color={"#02b7c2"} fontWeight="700" fontSize={"16px"}>PINCODE:</Text>
                <Input size={"sm"} type="number" defaultValue={"110002"} w="110px" pl="5px" fontSize={"19px"} fontWeight="700" border="none" focusBorderColor="white" pb="0" />
                <HiArrowCircleRight color={"#02b7c2"} fontSize="30px" />
            </Box>
            {crossed_price && <Box mt="30px">
                <Text fontSize={"16px"} color="#6f7284" fontWeight={"700"}>OFFERS APPLICABLE</Text>
                <Box display={"flex"} mr="40px" mt="10px" background={"#f3f3f3"} p="15px" borderRadius={"10px"} justifyContent="space-between">
                    <Box display="flex" gap="20px">
                        <Image src="https://www.netmeds.com/assets/version1665682643/gloryweb/images/icons/offer_blue_outline.svg" />
                        <Box display="flex" flexDirection={"column"} gap={"5px"}>
                            <Text color="#151b39" fontSize={"14px"}>Default Discount</Text>
                            <Text color="#378f30" fontSize={"12px"} fontWeight="700">You get {discount}% OFF on this product</Text>
                        </Box>

                    </Box>
                    <Text color={"#ef4281"} fontSize="12px">Offer Applied</Text>
                </Box>
            </Box>}

        </Box >
    )
}

export default DetailSection