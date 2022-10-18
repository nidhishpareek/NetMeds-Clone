import {
  Box,
  Flex,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Product_API } from "../../../../api";
import { Data } from "../../../../pages/Context/DataContext";
import DelieveryComponent from "./DelieveryComponent";
const InputComponent = () => {
  const [input, setInput] = useState('');
  const [searchData, setSearchData] = useState([]);
  const ref = useRef(null);
  const {handlecurrProduct} = useContext(Data)

  const handleChange = (e) => {
    setInput(e.target.value);
    displayRelated();
  }
  var displayRelated = debounce (function() {
    if(input.length>1) {
      fetch(`${Product_API}?q=${input}&_limit=10`)
      .then((res) => res.json())
      .then((data) => {
        ref.current.style.display = 'block'
        setSearchData(data);
      })
      .catch((err) => {
        console.log(err,"err");
      })
    }
    else {
      ref.current.style.display = 'none';
    }
  },1000)
  function debounce(fn,delay) {
    let timerId;
    return function() {
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
    <Box pos='relative'>
        <Flex bg={"white"} borderRadius="6px" width={'600px'}>
        <DelieveryComponent />
        <Input
          width='100%'
          fontSize="14px"
          placeholder="Search for medicine & wellness products…"
          focusBorderColor='none'
          onChange={(e) => handleChange(e)}
          value={input}
        />
      </Flex>
      { input.length>0 && <Box pos='absolute' className="webkit" borderTop={'1px solid #ddde0'} ref={ref} borderRadius={'0 0 6px 6px'} mt='2px' display='none' bg='#fff' w='100%' maxH='70vh' overflow={'auto'}>
        <Box w='100%'>
          {
            searchData.map(el => (
              <Box borderBottom='1px solid #dddde0' onClick={() => showProduct(el)} cursor={'pointer'} key={el.id} display='flex' mb='10px'>
                <Box  w='30%' p='5px'>
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
  );
};
export default InputComponent;
