//set or increase count in the add to cart functionality/ increase count functionality. to enjoy count functionality.

import { Box, Flex, Text } from "@chakra-ui/react";

const CartMenueObject = ({ ele }) => {
  const { title, actual_price, quantity  } = ele;
  return (
    <Box>
      <Flex justifyContent={"space-between"}>
        <Text textOverflow="clip" noOfLines={1} overflow={'hidden'} width={"185px"}>
           {title}
        </Text>
        <Flex justifyContent={"end"} width='105px'> Rs.{actual_price} x{quantity  ? quantity  : 1}</Flex>
      </Flex>
    </Box>
  );
};
export default CartMenueObject;
