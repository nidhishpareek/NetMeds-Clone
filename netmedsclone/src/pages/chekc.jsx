import { Box } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
// import styles from './Carousel.module.css';
import Carousel from 'react-elastic-carousel'
// import Item from 'react-elastic-carousel'

export const Check = () => {
    return <><Carousel itemsToShow={3} showArrows={true} showEmptySlots={true} enableAutoPlay={true}>
        <Box w='200px' h="200px" border='1px solid red'>1</Box>
        <Box w='200px' h="200px" border='1px solid red'>2</Box>
        <Box w='200px' h="200px" border='1px solid red'>3</Box>
        <Box w='200px' h="200px" border='1px solid red'>4</Box>
        <Box w='200px' h="200px" border='1px solid red'>5</Box>
        <Box w='200px' h="200px" border='1px solid red'>6</Box>
</Carousel>	
</>
}

