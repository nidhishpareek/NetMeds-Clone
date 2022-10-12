import {
  Box,
  Center,
  Divider,
  Flex,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
const NewsLetter = () => {
  const [newsletteremail, setnewsletteremail] = useState();
  const [error, seterror] = useState();
  const inputref = useRef();
  useEffect(() => console.log(newsletteremail), [newsletteremail]);
  const sendemail = (event) => {
    event.preventDefault();
    if (inputref.current.value === "") {
      errorenable();
      return;
    }
    console.log(inputref.current.value)
    setnewsletteremail(inputref.target);
  };
  const errorenable = () => {
    seterror(true);
    setTimeout(() => {
      seterror(false);
    }, 5000);
  };
  return (
    <Box width={"250px"}>
      <Text fontWeight={"semibold"} fontSize="14px" pb="15px">
        {" "}
        SUBSCRIBE TO OUT NEWSLETTER
      </Text>
      <Text fontSize="14px" pb={"20px"}>
        Get a free subscription to our health and fitness tip and stay tuned to
        our latest offers.
      </Text>
      <form onSubmit={sendemail}>
        <Flex>
          <Input
            ref={inputref}
            fontSize="14px"
            placeholder="Enter your email address"
            variant={"unstyled"}
            width="230px"
            type={"email"}

          />
          <IconButton
            colorScheme="white"
            color={"rgb(50,174,177)"}
            aria-label="Search database"
            icon={<AiOutlineArrowRight />}
            type='submit'
          />
        </Flex>
      </form>
      <Center height="10px">
        <Divider orientation="horizontal" borderColor="rgba(11,18,25,.5)" />
      </Center>
      {error && <Text textColor={"red"}>Please enter your E-mail ID!</Text>}
      <Flex justifyContent="space-around" pt={"20px"}>
        <Image
          src="https://www.netmeds.com/assets/gloryweb/images/icons/play_store.png"
          width={"45%"}
        />
        <Image
          src="https://www.netmeds.com/assets/gloryweb/images/icons/app_store.png"
          width={"45%"}
        />
      </Flex>
    </Box>
  );
};
export default NewsLetter;
