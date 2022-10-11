import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
const TopNavbar = () => {


  return (
    <Flex alignItems={'center'} paddingBlock={'20px'} bg={"rgb(50,174,177)"}>
      <Link>
        <Box>
          <Image
            src="https://nms-assets.s3-ap-south-1.amazonaws.com/images/cms/aw_rbslider/slides/1663609483_netmeds-new-logo.svg"
            alt="NetmedsLogo"
            w={"168px"}
          ></Image>
        </Box>
      </Link>

      <Box>
        <Flex>
          <Image
            pr={"5px"}
            src="https://www.netmeds.com/assets/gloryweb/images/icons/upload_rx.svg"
            alt="upload icon"
            loading="eager"
          ></Image>
          <Text color={"white"} fontSize="14px" fontWeight="semibold">
            Upload
          </Text>
        </Flex>
      </Box>

    <Box>
        <Flex>
            <Image src="https://www.netmeds.com/assets/gloryweb/images/icons/cart_icon.svg" loading="eager"></Image>
            
            <Text color={"white"} fontSize="14px" fontWeight="semibold">Cart</Text>
        </Flex>
    </Box>

    </Flex>
  );
};

export default TopNavbar;
