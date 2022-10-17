import { Box, Button, Flex, Input, InputGroup, InputRightElement, Link, Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FiSearch } from "react-icons/fi";

const BottomNavBarMobile = () => {
    
  const name = "Nidhish";
  return (
    <Box paddingInline={"16px"}>
      <Flex alignItems="center" paddingBlock={"5px"}>
        <Text fontSize={"10px"} pt="2px">
          Deliver to
        </Text>
        <Button
        _hover={{bg:'white'}}
          padding={"0px"}
          size="s"
          fontSize={"12px"}
          pl="5px"
          fontWeight={"bold"}
          background={"white"}
        >
          {name ? name : "Nidhish"} - Central Delhi 110002{" "}
          <ChevronDownIcon paddingLeft={"5px"} fontSize="20px" />
        </Button>
      </Flex>
      <Box>
      <InputGroup height={'38px'} flex='center' mb='10px'>
        <Input fontSize={'14px'} height='38px'/>
        <InputRightElement mt={'-5px'} children={<FiSearch size={'23px'} color="grey"  />}/>
      </InputGroup>
      </Box>
    </Box>
  );
};
export default BottomNavBarMobile;
