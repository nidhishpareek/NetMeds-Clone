import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const BottomList = () => {
  const ListArray = [
    "COVID Essentials",
    "Diabetes",
    "Eyewear",
    "Ayush",
    "Ayurvedic",
    "Homeopathy",
    "Fitness",
    "Mom & Baby",
    "Devices",
    "Surgicals",
    "Sexual Wellness",
    "Treatments",
  ];
  return (
    <Box bg='rgb(243,246,250)' padding={'10px'} >
      <Container size={"5xl"}>
        <Flex margin={"auto"} justifyContent="center" gap={"4%"}>
          {ListArray.map((ele, index) => {
            return (
              <Link key={index} to={`/products`}>
                <Text fontSize={"13px"} whiteSpace='nowrap'>
                  {ele}
                </Text>
              </Link>
            );
          })}
        </Flex>
      </Container>
    </Box>
  );
};
export default BottomList;
