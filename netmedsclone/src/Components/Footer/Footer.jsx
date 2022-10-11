import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import FooterTagsCompiled from "./FooterTagsCompiled";
import NewsLetterSection from './NewsLetterSection'
const Footer = () => {
  return (
    <Box width={"80%"} margin={"auto"} paddingBlock="34px">
      <Flex>
        <Box>
          <Image
            src="https://www.netmeds.com/assets/gloryweb/images/netmeds-footer-logo.svg"
            alt="NetmedsLogo"
            w={"168px"}
            minWidth="168px"
            maxWidth="168px"
          ></Image>
        </Box>
        <Container size={"md"} centerContent={false}>
          <Text fontSize={"16px"} color="rgba(11,18,25,.5)">
            Netmeds.com is one of India’s most trusted pharmacies, dispensing
            quality medicines at reasonable prices to over 7 million happy
            customers – PAN India.
          </Text>
        </Container>
      </Flex>
      {/* A Line to divert the sections */}
      <Center height="64px">
        <Divider orientation="horizontal" borderColor="rgba(11,18,25,.5)" />
      </Center>
      <Flex justifyContent={'space-between'}>
        <FooterTagsCompiled></FooterTagsCompiled>
        <NewsLetterSection></NewsLetterSection>
      </Flex>
      {/* A Line to divert the sections */}
      <Center height="64px">
        <Divider orientation="horizontal" borderColor="rgba(11,18,25,.5)" />
      </Center>
    </Box>
  );
};

export default Footer;
