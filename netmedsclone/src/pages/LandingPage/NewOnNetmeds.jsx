import { Box, Button, Grid, Heading, Image } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'

export default function NewOnNetmeds() {
    const [count, setCount] = useState(0);
    const ref = useRef();
    const newOnNetmeds = [
        {id: 1}, {id: 2}, {id: 3}, { id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}, {id: 10}
    ]
    const handleClick = (val) => {
        let newCount = count;
            if (val === 'forward') {
                newCount++;
                setCount(newCount);
            } else if (val === 'backward') {
                newCount--;
                setCount(newCount);
            }
    
            if (newCount === newOnNetmeds.length-2) {
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
  return (
    <Box position={'relative'}>
    <Box w='95vw' m='auto' mb='30px'>
    <Box display={'flex'} alignItems='center' justifyContent='space-between' mb='30px'>
        <Box>
        <Heading as='h2' fontSize='25px' fontWeight='500'>New on Netmeds</Heading>
        </Box>
    </Box>
    <Box overflow={{base: 'scroll', md: 'hidden'}} >
    <Box transition={'0.3s'} ref={ref} display='grid' gridTemplateColumns={`repeat(${newOnNetmeds.length},1fr)`} gap='1vw'>
        {
            newOnNetmeds.map(el => (
                <Box w={{base: '200px', md: '31vw'}} h={{base: '220px', md: '100%'}} key={el.id} >
                    <Image borderRadius={'10px'} w='100%' h='100%' src={process.env.PUBLIC_URL+`/Images/netmedNON${el.id}.jpg`}></Image>
                </Box>
            ))
        }
    </Box>
    </Box>

</Box>
<Box w='99%' left='0.5%' position={'absolute'} display={{base: 'none', md: 'flex'}} justifyContent={'space-between'} top='55%'>
        <Button disabled={count===0} onClick={() => handleClick('backward')} borderRadius={'50%'} bg='#fff' w='40px' h='40px'><span style={{fontSize:'30px'}} className="material-symbols-outlined">chevron_left</span></Button>
        <Button disabled={count===newOnNetmeds.length-3} onClick={() => handleClick('forward')} borderRadius={'50%'} bg='#fff' w='40px' h='40px'><span style={{fontSize:'30px'}} className="material-symbols-outlined">chevron_right</span></Button>
    </Box>
</Box>
  )
}
