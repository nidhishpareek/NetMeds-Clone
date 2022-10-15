//Change isLoggedIn and name according to Redux.

import { Avatar, Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const UserButton = () => {
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")) || false;
  const navigate = useNavigate();
  const userDetails = JSON.parse(localStorage.getItem("userDetails")) || [];
  const name = userDetails.firstName;
  const handleClickOnUserButton = () => {
    if (!isLoggedIn) {
      console.log("navigating");
      navigate("/Login");

    } else {      console.log("removing");
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userDetails");
    }
  };
  return (
    <Box
      bgColor={"rgb(50,174,177)"}
      _hover={{ bg: "rgb(50,174,177)" }}
      size="xs"
    >
      <Link
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
