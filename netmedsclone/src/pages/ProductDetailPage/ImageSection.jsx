import { Box, Image } from '@chakra-ui/react';
import React, { useContext, useState } from 'react'
import { Data } from '../Context/DataContext';


function ImageSection() {
    const { currProduct } = useContext(Data);
    const { img1, img2, img3 } = currProduct;
    const [img, setImg] = useState("")

    const handleImage = (abc) => {
        setImg(abc)
    }
    // console.log(image.current)
    return (
        <Box w="50%" display={"flex"} gap="20px" pl="40px">
            <Box display={"flex"} flexDir="column" justifyContent={"center"} h="50%" mt="50px" gap="10px">
                {img1 && <Image w="70px" src={img1} border="2px solid #32aeb1" onClick={() => handleImage(img1)} />}
                {img2 && <Image w="70px" src={img2} border="2px solid #32aeb1" onClick={() => handleImage(img2)} />}
                {img3 && <Image w="70px" src={img3} border="2px solid #32aeb1" onClick={() => handleImage(img3)} />}
            </Box>
            <Box>
                <Image src={img ? img : img1 ? img1 : 'https://www.netmeds.com/images/product-v1/600x600/default/no_image.png'} w="500px" />
            </Box>
        </Box>
    )
}

export default ImageSection