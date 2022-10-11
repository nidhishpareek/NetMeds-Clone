//Line 38 for changing the cart badge number.

/////////////////////////////////////////////
import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Menu,
  Text,
} from "@chakra-ui/react";

import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";

const CartButton = () => {
  const count = 2;
  return (
    <>
      <Menu></Menu>
      <Box
        bgColor={"rgb(50,174,177)"}
        _hover={{ bg: "rgb(50,174,177)" }}
        size="xs"
      >
        <Link _hover={{ textDecoration: "none" }}>
          <Flex align={"center"}>
            <IconButton
              size="lg"
              variant="ghost"
              aria-label="open menu"
              _hover={{ bg: "rgb(50,174,177)" }}
              icon={
                <>
                  <Avatar
                    icon={<HiShoppingCart />}
                    bg='"rgb(50,174,177)"'
                    boxSize={"30px"}
                  >
                    <AvatarBadge
                      boxSize="15px"
                      bg="red.500"
                      border={"0px"}
                      fontSize="10px"
                    >
                      1
                    </AvatarBadge>
                  </Avatar>
                </>
              }
            />

            <Text color={"white"} fontSize="14px" fontWeight="semibold">
              Cart
            </Text>
          </Flex>
        </Link>
      </Box>
    </>
  );
};
export default CartButton;
