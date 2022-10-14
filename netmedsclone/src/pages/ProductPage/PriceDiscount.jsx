import { Box, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useContext } from 'react'
import { Data } from '../Context/DataContext'
// import axios from 'axios'

const PriceDiscount = ({ name }) => {
    const { sliderVal, handlePriceRange } = useContext(Data);
    const [sliderVal2, setSliderVal2] = useState([0, 100])
    // console.log(sliderVal)

    // const maxMin = () => {
    //     // const newRange = [0, 45000];
    //     let maxPrice = 0;
    //     axios.get(`https://netmedsdata.onrender.com/products`)
    //         .then((res) => {
    //             res.data.map(el => { maxPrice = Math.max(maxPrice, (el.actual_price)) })
    //         })


    //     console.log(maxPrice, "maximum price")
    // }

    // maxMin()
    return (
        <>
            <Box fontSize="18px" fontWeight={700} letterSpacing="0.25px" color={"#151b39"} pl="20px">{name}</Box>
            {name === 'Price' && <RangeSlider
                defaultValue={[0, 45000]}
                w="85%"
                ml="25px"
                mr="50px"
                aria-label={['min', 'max']}
                onChangeEnd={(val) => handlePriceRange(val)}
                // onChange={(val) => handlePriceRange(val)}
                pos="relative"
                mb="20px"
                min={0}
                max={45000}
            >
                <RangeSliderTrack >
                    <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} boxSize="20px" >
                    <Box position="absolute" top="20px">{sliderVal[0]}</Box>
                </RangeSliderThumb>
                <RangeSliderThumb index={1} boxSize="20px"  >
                    <Box position="absolute" top="20px">{sliderVal[1]}</Box>
                </RangeSliderThumb>
            </RangeSlider>}
            {name === 'Discount' && <RangeSlider
                defaultValue={[0, 100]}
                w="85%"
                ml="25px"
                mr="50px"
                aria-label={['min', 'max']}
                pos="relative"
                mb="20px"
                onChange={(val) => setSliderVal2(val)}
                min={0}
                max={100}
            >
                <RangeSliderTrack >
                    <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} boxSize="20px" >
                    <Box position="absolute" top="20px">{sliderVal2[0]}</Box>
                </RangeSliderThumb>
                <RangeSliderThumb index={1} boxSize="20px"  >
                    <Box position="absolute" top="20px">{sliderVal2[1]}</Box>
                </RangeSliderThumb>
            </RangeSlider>}
        </>
    )
}

export default PriceDiscount