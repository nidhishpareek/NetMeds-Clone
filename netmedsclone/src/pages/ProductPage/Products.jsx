import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AllProduct from './AllProduct'
import CategoriesComp from './Categories'
import CategoryImage from './CategoryImage'
import Filters from './Filters'
import axios from 'axios'
import { errorState } from '../../Redux/action'
import { allProduct } from '../../Redux/action'
function Products() {
    const Categories = [
        {
            cat: "Veterinary",
            cat_image: "https://www.netmeds.com/images/category/v1/3699/hair.jpg",
            sub_cat: ["Petcare", "Farm Animals", "Poultry", "Aquaculture"]
        },
        {
            cat: "Ayush",
            cat_image: "https://www.netmeds.com/images/category/v1/491/homeopathy_3.jpg",
            sub_cat: ['Homeopathy', 'Ayurvedic', 'Unani', 'Siddha']
        },
        {
            cat: "Fitness",
            cat_image: "https://www.netmeds.com/images/cms/aw_rbslider/slides/1658428181_web.jpg",
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
            cat_image: "https://www.netmeds.com/images/cms/aw_rbslider/slides/1656600725_Mom_-_Baby1000x200.png",
            sub_cat: ['Baby Care',
                'Feminine Hygiene',
                'Maternity Care',
                'Toys & Games',
                'Baby Bath Time',
                'Maternity Accessories']
        },
        {
            cat: "Treatments",
            cat_image: "https://www.netmeds.com/images/cms/aw_rbslider/slides/1663872474_Medicines_1000x200-18.jpg",
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
            cat_image: "https://www.netmeds.com/images/cms/aw_rbslider/slides/1665411155_volini_category-banner-web.jpg",
            sub_cat: ['Orthopaedics',
                'Breathe Easy',
                'Measurements',
                'Surgical Accessories']
        },
        {
            cat: "Eyewear",
            cat_image: "https://www.netmeds.com/images/category/3052/eyewear_0.jpg",
            sub_cat: ['Contact Lenses (EW)',
                'Eye Glasses',
                'Reading Glasses',
                'Sunglasses',
                'Computer Glasses']
        },
        {
            cat: "Covid Essentials",
            cat_image: "https://www.netmeds.com/images/cms/aw_rbslider/slides/1656007665_category-1000-x-200.jpg",
            sub_cat: ['Personal & Home Essentials',
                'Mask, Gloves & Protective Equipment',
                'Immunity Booster',
                'Business Essentials',
                'Travel Essentials',
                'Oxygen Can']
        },
        {
            cat: "Surgical",
            cat_image: "https://www.netmeds.com/images/category/3081/surgical_0.jpg",
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
            cat_image: "https://www.netmeds.com/images/cms/aw_rbslider/slides/1663868278_Juices_1000x200-15.jpg",
            sub_cat: ['Diabetes Care - Ayurveda',
                'Glucometers',
                'Lancets & Test Strips',
                'Sugar Substitutes',
                'Diabetes Management Supplements']
        },
        {
            cat: "Skin Care",
            cat_image: "https://www.netmeds.com/images/cms/aw_rbslider/slides/skin_care1_1920.jpg",
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
            cat_image: "https://www.netmeds.com/images/category/v1/3372/hair_styling_tools.jpg",
            sub_cat: ['Hair Styling Tools',
                'Face/Skin Tools',
                'Massage Tools']
        },
        {
            cat: "Personal Care",
            cat_image: "https://www.netmeds.com/images/cms/aw_rbslider/slides/1665064240_Netmeds_Cat_1000X200_Melts_Range.jpg",
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
    const [prod, setProd] = useState([]);
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState("");
    const [subCategory, setSubCategory] = useState("");
    const [order, setOrder] = useState("");
    const [loading, setLoading] = useState(false);
    const { error, product } = useSelector((state) => state);
    const dispatch = useDispatch();
    console.log(product)

    const api = 'http://localhost:3001/products';
    const cartApi = 'http://localhost:3001/cart'
    const getProduct = (page) => {
        setLoading(true)
        axios.get(api, {
            params: {
                _page: page,
                _limit: 20,
                _sort: sort,
                _order: order
            }
        })
            .then(res => {
                setLoading(false)
                console.log(res.data)
                dispatch(allProduct(res.data))
            })
            .catch(() => dispatch(errorState()))
            .finally(() => setLoading(false))
    }

    const handleAdd = (item) => {
        console.log(item);
        axios.post(cartApi, item)
            .then((res) => console.log(res.data))
    }
    useEffect(() => {
        getProduct(page, sort, order, subCategory)
    }, [page, sort, order, subCategory])

    const handlePage = (val) => {
        setPage(val);
    }
    const setval = (sortval, orderval) => {
        setSort(sortval);
        setOrder(orderval)
    }
    return (
        <Box bg={"#f3f3f3"} pt="30px" pb="30px">
            < Box w="97%" margin="20px auto" display="flex" gap="10px">
                <Box w="18%" display={"flex"} flexDir="column" gap="40px" >
                    <CategoriesComp Categories={Categories} />
                    <Filters />
                </Box>
                <Box w="80%" ml="10px" mr="10px">
                    <CategoryImage Categories={Categories} />
                    <AllProduct page={page} loading={loading} error={error} setval={setval} prod={prod} handleAdd={handleAdd} handlePage={handlePage} />
                </Box>
            </Box >
        </Box>
    )
}

export default Products