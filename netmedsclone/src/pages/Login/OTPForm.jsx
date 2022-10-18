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
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeLoginStatus } from "../../Redux/action";
import { SigninAuthentication } from "./LoginAuthentication";

const OTPform = ({ number, toggleMobileAuthenticate }) => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const userDetails = useSelector((state) => state.userDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const init = {
    goodEmail: true,
    goodFirstName: true,
    goodLastName: true,
    goodOTP: true,
    validOTP: true,
  };
  const [validations, setValidations] = useState({
    ...init,
  });
  const [otp, setOTP] = useState();
  const [generatedOTP, setGeneratedOTP] = useState();
  const [loadingSignup, setLoadingSignup] = useState(false);
  const email = useRef();
  const firstName = useRef();
  const lastName = useRef();
  //////////////////////////////////////////////////////////////
  useEffect(() => {
    generateOTPfunction();
  }, []);
  const generateOTPfunction = () => {
    const newotp = Math.floor(Math.random() * 10 ** 6);
    setGeneratedOTP(newotp);
    if (newotp < 99999) generateOTPfunction();
    console.log(newotp);
  };
  const goodEmailCheck = (entryEmail) => {
    const regexExp =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;

    return regexExp.test(entryEmail);
  };
  const handleValidations = (event) => {
    event.preventDefault();
    const formEntries = {
      email: email.current.value,
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      mobileNumber: number,
    };

    if (!goodEmailCheck(formEntries.email)) {
      setValidations({ ...init, goodEmail: false });
      return;
    } else if (formEntries.firstName.length === 0) {
      setValidations({ ...init, goodFirstName: false });
      return;
    } else if (lastName.current.value.length === 0) {
    } else if (formEntries.lastName.length === 0) {
      setValidations({ ...init, goodLastName: false });
      return;
    } else if (lastName.current.value.length === 0) {
      setValidations({ ...init, goodLastName: false });
    } else if (otp && otp.length === 0) {
      console.log("false");
      setValidations({ ...init, goodOTP: false });
      return;
    }
    if (otp !== generatedOTP) {
      console.log(otp, generatedOTP ,'false');

      setValidations({ ...init, validOTP: false });
      return;
    } else {
      console.log(otp, 'equal case but why' , generatedOTP, 'compare',otp === generatedOTP )
      setValidations({ ...init });
    }
    Authenticate(formEntries);
    console.log(formEntries);
  };
  const Authenticate = (formEntries) => {
    setLoadingSignup(true);
    SigninAuthentication(formEntries)
      .then((result) => {
        console.log(result);
        localStorage.setItem("userDetails", JSON.stringify(result));
        localStorage.setItem("isLoggedIn", true);
        dispatch(changeLoginStatus(result));
        navigate("/");
      })
      .catch(() => {
        console.log("failed");
      })
      .finally(() => {
        setLoadingSignup(false);
      });
  };

  return (
    <Box width={"468px"} padding="30px 48px">
      <Text fontSize={"24px"} fontWeight="bold" mb={"15px"}>
        Create Account
      </Text>
      <form onSubmit={handleValidations}>
        <Box mb={"38px"}>
          <Text fontSize={"13px"} color="#24aeb1">
            EMAIL ID
          </Text>
          <Input
            ref={email}
            variant="flushed"
            height="24px"
            placeholder="Enter your Email Id"
            fontSize={"16px"}
          />
          {
            <Text color={"red"} fontSize="11px" hidden={validations.goodEmail}>
              Please enter a valid email!
            </Text>
          }
        </Box>
        <Box mb={"38px"}>
          <Text fontSize={"13px"} color="#24aeb1">
            FIRST NAME
          </Text>
          <Input
            ref={firstName}
            variant="flushed"
            height="24px"
            placeholder="Enter your First Name"
            fontSize={"16px"}
          />
          {
            <Text
              color={"red"}
              fontSize="11px"
              hidden={validations.goodFirstName}
            >
              Please enter your First Name
            </Text>
          }
        </Box>
        <Box mb={"38px"}>
          <Text fontSize={"13px"} color="#24aeb1">
            LAST NAME
          </Text>
          <Input
            ref={lastName}
            variant="flushed"
            height="24px"
            placeholder="Enter your Last Name"
            fontSize={"16px"}
          />
          {
            <Text
              color={"red"}
              fontSize="11px"
              hidden={validations.goodLastName}
            >
              Please enter your Last Name
            </Text>
          }
        </Box>
        <Box className="validationBox">
          <Text fontSize={"12px"} color="rgba(21,27,57,.6)" mb={"10px"}>
            VARIFYING NUMBER
          </Text>
          <Flex justifyContent={"space-between"}>
            <Text fontSize={"12px"} color="rgba(21,27,57,.6)" mb={"10px"}>
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
        <HStack justifyContent="space-between" mb={"10px"}>
          <PinInput
            placeholder=""
            otp
            type="number"
            onComplete={(value) => {
              setOTP(+value);
            }}
          >
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>
        <Flex justifyContent={"space-between"}>
          <Text fontSize={"12px"} color="rgba(21,27,57,.6)" mb={"10px"}>
            {generatedOTP}
          </Text>
          <Text
            color="rgb(240,105,154)"
            fontSize={"12px"}
            _hover={{ cursor: "pointer" }}
            onClick={generateOTPfunction}
          >
            Resend OTP
          </Text>
        </Flex>
        <Box>
          {
            <Text color={"red"} fontSize="11px" hidden={validations.goodOTP}>
              Please enter OTP!
            </Text>
          }
          {
            <Text color={"red"} fontSize="11px" hidden={validations.validOTP}>
              Invalid OTP
            </Text>
          }
        </Box>
        <Button
          type="submit"
          isLoading={loadingSignup}
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
