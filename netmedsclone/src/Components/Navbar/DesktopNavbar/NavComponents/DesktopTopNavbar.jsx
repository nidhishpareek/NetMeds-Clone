import { Box, Container, Flex, Image, Link } from "@chakra-ui/react";
import CartButton from "./CartButton";
import UploadButton from "./UploadButton";
import UserButton from "./UserButton";
import InputComponent from "./InputComponent";
const TopNavbar = () => {
  return (
    <Box bg={"rgb(50,174,177)"} paddingTop='15px'>
      <Container
        width={'100%'}
        maxW="1500px"
        bg={"rgb(50,174,177)"}
        
      >
        <Flex  justifyContent={'center'} gap='10px' alignItems={"center"} > 
          <Link>
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
          <InputComponent></InputComponent>
          <UploadButton></UploadButton>
          <CartButton></CartButton>
          <UserButton></UserButton>
        </Flex>
      </Container>
    </Box>
  );
};

export default TopNavbar;
