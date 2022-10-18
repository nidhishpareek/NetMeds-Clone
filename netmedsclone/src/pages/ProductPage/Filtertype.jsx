import { Box, Button, Checkbox, Input } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Data } from '../Context/DataContext';

const Filtertype = ({ name }) => {
    const { prod, handleManufacturer, handleCategory } = useContext(Data);
    const [clickVal, setClickVal] = useState(true)
    const [clickCateg, setClickCateg] = useState(true)
    const handleToggle = (val) => {
        setClickVal(!clickVal)
        console.log(clickVal);
        clickVal ? handleManufacturer(val) : handleManufacturer("")
    }
    const handleToggleCategory = (val) => {
        const manu = prod.filter(item => item.category === val)
        setClickCateg(!clickCateg)
        console.log(clickCateg)
        clickCateg ? handleCategory(val, 1, manu.manufacturer, "") : handleCategory("", 1, manu.manufacturer, "")
    }

    const setManu = new Set();
    const setCat = new Set();
    const arr1 = []
    const arr2 = [];
    const getManu = () => {
        prod.map(el => setManu.add(el.manufacturer));
        prod.map(el => setCat.add(el.category));
    }
    getManu()
    arr1.push(...setManu)
    arr2.push(...setCat)

    return (
        <>
            <Box fontSize="18px" fontWeight={700} mt="10px" letterSpacing="0.25px" color={"#151b39"} pl="20px">{name}</Box>
            <Box display={"flex"} alignItems="center" borderRadius="4px" bgColor="rgba(10,21,27,.05)" m="10px 10px 10px 20px">
                <Input type="text" focusBorderColor='none' w="93%" h="30px" placeholder='Search...' color={'#6f7284'} ml="-5px" fontWeight={"400"} fontSize="14px" border='none' bgColor={"transparent"} />
                <BsSearch color='#6f7284' />
            </Box>
            <Box maxH={"260px"} overflowY='auto' overflowX={"hidden"} display={"flex"} flexDir="column" ml={"20px"} mr={"10px"} sx={{
                '&::-webkit-scrollbar': {
                    w: '3px'
                },
                '&::-webkit-scrollbar-track': {
                    w: '6',
                    bg: `#f7f7fb`,
                },
                '&::-webkit-scrollbar-thumb': {
                    bg: `#6f7284`
                },
            }}>
                {arr1.map((el) => {
                    if (name === 'Manufacturers')
                        return <Checkbox ml="10px" key={el} value={el}
                            onChange={(e) => handleToggle(e.target.value)}
                        >{el}</Checkbox>
                })}
                {arr2.map((el) => {
                    if (name === 'Categories')
                        return <Checkbox ml="10px" key={el} value={el}
                            onChange={(e) => handleToggleCategory(e.target.value)}
                        >{el}</Checkbox>
                })}
            </Box>
        </>

    )
}

export default Filtertype