import { Avatar, AvatarBadge, Box, Flex, Icon, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";

const MobileNavbar = () => {
  const count = 2;
  return (
    <Box>
      <Flex
        paddingInline={"16px"}
        height="50px"
        alignItems={"center"}
        justifyContent="space-between"
      >
        <Image
          src="https://www.netmeds.com/assets/gloryweb/images/netmeds-footer-logo.svg"
          alt="netmedslogomobile"
          width={"110px"}
        ></Image>
        <Flex>
          <Image src="https://m.netmeds.com/assets/version1665682643/glorymsite/images/icons/offer_icon.svg"></Image>
          <Link to={"/cart"}>
            <Avatar
              paddingLeft={"10px"}
              icon={<HiShoppingCart />}
              bg='"rgb(50,174,177)"'
              color={'grey'}
              boxSize={"50px"}
              position="relative"
            >
              <AvatarBadge
                boxSize="15px"
                bg="#ef4281"
                color={'white'}
                border={"0px"}
                fontSize="10px"
                position={"absolute"}
                top="5px"
                right={'8px'}
              >
                {count}
              </AvatarBadge>
            </Avatar>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default MobileNavbar;
