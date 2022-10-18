import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";
const MobileNoForm = ({ toggleMobileAuthenticate }) => {
  const initialstate = { isEmpty: false, notProperLength: false, number: "" };
  const [validator, setValidator] = useState({ ...initialstate });

  const validatorFunction = (event) => {
    let inputMobileNumber = event.target.value;
    if (inputMobileNumber.length == 0) {
      setValidator({
        notProperLength: false,
        isEmpty: true,
        number: inputMobileNumber,
      });
    } else {
      if (inputMobileNumber.length !== 10)
        setValidator({
          isEmpty: false,
          notProperLength: true,
          number: inputMobileNumber,
        });
      else
        setValidator({
          isEmpty: false,
          notProperLength: false,
          number: inputMobileNumber,
        });
    }
  };
  const handlesubmit = (event) => {
    event.preventDefault();
    if (!validator.isEmpty && !validator.notProperLength) {
      if (validator.number.length == 0) {
        setValidator({ ...validator, isEmpty: true });
        return;
      }
      console.log("authenticate");
      toggleMobileAuthenticate(validator.number);
    }
  };
  ////////////////////////////////////////////////////////////////////return statement///////////////////
  return (
    <Box padding="30px 48px">
      <Box>
        <Text fontSize={"24px"} fontWeight="bold" mb={"8px"}>
          Sign In / Sign Up
        </Text>
        <Text color={"rgba(21,27,57,.6)"} fontSize="14px" mb="35px">
          Sign up or Sign in to access your orders, special offers, health tips
          and more!
        </Text>
      </Box>
      <form onSubmit={handlesubmit}>
        <Text fontSize={"13px"} color="#24aeb1" paddingBlock={"3px"}>
          PHONE NUMBER
        </Text>
        <InputGroup variant="flushed" paddingBlock={"3px"}>
          <InputLeftElement
            height="24px"
            fontSize={"16px"}
            children={
              <>
                <Text>+91</Text>
                <Center height="32px" width={"10px"}>
                  <Divider
                    orientation="vertical"
                    borderColor="black"
                    h={"60%"}
                  />
                </Center>
              </>
            }
          />
          <Input
            
            paddingBlock={"3px"}
            height="24px"
            type="number"
            placeholder="Enter your mobile number"
            fontSize={"16px"}
            onChange={validatorFunction}
          />
        </InputGroup>
        <Text color={"red"} fontSize="11px" hidden={!validator.isEmpty}>
          Please enter your Mobile Number!
        </Text>
        <Text color={"red"} fontSize="11px" hidden={!validator.notProperLength}>
          Please enter valid Mobile Number!
        </Text>
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
          USE OTP
        </Button>
      </form>
      <Flex justifyContent={"space-around"} marginTop="80px">
        <Button
          leftIcon={<FcGoogle />}
          bg="white"
          color={"rgba(21,27,57,.6)"}
          fontSize="14px"
          border="1px solid greay"
        >
          Google
        </Button>
        <Button
          leftIcon={<GrFacebook />}
          bg="white"
          color={"rgba(21,27,57,.6)"}
          fontSize="14px"
          border="1px solid greay"
          variant="outline"
        >
          Facebook
        </Button>
      </Flex>
    </Box>
  );
};
export default MobileNoForm;
