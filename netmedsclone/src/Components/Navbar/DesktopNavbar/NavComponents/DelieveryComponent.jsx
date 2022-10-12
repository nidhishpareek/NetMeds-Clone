import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
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
              rightIcon={isOpen ? <ChevronUpIcon  /> : <ChevronDownIcon />}
              color="grey"
              isActive={isOpen}
              as={Button}
              alignContent="center"
              pt='10px'
            >
              <Flex alignItems={'center'} >
              <Text whiteSpace="nowrap">Deliever to </Text>
              <Text whiteSpace="nowrap" textColor={"rgb(50,174,177)" } pl='4px'>
                {location ? location : "110002"}
              </Text>
              </Flex>
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem onClick={() => alert("Kagebunshin")}>
                Create a Copy
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </Box>
  );
};
export default Delievery;
