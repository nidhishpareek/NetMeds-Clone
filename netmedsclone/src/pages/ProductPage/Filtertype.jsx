import { Box, Checkbox, Input } from '@chakra-ui/react'
import React from 'react'
import { BsSearch } from 'react-icons/bs';
import { v4 as uuid } from 'uuid';

const Filtertype = ({ name, prod, handleManufacturer }) => {

    const set = new Set();
    const arr = new Array();
    const getManu = () => {
        prod.map(el => set.add(el.manufacturer))
    }
    getManu()
    arr.push(...set)

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
                {arr.map((el) => {
                    if (name === 'Manufacturers')
                        return <Checkbox key={uuid()} pb="8px" fontSize="13px" onChange={(e) => e.target.checked ? handleManufacturer(e.target.value) : handleManufacturer("")} value={el}>{el}</Checkbox>
                    if (name === 'Categories')
                        return <Checkbox key={uuid()} pb="8px" fontSize="13px">{el.category}</Checkbox>
                }
                )}

                {/* <Checkbox >Checkbox</Checkbox>
                <Checkbox >Checkbox</Checkbox>
                <Checkbox >Checkbox</Checkbox>
                <Checkbox >Checkbox</Checkbox>
                <Checkbox >Checkbox</Checkbox>
                <Checkbox >Checkbox</Checkbox>
                <Checkbox >Checkbox</Checkbox>
                <Checkbox >Checkbox</Checkbox>
                <Checkbox >Checkbox</Checkbox>
                <Checkbox >Checkbox</Checkbox> */}
            </Box>
        </>

    )
}

export default Filtertype