import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import CartButton from "./CartButton";
import { v4 as uuid } from "uuid";
import CartMenuNavbarItem from "./CartMenuNavbarItem";
import { useSelector, useDispatch } from "react-redux";
import { useContext } from "react";
import { useEffect } from "react";
import { AppContext } from "../../../../context/AppContext";

const CartNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {discount, totalMRP,getData} =  useContext(AppContext);

  useEffect(()=>{
    getData();

  },[])
  const cart = useSelector((state) => state.cart);

 
  useEffect(()=>{
    getData();

  },[isOpen])
  return (
    <Menu isOpen={isOpen} isLazy={true} placement="bottom-end">
      <MenuButton
        fontSize="14px"
        size="sm"
        p={"0px"}
        isActive={isOpen}
        colorScheme="rgb(50,174,177)"
        as={Button}
        color="white"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      >
       
          <CartButton count={cart.length} />
      </MenuButton>
      <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
        <MenuItem
          _hover={{ bg: "white" }}
          width="320px"
          fontSize="12px"
          justifyContent={"space-between"}
        >
          <Text>ORDER SUMMARY</Text>
          <Text>{cart.length} item(s)</Text>
        </MenuItem>
        {cart &&
          cart.map((ele) => { return(
            <MenuItem
              value="ele"
              key={ele.id}
              fontSize={"14px"}
              width="320px"
              _hover={{ bg: "white" }}
            >
              <CartMenuNavbarItem ele={ele} />
            </MenuItem>
          )})}
        <MenuItem
          fontSize={"14px"}
          justifyContent={"space-between"}
          _hover={{ bg: "white" }}
        >
          <Box>
            <Text fontSize={"16px"} color='#ef4281'>
              Rs. {cart.cart_actual_price ? cart.cart_actual_price : totalMRP.toFixed(2)}
            </Text>
            <Text fontSize={"12px"}>
              {" "}
              You save Rs.{" "}
              {discount.toFixed(2)}
            </Text>
          </Box>
                
          <Flex justifyContent={'center'} alignItems='center' bg="rgb(50,174,177)" height='40px' paddingInline='5px' borderRadius={'5px'}>
              <Text
                _hover={{ bg: "rgb(50,174,177)" }}
                fontSize={"12px"}
                paddingInline='5px'
                color={"white"}
                
              >
                PROCEED TO CART
              </Text>
          </Flex>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default CartNavbar;

{
  /*  */
}
