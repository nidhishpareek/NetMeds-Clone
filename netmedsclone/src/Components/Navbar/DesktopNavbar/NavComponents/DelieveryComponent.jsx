import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";

const Delievery = () => {
  const location = null;
  return (
    <Box>
      <Menu
        fontSize={"14px"}
        className="selectelement"
        variant="flushed"
        bg="rgb(50,174,177)"
        borderColor="transparent"
        color="black"
      >
        {({ isOpen }) => (
          <>
            <MenuButton
              fontSize="14px"
              size="sm"
              paddingInline={"10px"}
              colorScheme="rgb(50,174,177)"
              rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              color="grey"
              isActive={isOpen}
              as={Button}
              alignContent="center"
              pt="10px"
            >
              <Flex alignItems={"center"}>
                <Text whiteSpace="nowrap">Deliever to </Text>
                <Text
                  whiteSpace="nowrap"
                  textColor={"rgb(50,174,177)"}
                  pl="4px"
                >
                  {location ? location : "110002"}
                </Text>
              </Flex>
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Box>
                  <Text fontSize={"16px"} pb="16px" fontWeight={"bold"}>
                    Where do you want the delivery?
                  </Text>
                  <Text fontSize={"14px"} color={"rgb(140,137,141)"}>
                    {" "}
                    Get access to your Addresses, Orders, and Wishlist
                  </Text>
                  <Flex
                    width={"100%"}
                    borderRadius="4px"
                    size={"lg"}
                    fontSize={"14px"}
                    mt="16px"
                    height={'40px'}
                    justifyContent='center'
                    alignItems={'center'}
                    color={"white"}
                    bg="rgb(50,174,177)"
                  >
                    Sign in to see your location
                  </Flex>
                </Box>
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </Box>
  );
};
export default Delievery;
