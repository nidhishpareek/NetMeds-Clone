import { Box, Image} from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
export const Carousel = () => {
    const images = [
        {id: 1}, {id: 2}, {id: 3}, {id: 4}
    ]
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const [timing, setTiming] = useState('');

    const handleClick = (val, plus) => {
        setTiming(clearTimeout(timing));
        let newCount = count;
        if(plus>0) {
            newCount = plus-1;
        }
        if (val === 'forward') {
            newCount++;
            setCount(newCount);
        } else if (val === 'backward') {
            newCount--;
            setCount(newCount);
        }

        if (newCount === images.length) {
            setCount(0);
            ref.current.style.transform = 'translate(0)';
            return;
        }
        if (newCount === -1) {
            setCount(images.length-1);
            ref.current.style.transform = `translate(-${
                (images.length - 1) * (100 / images.length)
            }%)`;
            return;
        }

        ref.current.style.transform = `translate(-${
            newCount * (100 / images.length)
        }%)`;
    }
    const setTimer = () => {
		setTiming(clearTimeout(timing));
		setTiming(
			setTimeout(() => {
				setCount(count + 1);
				handleClick('forward', 0);
			}, 3000),
		);
	};
	useEffect(setTimer, [count]);
    const handleDot = (value) => {
        setCount(value);
        handleClick('forward', value);
    }
    const dotStyleTrue = {
        height: '8px',
        width: '8px',
        border: '1px solid gray',
        backgroundColor: '#24aeb1',
        borderRadius: '50%'
    }
    const dotStyleFalse = {
        height: '8px',
        width: '8px',
        border: '1px solid gray',
        backgroundColor: '#fff',
        borderRadius: '50%'
    }
    return (
        <Box position='relative' w='97vw' pt='20px' m='auto' mb={{base: '15px', md: '30px', lg: '40px'}}>
            <Box overflow={'hidden'}>
                <Box ref={ref} w='400%' display={'grid'} gridTemplateColumns='repeat(4,1fr)' transition='0.3s'>
                {
                    window.innerWidth<599 ? 
                    images.map(el => (
                        <Box key={el.id} borderRadius={{base: '10px', md: '0'}} w='97vw' h={{base: '200px', md: '250px', lg: '300px',}}>
                            <Image borderRadius={{base: '10px', md: '0'}} w='100%' h='100%' src={process.env.PUBLIC_URL + `/Images/netmedSCC${el.id}.jpg`} alt="" />
                        </Box>
                    )) :
                    images.map(el => (
                        <Box key={el.id} borderRadius={{base: '10px', md: '0'}} w='97vw' h={{base: '200px', md: '250px', lg: '300px',}}>
                            <Image borderRadius={{base: '10px', md: '0'}} w='100%' h='100%' src={process.env.PUBLIC_URL + `/Images/netmedC${el.id}.jpg`} alt="" />
                        </Box>
                    ))
                }
                </Box>
                <Box position= 'absolute' bottom= '10px' left='48%'>
                    <Box display={'flex'} gap= '5px'>
                    {
                        [0,1,2,3].map(el => (
                            <Box key={el} style={count===el ? dotStyleTrue: dotStyleFalse} onClick={() => handleDot(el)}></Box>
                        ))
                    }
                    </Box>
                </Box>
            </Box>
            <Box position={'absolute'} w='100%' display={'flex'} justifyContent='space-between' top='50%' transform='translateY(-50%)'>
                <span style={{fontSize:'35px', cursor: 'pointer', marginLeft: '8px', color: '#363b46'}} onClick={() => handleClick('backward',0)} className="material-symbols-outlined">arrow_back_ios</span>
                <span style={{fontSize:'35px', cursor: 'pointer', color: '#363b46'}} onClick={() => handleClick('forward',0)} className="material-symbols-outlined">arrow_forward_ios</span>
            </Box>
           
        </Box>
        
    )
}