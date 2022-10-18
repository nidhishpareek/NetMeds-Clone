//Change isLoggedIn and name according to Redux.

import {
  Avatar,
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
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { AppContext } from "../../../../context/AppContext";

const UserButton = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const userDetails = useSelector((state) => state.userDetails)|| JSON.parse(localStorage.getItem('userDetails'));
  const {deleteAll} = useContext(AppContext)
  const name = userDetails.firstName;
  const handleClickOnUserButton = () => {
    if (isLoggedIn) {
      console.log('here')
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userDetails");
      deleteAll();
      window.location.reload(false);
    }
  };
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bgColor={"rgb(50,174,177)"}
      _hover={{ bg: "rgb(50,174,177)" }}
      size="xs"
    >
      <Link
        to={"/Login"}
        _hover={{ textDecoration: "none" }}
        onClick={handleClickOnUserButton}
      >
        <Menu isOpen={isOpen} isLazy={true} placement="bottom-end">
          <>
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
              <Flex align={"center"}>
                <Avatar
                  paddingLeft={"10px"}
                  icon={<FaUserCircle />}
                  bg='"rgb(50,174,177)"'
                  boxSize={"30px"}
                ></Avatar>

                <Text
                  paddingLeft={"5px"}
                  color={"white"}
                  fontSize="14px"
                  fontWeight="semibold"
                  whiteSpace="nowrap"
                >
                  {isLoggedIn ? name : "Sign in / Sign up"}
                </Text>
              </Flex>
            </MenuButton>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
              <MenuItem size='xs' fontSize={'14px'}>{isLoggedIn? 'Logout' : 'LogIn'}</MenuItem>
            </MenuList>
          </>
        </Menu>
      </Link>
    </Box>
  );
};
export default UserButton;
