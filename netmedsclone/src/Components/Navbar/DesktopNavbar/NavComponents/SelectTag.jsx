import { Box } from "@chakra-ui/react";
import { v4 as uuid } from "uuid";
import { ChevronDownIcon,ChevronUpIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";

const Myselect = ({ placeholder, optionarray, width }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Menu
        isOpen={isOpen}
      >
          <>
            <MenuButton
              fontSize="14px"
              size="sm"
              p={"0px"}
              isActive={isOpen}
              colorScheme="rgb(50,174,177)"
              as={Button}
              rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              color="white"
              onMouseEnter={onOpen}
              onMouseLeave={onClose}
            >
              {placeholder}
            </MenuButton>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
              {optionarray &&
                optionarray.map((ele, index) => (
                  <MenuItem value="ele" key={uuid()} fontSize={"14px"}>
                    {ele}
                  </MenuItem>
                ))}
            </MenuList>
          </>
      </Menu>
    </Box>
  );
};
export default Myselect;
