import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  PinInput,
  PinInputField,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const OTPform = ({ number, toggleMobileAuthenticate }) => {
  const handleOTP = () => {};
  return (
    <Box width={"468px"} padding="30px 48px">
      <Text fontSize={"24px"} fontWeight="bold" mb={"8px"}>
        Create Account
      </Text>
      <form onSubmit={handleOTP}>
        <Box>
          <Text fontSize={"13px"} color="#24aeb1">
            EMAIL ID
          </Text>
          <Input
            variant="flushed"
            paddingBlock={"3px"}
            height="24px"
            placeholder="Enter your Email Id"
            fontSize={"16px"}
          />
        </Box>
        <Box>
          <Text fontSize={"13px"} color="#24aeb1">
            FIRST NAME
          </Text>
          <Input
            variant="flushed"
            paddingBlock={"3px"}
            height="24px"
            placeholder="Enter your First Name"
            fontSize={"16px"}
          />
        </Box>
        <Box width={"100%"}>
          <Text fontSize={"13px"} color="#24aeb1">
            LAST NAME
          </Text>
          <Input
            variant="flushed"
            paddingBlock={"3px"}
            height="24px"
            placeholder="Enter your Last Name"
            fontSize={"16px"}
          />
        </Box>
        <Box>
          <Text fontSize={"12px"} color="rgba(21,27,57,.6)">
            VARIFYING NUMBER
          </Text>
          <Flex justifyContent={"space-between"}>
            <Text fontSize={"12px"} color="rgba(21,27,57,.6)">
              We have sent 6 digit OTP on +91-{number}
            </Text>
            <Text
              color="rgb(240,105,154)"
              fontSize={"12px"}
              onClick={() => toggleMobileAuthenticate()}
              _hover={{ cursor: "pointer" }}
            >
              Change
            </Text>
          </Flex>
        </Box>
        <HStack justifyContent="space-between">
          <PinInput placeholder='' >
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>
        <Flex justifyContent={'flex-end'}>
          <Text
            color="rgb(240,105,154)"
            fontSize={"12px"}
            _hover={{ cursor: "pointer" }}
          >
            Resend OTP
          </Text>
        </Flex>
        <Button
          type="submit"
          mt="24px"
          bg={"rgb(50,174,177)"}
          color="white"
          fontSize="14px"
          paddingBlock={"10px"}
          height="41px"
          width={"100%"}
          _hover={{ background: "rgb(50,174,177)" }}
        >
          VERIFY
        </Button>
      </form>
    </Box>
  );
};
export default OTPform;
