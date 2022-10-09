import { Box, Image } from '@chakra-ui/react'
import '../landing.modules.css'
export const HealthSlider = () => {
    return <Box className="healthSliderDiv" >
        <Box>
            <Image src={process.env.PUBLIC_URL+`/Images/netmedHS1.jpg`}></Image>
        </Box>
        <Box>
            <Image src={process.env.PUBLIC_URL+`/Images/netmedHS1.jpg`}></Image>
        </Box>
        <Box>
            <Image src={process.env.PUBLIC_URL+`/Images/netmedHS1.jpg`}></Image>
        </Box>
        <Box>
            <Image src={process.env.PUBLIC_URL+`/Images/netmedHS1.jpg`}></Image>
        </Box>
    </Box>
}