import { Image } from '@chakra-ui/react'
import React from 'react'

const CategoryImage = ({ Categories }) => {
    return (
        <Image w={"100%"} h={"auto"} borderRadius={"10px"} objectFit={'fill'} src={Categories[0].cat_image} />
    )
}

export default CategoryImage