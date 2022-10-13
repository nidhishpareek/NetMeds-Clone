import { Box, Image} from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import '../landing.modules.css'
export const Carousel = () => {
    const images = [
        {id: 1}, {id: 2}, {id: 3}, {id: 4}
    ]
    const [count, setCount] = useState(0);
    const ref = useRef();
    const [timing, setTiming] = useState('');

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
				handleClick('forward');
			}, 3000),
		);
	};
	useEffect(setTimer, [count]);
    const handleDot = (value) => {
        setCount(value);
    }
    const dotStyleTrue = {
        border: '1px solid #24aeb1',
        background: '#24aeb1',
        height: '8px',
        width: '8px',
        border: '1px solid gray',
        backgroundColor: '#fff',
        borderRadius: '50%'
    }
    const dotStyleFalse = {
        border: '1px solid gray',
        background: '#fff',
        height: '8px',
        width: '8px',
        border: '1px solid gray',
        backgroundColor: '#fff',
        borderRadius: '50%'
    }
    return (
        <Box position='relative' w='97vw' m='auto' mb={{base: '15px', md: '30px', lg: '40px'}}>
            <Box overflow={'hidden'}>
                <Box ref={ref} w='400%' display={'grid'} gridTemplateColumns='repeat(4,1fr)' transition='0.3s'>
                {
                    images.map(el => (
                        <Box w='97vw' className="slide" h={{base: '200px', md: '250px', lg: '300px',}}>
                            <Image w='100%' h='100%' src={process.env.PUBLIC_URL + `/Images/netmedC${el.id}.jpg`} alt="" />
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
                <span style={{fontSize:'35px', cursor: 'pointer', marginLeft: '8px'}} onClick={() => handleClick('backward')} class="material-symbols-outlined">arrow_back_ios</span>
                <span style={{fontSize:'35px', cursor: 'pointer'}} onClick={() => handleClick('forward')} class="material-symbols-outlined">arrow_forward_ios</span>
            </Box>
           
        </Box>
        
    )
}