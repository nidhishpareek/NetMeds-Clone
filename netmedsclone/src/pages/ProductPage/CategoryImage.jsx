import { Image } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Data } from '../Context/DataContext';

const CategoryImage = () => {
    const { Categories } = useContext(Data);
    return (
        <Image w={"100%"} h={"auto"} borderRadius={"10px"} objectFit={'fill'} src={Categories[0].cat_image} />
    )
}

export default CategoryImage