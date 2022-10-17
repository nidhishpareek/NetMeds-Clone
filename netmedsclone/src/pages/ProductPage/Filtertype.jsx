import { Box, Checkbox, Input, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { filterProduct, filterUncheckProduct } from '../../Redux/action';
import { Data } from '../Context/DataContext';

const Filtertype = ({ name }) => {
    const { prod, handleFilter, handleManufacturer, handleCategory } = useContext(Data);
    const { allProduct, filteredProduct } = useSelector(state => state)
    const dispatch = useDispatch();
    // console.log(allProduct, "here")
    const handleclick = (val) => {
        console.log(val)
        // if (val) {
        //     const filtered = allProduct.filter(item => {
        //         return item.manufacturer === val
        //     })
        //     // console.log(filtered)
        //     dispatch(filterProduct(filtered))
        //     // handleFilter(filtered)
        // } else {
        //     const newFilter = filteredProduct.filter(item => {
        //         return item.manufacturer !== val
        //     })
        //     dispatch(filterUncheckProduct(newFilter))
        //     console.log(newFilter, "herefilter")
        // }
    }
    // console.log(filteredProduct)


    const checkbox = useRef(null);
    const handlecheck = (val) => {

        console.log(checkbox.current.checked)
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
                {
                    arr1.map((el) => {
                        if (name === 'Manufacturers')
                            return <Checkbox pl="10px" key={uuid()} pb="8px" fontSize="13px" value={el} onChange={(e) => { e.target.checked ? handleclick(e.target.value) : handleclick('') }}>
                                {/* // return <Checkbox pl="10px" key={uuid()} pb="8px" fontSize="13px" value={el} onChange={(e) => { e.target.checked ? handleclick(e.target.value) : handleclick('') }}> */}
                                <Text fontSize={"13px"}>{el}</Text>
                            </Checkbox>
                    })}
                {arr2.map((el) => {
                    if (name === 'Categories')
                        return <Checkbox pl="10px" key={uuid()} pb="8px" fontSize="13px" value={el} onChange={(e) => { e.target.checked ? handleCategory(e.target.value) : handleCategory('') }}>
                            <Text fontSize={"13px"}>{el}</Text>
                        </Checkbox>
                })}
            </Box>
        </>

    )
}

export default Filtertype