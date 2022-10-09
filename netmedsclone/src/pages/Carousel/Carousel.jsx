import { Box, Center, Image} from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import {ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import '../landing.modules.css'
export const Carousel = () => {
    const [index, setIndex] = useState(0);
    const ref = useRef(null);
    useEffect(() => {
        clearInterval(ref.current);
        ref.current = setInterval(() => {
            setIndex(index+1);
        },4000) 
    },[index])

    useEffect(() => {
        if(index === 4) {
            setIndex(0);
        }
    },[index])
    const NextSlide = () => {
        setIndex(index+1);
    }
    const PrevSlide = () => {
        if(index === 0) {
            setIndex(3);
        }
        else {
            setIndex(index-1);
        }
    }
    const handleDot = (value) => {
        setIndex(value);
    }
    const dotStyleTrue = {
        border: '1px solid #24aeb1',
        background: '#24aeb1'
    }
    const dotStyleFalse = {
        border: '1px solid gray',
        background: '#fff'
    }
    return (
        <Box position='relative'>
            <Box className="Carousel-Container" w='100%' mb='40px'>
                {
                    <Box className="slide" h='300px'>
                        <Image w='100%' h='100%' objectFit='cover' src={process.env.PUBLIC_URL + `/Images/netmedC${index+1}.jpg`} alt="" />
                    </Box>
                }
                <ChevronLeftIcon onClick={PrevSlide} cursor='pointer' position='absolute' bottom='140px' left='10px' w='50px' h='50px' color="black" />
                <ChevronRightIcon onClick={NextSlide} cursor='pointer' position='absolute'   bottom='140px' right='10px' w='50px' h='50px' color="black" />
                <Center>
                    <Box className='dotDiv'>
                        {
                            [0,1,2,3].map(el => (
                                <Box style={index===el ? dotStyleTrue: dotStyleFalse} onClick={() => handleDot(el)}></Box>
                            ))
                        }
                    </Box>
                </Center>
            </Box>
        </Box>
        
    )
}