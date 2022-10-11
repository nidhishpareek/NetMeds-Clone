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
import { AiOutlineArrowRight } from "react-icons/ai";
const NewsLetter = () => {
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
      <Flex>
        <Input
          fontSize="14px"
          placeholder="Enter your email address"
          variant={"unstyled"}
          width="230px"
        />
        <IconButton
          colorScheme="white"
          color={"rgb(50,174,177)"}
          aria-label="Search database"
          icon={<AiOutlineArrowRight />}
        />
      </Flex>
      <Center height="10px">
        <Divider orientation="horizontal" borderColor="rgba(11,18,25,.5)" />
      </Center>
      <Flex justifyContent='space-around'>
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
