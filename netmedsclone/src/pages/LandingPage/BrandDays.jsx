import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Flex, Grid, Heading, Image, Link, Text } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'

export default function () {
    const [limitedTimeData, setLimitedTimeData] = useState([]);
    const [count, setCount] = useState(0);
    const ref = useRef();
    const getData = () => {
        console.log('here')
        fetch('https://netmedsdata.onrender.com/home?_page=2&_limit=10')
        .then((res) => res.json())
        .then((res) => {
            setLimitedTimeData(res);
        })
    }
    useEffect(() => {
        getData();
    },[])
    const handleClick = (val) => {
        let newCount = count;
            if (val === 'forward') {
                newCount++;
                setCount(newCount);
            } else if (val === 'backward') {
                newCount--;
                setCount(newCount);
            }
    
            if (newCount === limitedTimeData.length-4) {
                setCount(0);
                ref.current.style.transform = 'translate(0%)';
                return;
            }
            if (newCount === -1) {
                setCount(0);
                ref.current.style.transform = `translate(0%)`;
                return;
            }
            ref.current.style.transform = `translate(-${newCount*20.2}%)`;
    }
  return (
    <Box position={'relative'}>
        <Box bg='#24aeb1' h='200px' p='15px 30px'>
            <Box display={'flex'} alignItems='center' justifyContent='space-between' mb='20px'>
                <Box>
                    <Heading color='#fff' as='h2' fontSize='25px' fontWeight='500'>Brand Days</Heading>
                </Box>
                <Box>
                    <Link color='#fff' style={{textDecoration: 'none'}} ><Text>View All <ChevronRightIcon/></Text></Link>
                </Box>
            </Box>
        </Box>
        <Box h='300px'>
            <Box w='100%' position='absolute' top='70px'>
                <Box w='95vw' m='auto'>
                    <Box overflow={'hidden'} pb='20px'>
                        <Box ref={ref} transition='0.3s' display='grid' gap='1vw' gridTemplateColumns={`repeat(${limitedTimeData.length},1fr)`}>
                                {
                                    limitedTimeData.map(el => (
                                        <Box w='18.2vw' key={el.id} p=' 30px 15px 15px 15px' boxShadow='rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px' borderRadius={'10px'} bg='#fff'>
                                            <Center><Image w='150px' h='150px' src={el.img1}></Image></Center>
                                            <Text mt='30px'fontWeight={'600'} h='50px' noOfLines={[1,2]} textOverflow={'ellipsis'}>{el.title}</Text>
                                            <Flex mt='8px' alignItems={'flex-end'}>
                                                <Text fontWeight={'600'} mr='5px'>₹ {parseFloat(el.actual_price).toFixed(2)}</Text>
                                                <Text color='gray' fontWeight={'600'} textDecoration={'line-through'} fontSize={'10px'}>₹ {parseFloat(el.crossed_price).toFixed(2)}</Text>
                                            </Flex>
                                            <Text m='5px 0' color='#60a723' fontSize='15px' fontWeight={'500'}>UPTO 25% off</Text>
                                            <Center><Button h='35px' borderRadius={'3px'} bg='#24aeb1' color='#fff' _hover={'none'} fontSize='14px' w='100%'>ADD TO CART</Button></Center>
                                        </Box>
                                    ))
                                }
                        </Box>
                    </Box>
                </Box>
                <Box w='99%' left='0.5%' position={'absolute'} display='flex' justifyContent={'space-between'} top='50%' transform={'translateY(-50%)'}>
                    <Button disabled={count===0} onClick={() => handleClick('backward')} borderRadius={'50%'} bg='#fff' w='40px' h='40px'><span style={{fontSize:'30px'}} class="material-symbols-outlined">chevron_left</span></Button>
                    <Button disabled={count===limitedTimeData.length-5} onClick={() => handleClick('forward')} borderRadius={'50%'} bg='#fff' w='40px' h='40px'><span style={{fontSize:'30px'}} class="material-symbols-outlined">chevron_right</span></Button>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}
