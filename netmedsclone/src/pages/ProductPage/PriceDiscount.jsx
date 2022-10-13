import { Box, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack } from '@chakra-ui/react'
import React from 'react'

const PriceDiscount = ({ name }) => {
    return (
        <>
            <Box fontSize="18px" fontWeight={700} letterSpacing="0.25px" color={"#151b39"} pl="20px">{name}</Box>
            <RangeSlider
                defaultValue={[0, 100]}
                w="85%"
                ml="25px"
                mr="50px"
                aria-label={['min', 'max']}
                onChange={(val) => console.log(val)}
            // onChangeEnd={(val) => console.log(val)}
            >
                <RangeSliderTrack>
                    <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} boxSize="20px" >
                    <Box borderRadius="50%" ></Box>
                </RangeSliderThumb>
                <RangeSliderThumb index={1} boxSize="20px" border={"8px solid blue"} />
            </RangeSlider>
        </>
    )
}

export default PriceDiscount