import { Box, Container, Flex, Image } from "@chakra-ui/react";
import CartButton from "./CartButton";
import UploadButton from "./UploadButton";
import UserButton from "./UserButton";
import InputComponent from "./InputComponent";
import { Link } from "react-router-dom";
const TopNavbar = () => {
  return (
    <Box bg={"rgb(50,174,177)"} paddingBlock='15px'  top='0px' position='fixed' width={'100%'} zIndex='1' >
      <Container
        width={'100%'}
        maxW="1500px"
        bg={"rgb(50,174,177)"}
        
      >
        <Flex  justifyContent={'center'} gap='10px' alignItems={"center"} > 
          <Link to={'/'}>
            <Box paddingRight={"20px"}>
              <Image
                src="https://nms-assets.s3-ap-south-1.amazonaws.com/images/cms/aw_rbslider/slides/1663609483_netmeds-new-logo.svg"
                alt="NetmedsLogo"
                w={"168px"}
                minWidth="168px"
                maxWidth="168px"
              ></Image>
            </Box>
          </Link>
          <InputComponent />
          <UploadButton />
          <Link to={'/cart'}> <CartButton /></Link>
          <UserButton />
        </Flex>
      </Container>
    </Box>
  );
};

export default TopNavbar;
