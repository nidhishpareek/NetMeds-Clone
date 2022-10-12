import { Box, Flex, Text } from "@chakra-ui/react";

const FooterTags = ({ title, array }) => {
  return (
    <Flex flexDirection={'column'} alignItems='start'>
      <Text fontWeight={"semibold"} p='5px' pb="15px"  fontSize="14px">
        {title}
      </Text>
      {array.map((ele, index) => (
        <Text fontSize="14px" p={'5px'} key={title + index} as='button'>
          {ele}
        </Text>
      ))}
    </Flex>
  );
};
export default FooterTags;
