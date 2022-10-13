//Line 38 for changing the cart badge number.

/////////////////////////////////////////////
import {
  Avatar,
  AvatarBadge,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";

import { HiShoppingCart } from "react-icons/hi";

const CartButton = () => {
  const count = 2;
  return (
    <>
      <Box
        bgColor={"rgb(50,174,177)"}
        _hover={{ bg: "rgb(50,174,177)" }}
        size="xs"
      >
        <Flex align={"center"}>
          <Avatar
            paddingLeft={"10px"}
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
              {count}
            </AvatarBadge>
          </Avatar>

          <Text
            color={"white"}
            fontSize="14px"
            fontWeight="semibold"
            paddingLeft={"5px"}
          >
            Cart
          </Text>
        </Flex>
      </Box>
    </>
  );
};
export default CartButton;
