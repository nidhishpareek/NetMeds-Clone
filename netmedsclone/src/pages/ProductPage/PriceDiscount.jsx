import { Box, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useContext } from 'react'
import { Data } from '../Context/DataContext'

const PriceDiscount = ({ name }) => {
    const { handlePriceRange } = useContext(Data);
    const [sliderVal1, setSliderVal1] = useState([0, 45000])

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
                onChange={(val) => setSliderVal1(val)}
                pos="relative"
                mb="20px"
                min={0}
                max={45000}
            >
                <RangeSliderTrack h="5px">
                    <RangeSliderFilledTrack bgColor={"#d7d7d7"} />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} boxSize="23px"  >
                    <Box position="absolute" top="20px" fontSize={"14px"}>{sliderVal1[0]}</Box>
                    <Box w="23px" h="21px" bgColor="transparent" borderRadius={"50%"} border="7px solid #24aeb1" ></Box>
                </RangeSliderThumb>
                <RangeSliderThumb index={1} boxSize="23px"  >
                    <Box position="absolute" top="20px" fontSize={"14px"}>{sliderVal1[1]}</Box>
                    <Box w="23px" h="21px" bgColor="transparent" borderRadius={"50%"} border="7px solid #24aeb1" ></Box>
                </RangeSliderThumb>
            </RangeSlider>}
        </>
    )
}

export default PriceDiscount