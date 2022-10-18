import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { errorState } from '../../Redux/action'
import { Product_API } from '../../api'
export const Data = createContext()

const updatedUrl = (api, sort, order, subcategory, sortCategory, manufacturer, sliderVal) => {

    return sort && sliderVal && sortCategory && manufacturer ?
        `${api}&_sort=${sort}&_order=${order}&category=${sortCategory}&manufacturer=${manufacturer}&actual_price_gte=${sliderVal[0]}&actual_price_lte=${sliderVal[1]}` :
        sort && sliderVal && subcategory && manufacturer ?
            `${api}&_sort=${sort}&_order=${order}&sub_category=${subcategory}&manufacturer=${manufacturer}&actual_price_gte=${sliderVal[0]}&actual_price_lte=${sliderVal[1]}` :
            sort && sortCategory && subcategory ?
                `${api}&_sort=${sort}&_order=${order}&category=${sortCategory}&sub_category=${subcategory}` :
                sortCategory && subcategory && manufacturer ?
                    `${api}&category=${sortCategory}&sub_category=${subcategory}&manufacturer=${manufacturer}` :
                    sort && sliderVal && sortCategory ?
                        `${api}&_sort=${sort}&_order=${order}&category=${sortCategory}&actual_price_gte=${sliderVal[0]}&actual_price_lte=${sliderVal[1]}` :
                        sort && sliderVal && subcategory ?
                            `${api}&_sort=${sort}&_order=${order}&sub_category=${subcategory}&actual_price_gte=${sliderVal[0]}&actual_price_lte=${sliderVal[1]}` :
                            sort && sliderVal && manufacturer ?
                                `${api}&_sort=${sort}&_order=${order}&manufacturer=${manufacturer}&actual_price_gte=${sliderVal[0]}&actual_price_lte=${sliderVal[1]}` :
                                sortCategory && subcategory ?
                                    `${api}&category=${sortCategory}&sub_category=${subcategory}` :
                                    sortCategory && manufacturer ?
                                        `${api}&category=${sortCategory}&manufacturer=${manufacturer}` :
                                        subcategory && manufacturer ?
                                            `${api}&sub_category=${subcategory}&manufacturer=${manufacturer}` :
                                            sort && subcategory ?
                                                `${api}&_sort=${sort}&_order=${order}&sub_category=${subcategory}` :
                                                sort && sliderVal ?
                                                    `${api}&_sort=${sort}&_order=${order}&actual_price_gte=${sliderVal[0]}&actual_price_lte=${sliderVal[1]}` :
                                                    sort ?
                                                        `${api}&_sort=${sort}&_order=${order}` :
                                                        subcategory && sliderVal ?
                                                            `${api}&sub_category=${subcategory}&actual_price_gte=${sliderVal[0]}&actual_price_lte=${sliderVal[1]}` :
                                                            subcategory ?
                                                                `${api}&sub_category=${subcategory}` :
                                                                sortCategory ?
                                                                    `${api}&category=${sortCategory}` :
                                                                    manufacturer ?
                                                                        `${api}&manufacturer=${manufacturer}` :
                                                                        sliderVal ?
                                                                            `${api}&actual_price_gte=${sliderVal[0]}&actual_price_lte=${sliderVal[1]}` :
                                                                            api
}


const DataContext = ({ children }) => {
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
    const [sliderVal, setSliderVal] = useState([0, 45000])
    const [prod, setProd] = useState([]);
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState("");
    const [sortCategory, setSortCategory] = useState();
    const [total, setTotal] = useState(1747);
    const [currItem, setCurrItem] = useState(20);
    const [subCategory, setSubCategory] = useState("");
    const [order, setOrder] = useState("");
    const [manufacturer, setManufacturer] = useState('');
    const [loading, setLoading] = useState(false);
    const [currProduct, setCurrProduct] = useState({});
    const dispatch = useDispatch();

    const getProduct = () => {
        setLoading(true)
        const api = updatedUrl(`${Product_API}?_page=${page}&_limit=20`, sort, order, subCategory, sortCategory, manufacturer, sliderVal)
        console.log(api)
        axios.get(api)
            .then(res => {
                setLoading(false)
                setTotal(res.headers['x-total-count'])
                setCurrItem(res.data.length)
                setProd(res.data)
                // console.log(total, currItem, prod)
            })
            .catch(() => dispatch(errorState()))
            .finally(() => setLoading(false))
    }
    const handlePriceRange = (val) => {
        setSliderVal(val)
    }
    const handlecurrProduct = (item) => {
        setCurrProduct(item)
    }

    useEffect(() => {
        getProduct()
    }, [page, sort, order, subCategory, sortCategory, manufacturer, sliderVal])

    const handleReset = (p, sub, categ, manu, slid) => {
        handlePage(p)
        handleSubCategory(sub)
        handleCategory(categ)
        handleManufacturer(manu)
        handlePriceRange(slid)
    }
    const handleSubCategory = (sub, p, manu, cat) => {
        handlePage(p)
        handleCategory(cat)
        handleManufacturer(manu)
        setSubCategory(sub)
        console.log("subcategory", subCategory)
    }
    const handleCategory = (val) => {
        const newVal = val;
        setSortCategory(newVal)
    }
    const handleManufacturer = (val) => {
        console.log("manufacturer", val)
        const newVal = val;
        setManufacturer(newVal)
    }

    const handlePage = (val) => {
        setPage(val);
    }
    const setval = (sortval, orderval) => {
        setSort(sortval);
        setOrder(orderval)
        console.log('sortcalled', sort, order)
    }

    const val = {
        Categories, handleReset, setval, handlePage, handleManufacturer, handleSubCategory, getProduct, handleCategory, handlecurrProduct, currProduct, sortCategory, loading, prod, page, sort, currItem, total, manufacturer, order, handlePriceRange, sliderVal
    }
    return (
        <Data.Provider value={val}>
            {children}
        </Data.Provider>
    )
}

export default DataContext