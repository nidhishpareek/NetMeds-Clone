import { Accordion, AccordionIcon, AccordionItem, AccordionButton, Box, AccordionPanel, Text } from '@chakra-ui/react'
import React from 'react'
import { v4 as uuid } from "uuid"

const CategoriesComp = () => {
    const Categories = [
        {
            cat: "Veterinary",
            sub_cat: ["Petcare", "Farm Animals", "Poultry", "Aquaculture"]
        },
        {
            cat: "Ayush",
            sub_cat: ['Homeopathy', 'Ayurvedic', 'Unani', 'Siddha']
        },
        {
            cat: "Fitness",
            sub_cat: ['Vitamins And Supplements',
                'Family Nutrition',
                'Health Food And Drinks',
                'Ayurvedic Supplements',
                'Sports Supplements',
                'Smoking Cessation Support',
                'Weight Management']
        },
        {
            cat: "Mom & Baby",
            sub_cat: ['Baby Care',
                'Feminine Hygiene',
                'Maternity Care',
                'Toys & Games',
                'Baby Bath Time',
                'Maternity Accessories']
        },
        {
            cat: "Treatments",
            sub_cat: ['Diabetes Care',
                'First Aid',
                'Pain Relief Application',
                'Usual Symptoms',
                'General Discomfort',
                'Cough & Cold',
                'General Health Supplements',
                'Smoking Cessation (T)',
                'Skin Treatment']
        },
        {
            cat: "Devices",
            sub_cat: ['Orthopaedics',
                'Breathe Easy',
                'Measurements',
                'Surgical Accessories']
        },
        {
            cat: "Eyewear",
            sub_cat: ['Contact Lenses (EW)',
                'Eye Glasses',
                'Reading Glasses',
                'Sunglasses',
                'Computer Glasses']
        },
        {
            cat: "Covid Essentials",
            sub_cat: ['Personal & Home Essentials',
                'Mask, Gloves & Protective Equipment',
                'Immunity Booster',
                'Business Essentials',
                'Travel Essentials',
                'Oxygen Can']
        },
        {
            cat: "Surgical",
            sub_cat: ['Dressing',
                'Gi Care',
                'Iv Infusion',
                'Respiratory Supplies',
                'Surgical Consumables',
                'Surgical Instrument',
                'Urinary Care',
                'Wound Treatment']
        },
        {
            cat: "Diabetes Support",
            sub_cat: ['Diabetes Care - Ayurveda',
                'Glucometers',
                'Lancets & Test Strips',
                'Sugar Substitutes',
                'Diabetes Management Supplements']
        },
        {
            cat: "Skin Care",
            sub_cat: ['Cleansers',
                'Masks',
                'Moisturizers',
                'Sunscreen',
                'Eye Care',
                'Toners & Serums',
                'Aromatherapy',
                'Face Skin Care']
        },
        {
            cat: "Tools & Appliances",
            sub_cat: ['Hair Styling Tools',
                'Face/Skin Tools',
                'Massage Tools']
        },
        {
            cat: "Personal Care",
            sub_cat: ['Bathing Accessories',
                'Face Personal Care',
                'Body Care',
                'Senior Care',
                'Lip Care',
                'Oral Care',
                'Bath & Shower',
                'Hands & Feet',
                'Home & Health',
                'Personal Care Tools & Accessories',
                'Eye Care Lens']
        }
    ]

    return (
        <Box pr="15px" bgColor="#ffffff" borderRadius={"10px"}>
            <Box borderRadius={"10px"} overflowY={'scroll'} height={"350px"} bgColor="#ffffff" p="0 0px 15px 15px" sx={{
                '&::-webkit-scrollbar': {
                    w: '1'
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
                                return <AccordionPanel key={uuid()} p="2px 26px" textAlign="left" color="#6f7284" _hover={{ color: "#151b39", cursor: "pointer" }} >
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