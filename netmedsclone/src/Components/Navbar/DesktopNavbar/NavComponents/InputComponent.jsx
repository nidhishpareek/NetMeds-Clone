import {
  Flex,
  Input,
} from "@chakra-ui/react";
import DelieveryComponent from "./DelieveryComponent";
const InputComponent = () => {
  return (
    <Flex bg={"white"} borderRadius="6px" width={'600px'}>
      <DelieveryComponent />
      <Input
        width='100%'
        fontSize="14px"
        placeholder="Search for medicine & wellness products…"
        focusBorderColor='none'
      />
    </Flex>
  );
};
export default InputComponent;
