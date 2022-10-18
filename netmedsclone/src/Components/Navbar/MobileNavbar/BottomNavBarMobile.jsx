import { Box, Button, Flex, Image, Input, InputGroup, InputRightElement, Link, Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FiSearch } from "react-icons/fi";
import { useContext, useRef, useState } from "react";
import { Data } from "../../../pages/Context/DataContext";
import { useNavigate } from "react-router-dom";
import { Product_API } from "../../../api";

const BottomNavBarMobile = () => {
  const [input, setInput] = useState('');
  const [searchData, setSearchData] = useState([]);
  const ref = useRef(null);
  const { handlecurrProduct } = useContext(Data)

  const name = "Nidhish";

  const handleChange = (e) => {
    setInput(e.target.value);
    displayRelated();
  }
  var displayRelated = debounce(function () {
    if (input.length > 1) {
      fetch(`${Product_API}?q=${input}&_limit=10`)
        .then((res) => res.json())
        .then((data) => {
          ref.current.style.display = 'block'
          setSearchData(data);
        })
        .catch((err) => {
          console.log(err, "err");
        })
    }
    else {
      ref.current.style.display = 'none';
    }
  }, 1000)
  function debounce(fn, delay) {
    let timerId;
    return function () {
      clearTimeout(timerId);
      timerId = setTimeout(function () {
        fn()
      }, delay)
    }
  }
  const navigate = useNavigate();
  const showProduct = (el) => {
    setInput('');
    handlecurrProduct(el)
    navigate(`/products/${el.id}`)
  }

  return (
    <Box paddingInline={"16px"}  zIndex='5'>
      <Flex alignItems="center" paddingBlock={"5px"}>
        <Text fontSize={"10px"} pt="2px">
          Deliver to
        </Text>
        <Button
          _hover={{ bg: 'white' }}
          padding={"0px"}
          size="s"
          fontSize={"12px"}
          pl="5px"
          fontWeight={"bold"}
          background={"white"}
        >
          {name ? name : "Nidhish"} - Central Delhi 110002{" "}
          <ChevronDownIcon paddingLeft={"5px"} fontSize="20px" />
        </Button>
      </Flex>
      <Box pos='relative'>
        <InputGroup height={'38px'} flex='center' mb='10px'>
          <Input fontSize={'14px'} height='38px' placeholder="Search your products..." onChange={(e) => handleChange(e)}
            value={input} />
          <InputRightElement mt={'-5px'} children={<FiSearch size={'23px'} color="grey" />} />
        </InputGroup>
        {input.length > 0 && <Box pos='absolute' zIndex={'4'} className="webkit" borderTop={'1px solid #ddde0'} ref={ref} borderRadius={'6px'} display='none' bg='#fff' w='100%' maxH='70vh' overflow={'auto'}>
          <Box w='100%'>
            {
              searchData.map(el => (
                <Box borderBottom='1px solid #dddde0' onClick={() => showProduct(el)} cursor={'pointer'} key={el.id} display='flex' mb='10px'>
                  <Box w='30%' p='5px'>
                    <Image src={el.img1 ? el.img1 : "https://www.netmeds.com/images/product-v1/600x600/default/no_image.png"}></Image>
                  </Box>
                  <Box p='5px' w='100%'>
                    <Text fontWeight={'600'} mb='-5px'>{el.title}</Text>
                    <Text fontSize={'12px'} color='#151B3999' as='i'>Mfr: {el.manufacturer}</Text>
                    <Text fontWeight={'600'} color='#ef4281' mr='5px' mt='10px'>Rs. {parseFloat(el.actual_price).toFixed(2)}</Text>
                    {
                      el.crossed_price && <Text color='#151B3999' fontWeight={'400'} textDecoration={'line-through'} fontSize={'12px'}>Rs. {parseFloat(el.crossed_price).toFixed(2)}</Text>
                    }
                  </Box>
                </Box>
              ))
            }
          </Box>
        </Box>}
      </Box>
    </Box>
  );
};
export default BottomNavBarMobile;
