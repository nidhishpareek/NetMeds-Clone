import {
  background,
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import MobileNoForm from "./MobileNoForm";
import OTPform from "./OTPForm";

const Signin = () => {
  const [mobileAuthenticated, setMobileAuthenticate] = useState(false);
  const [mobilenumber, setMobileNumber] = useState(0);
  useEffect(() => {
    console.log("use effect run", mobilenumber);
  }, [mobilenumber]);
  const toggleMobileAuthenticate = (number) => {
    setMobileAuthenticate(!mobileAuthenticated);
    setMobileNumber(+number);
    console.log("number", number);
  };

  return (
    <Flex
      bg={"rgb(247 246 246)"}
      height="100vh"
      flexDirection={"column"}
      alignItems="center"
    >
      <Container
        bg={"white"}
        centerContent
        borderRadius={"16px"}
        width="80%"
        maxW="4xl"
        margin={"60px"}
        mb='20px'
      >
        <Flex>
          <Box>
            <Image
              width="100%"
              maxW={"488px"}
              src="https://www.netmeds.com/images/cms/wysiwyg/cms/1588773798_sign-in-banner-new.png"
            />
          </Box>
          <Box maxW={"468px"}>

            {(mobileAuthenticated) ?
            <OTPform
              number={mobilenumber ? mobilenumber : 8696861773}
              toggleMobileAuthenticate={toggleMobileAuthenticate}
            />:
            <MobileNoForm
              toggleMobileAuthenticate={toggleMobileAuthenticate}
            />
            }
          </Box>
        </Flex>
      </Container>

      <Container fontSize={"12px"} centerContent>
        <Text>
          By continuing you agree to our{" "}
          <Link color="rgb(240,105,154)"> Terms of service</Link>
        </Text>
        <Text>
          and <Link color="rgb(240,105,154)"> Privacy & Legal Policy</Link>.
        </Text>
      </Container>
    </Flex>
  );
};
export default Signin;
