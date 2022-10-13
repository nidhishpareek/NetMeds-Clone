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
import { Link } from "react-router-dom";
import CartButton from "./CartButton";
import { v4 as uuid } from "uuid";
import CartMenuNavbarItem from "./CartMenuNavbarItem";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const CartNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cart = [
    {
      id: 1746,
      title: "Festal N Tablets 10's",
      img1: "https://www.netmeds.com/images/product-v1/600x600/918989/festal_n_tablets_10s_128705_0_1.jpg",
      img2: "",
      img3: "",
      actual_price: "136.09",
      crossed_price: "1,460.00",
      manufacturer: "Sanofi India Limited",
      country: "India",
      category: "HealthAid Digeston (Papaya & Digestive Enzymes) Tablet 60's",
      sub_category: "General Discomfort",
    },
    {
      id: 1,
      title: "Ciphands Antiseptic Hand Sanitizer 100 ml",
      img1: "https://www.netmeds.com/images/product-v1/150x150/908599/ciphands_antiseptic_hand_sanitizer_100_ml_0_1.jpg",
      img2: "",
      img3: "",
      actual_price: "40",
      crossed_price: "50",
      manufacturer: "Cipla Ltd(Otc)",
      country: "India",
      category: "Personal Care",
      sub_category: "Hands & Feet",
    },
  ];
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
       
          <CartButton />
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
          cart.map((ele, index) => (
            <MenuItem
              value="ele"
              key={uuid()}
              fontSize={"14px"}
              width="320px"
              _hover={{ bg: "white" }}
            >
              <CartMenuNavbarItem ele={ele} />
            </MenuItem>
          ))}
        <MenuItem
          fontSize={"14px"}
          justifyContent={"space-between"}
          _hover={{ bg: "white" }}
        >
          <Box>
            <Text fontSize={"16px"}>
              Rs. {cart.cart_actual_price ? cart.cart_actual_price : 783}
            </Text>
            <Text fontSize={"12px"}>
              {" "}
              You save Rs.{" "}
              {cart.cart_crossed_price
                ? cart.cart_crossed_price - cart.cart_actual_price
                : "78.36"}
            </Text>
          </Box>
          <Box>
            <Link to={'/Cart'}>
              <Button
                _hover={{ bg: "rgb(50,174,177)" }}
                fontSize={"12px"}
                size="sm"
                color={"white"}
                bg="rgb(50,174,177)"
              >
                PROCEED TO CART
              </Button>
            </Link>
          </Box>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default CartNavbar;

{
  /*  */
}
