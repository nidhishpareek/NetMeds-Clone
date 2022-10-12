//Change isLoggedIn and name according to Redux.

import { Avatar, Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const UserButton = () => {
    const isLoggedIn  = false;
    const name = 'Nidhish'
  return (
    <Box
      bgColor={"rgb(50,174,177)"}
      _hover={{ bg: "rgb(50,174,177)" }}
      size="xs"
    >
      <Link _hover={{ textDecoration: "none" }} to={'/Login'}>
        <Flex align={"center"}>
          <IconButton
            size="lg"
            variant="ghost"
            aria-label="open menu"
            _hover={{ bg: "rgb(50,174,177)" }}
            icon={
              <>
                <Avatar
                  icon={<FaUserCircle />}
                  bg='"rgb(50,174,177)"'
                  boxSize={"30px"}
                >
                </Avatar>
              </>
            }
          />

          <Text color={"white"} fontSize="14px" fontWeight="semibold" whiteSpace='nowrap'>
            {isLoggedIn? name: 'Sign in / Sign up' }
          </Text>
        </Flex>
      </Link>
    </Box>
  );
};
export default UserButton;
