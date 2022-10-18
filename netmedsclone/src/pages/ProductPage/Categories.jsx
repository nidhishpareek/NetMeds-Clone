import { Accordion, AccordionIcon, AccordionItem, AccordionButton, Box, AccordionPanel, Text } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { v4 as uuid } from "uuid"
import { Data } from '../Context/DataContext'

const CategoriesComp = () => {
    const { Categories, handleSubCategory } = useContext(Data);

    return (
        <Box pr="15px" bgColor="#ffffff" borderRadius={"10px"} display={{ base: "none", lg: "block" }}>
            <Box borderRadius={"10px"} overflowY={'scroll'} height={"350px"} bgColor="#ffffff" p="0 0px 15px 15px" sx={{
                '&::-webkit-scrollbar': {
                    w: '3px'
                },
                '&::-webkit-scrollbar-track': {
                    w: '6',
                    bg: `#f7f7fb`,
                    mt: '45px',
                    mb: '15px'
                },
                '&::-webkit-scrollbar-thumb': {
                    bg: `#6f7284`
                },
            }}>
                <Text textAlign="left" fontSize="20px" p={"10px 0 5px 5px"}>Categories</Text>
                {Categories.map((el) => {
                    return <Accordion key={el.cat} allowToggle >
                        <AccordionItem>
                            <h2>
                                <AccordionButton p="8px  2px" _hover={{ bg: "white" }}>
                                    <AccordionIcon mr={1} />
                                    <Box flex='1' color="#6f7284" _hover={{ color: "#151b39" }} textAlign='left' fontSize="16px" >
                                        {el.cat}
                                    </Box>
                                </AccordionButton>
                            </h2>
                            {el.sub_cat.map((subs) => {
                                return <AccordionPanel key={uuid()} p="2px 26px" textAlign="left" color="#6f7284" _hover={{ color: "#151b39", cursor: "pointer" }} onClick={(e) => handleSubCategory(e.target.innerHTML, 1, "", "")} >
                                    {subs}
                                </AccordionPanel>
                            })}
                        </AccordionItem>
                    </Accordion>
                })}
            </Box>
        </Box>

    )
}

export default CategoriesComp;