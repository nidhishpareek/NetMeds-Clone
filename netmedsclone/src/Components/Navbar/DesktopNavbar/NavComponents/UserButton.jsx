//Change isLoggedIn and name according to Redux.

import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { EmptyCart } from "../../../../Redux/action";

const UserButton = () => {
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")) || false;
  const userDetails = JSON.parse(localStorage.getItem("userDetails")) || [];
  const dispatch = useDispatch();

  const name = userDetails.firstName;
  const handleClickOnUserButton = () => {
    if (isLoggedIn) {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userDetails");
      dispatch(EmptyCart())
    }
  };
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
      </Link>
    </Box>
  );
};
export default UserButton;
