import { Box, Image } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import '../landing.modules.css'
export const HealthSlider = () => {
    // const [right, setRight] = useState(0);
    const ref = useRef(null);
    const handleScroll = (value) => {
        if(value==='left') {
           ref.current.style.right = '500'
        console.log(ref.current);  
        }
        else {
            ref.current.style.transform = 'translate(600)'
    //         setRight((prev) => prev-500)
        }
    }
    console.log(ref.current);
    return <>
    <div className="healthSliderDiv">
        <div ref={ref}>
        <div>
            <img src={process.env.PUBLIC_URL+`/Images/netmedHS1.jpg`}></img>
        </div>
        <div>
            <img src={process.env.PUBLIC_URL+`/Images/netmedHS1.jpg`}></img>
        </div>
        <div>
            <img src={process.env.PUBLIC_URL+`/Images/netmedHS1.jpg`}></img>
        </div>
        <div>
            <img src={process.env.PUBLIC_URL+`/Images/netmedHS1.jpg`}></img>
        </div>
    </div>
    </div>
    <button onClick={() =>handleScroll('left')} >left</button>
    <button onClick={() =>handleScroll('right')}>right</button>
    </>
}