import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Button, Circle, Grid, Heading, Image } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'

export default function() {
    const [count, setCount] = useState(0);
    const ref = useRef();
    const [timing, setTiming] = useState('');
    const trending = [
        {id: 1}, {id: 2}, {id: 3}, { id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}, { id: 9}, {id: 10}
    ]
    const handleClick = (val) => {
        setTiming(clearTimeout(timing));
        let newCount = count;
            if (val === 'forward') {
                newCount++;
                setCount(newCount);
            } else if (val === 'backward') {
                newCount--;
                setCount(newCount);
            }
    
            if (newCount === trending.length-2) {
                setCount(0);
                ref.current.style.transform = 'translate(0%)';
                return;
            }
            if (newCount === -1) {
                setCount(0);
                ref.current.style.transform = `translate(0%)`;
                return;
            }
            ref.current.style.transform = `translate(-${newCount*33.7}%)`;
    }
    const setTimer = () => {
		setTiming(clearTimeout(timing));
		setTiming(
			setTimeout(() => {
				setCount(count + 1);
				handleClick('forward');
			}, 3000),
		);
	};
	useEffect(setTimer, [count]);
  return (
    <Box position={'relative'}>
        <Box w='95vw' m='auto' mb='30px'>
        <Box display={'flex'} alignItems='center' justifyContent='space-between' mb='30px'>
            <Box>
            <Heading as='h2' fontSize='25px' fontWeight='500'>Trending Today</Heading>
            </Box>
        </Box>
        <Box overflow={{base: 'scroll', md: 'hidden'}} >
        <Box transition={'0.3s'} ref={ref} display='grid' gridTemplateColumns={`repeat(${trending.length},1fr)`} gap='1vw'>
            {
                trending.map(el => (
                    <Box w={{base: '47vw', md: '31vw'}} h={{base: '120px', md: '100%'}} key={el.id} >
                        <Image borderRadius={'10px'} w='100%' h='100%' src={process.env.PUBLIC_URL+`/Images/netmedT${el.id}.${el.id==2 ? 'png': 'jpg'}`}></Image>
                    </Box>
                ))
            }
        </Box>
        </Box>

    </Box>
    <Box w='99%' left='0.5%' position={'absolute'} display={{base: 'none', md: 'flex'}} justifyContent={'space-between'} top='55%'>
            <Button disabled={count===0} onClick={() => handleClick('backward')} borderRadius={'50%'} bg='#fff' w='40px' h='40px'><span style={{fontSize:'30px'}} className="material-symbols-outlined">chevron_left</span></Button>
            <Button disabled={count===trending.length-3} onClick={() => handleClick('forward')} borderRadius={'50%'} bg='#fff' w='40px' h='40px'><span style={{fontSize:'30px'}} className="material-symbols-outlined">chevron_right</span></Button>
        </Box>
    </Box>
  )
}
