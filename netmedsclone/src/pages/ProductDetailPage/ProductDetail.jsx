import { Box } from '@chakra-ui/react';
import React from 'react'
// import { useContext } from 'react'
// import { Data } from '../Context/DataContext'
import ImageSection from './ImageSection';
import DetailSection from './DetailSection';

function ProductDetail() {
    return (
        <div style={{ backgroundColor: "#F3F6FA", padding: "50px 0" }} >
            <Box display={{ base: "block", lg: 'flex' }} borderRadius="10px" bgColor="white" w="96%" m="0 auto" p="30px 0">
                <ImageSection />
                <DetailSection />
            </Box>
        </div>
    )
}

export default ProductDetail