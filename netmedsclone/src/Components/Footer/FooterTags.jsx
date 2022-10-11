import { Box, Text } from "@chakra-ui/react";

const FooterTags = ({ title, array }) => {
  return (
    <Box>
      <Text fontWeight={"semibold"} p='5px' pb="15px"  fontSize="14px">
        {title}
      </Text>
      {array.map((ele, index) => (
        <Text fontSize="14px" p={'5px'} key={title + index}>
          {ele}
        </Text>
      ))}
    </Box>
  );
};
export default FooterTags;
