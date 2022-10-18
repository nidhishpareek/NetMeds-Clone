import { createContext, useState } from "react";
import axios from 'axios'
import { useDispatch } from "react-redux";
import { EMPTYCART, EmptyCart, removeCartRedux } from "../Redux/action";
import { Cart_API } from "../api";
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [totalMRP, setTotalMRP] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [promoCodeDiscount, setPromoCodeDiscount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [cartData, setCartData] = useState([0]);
    const [validPromoCode, setValidPromoCode] = useState(true);
    const [promoCode, setPromoCode] = useState('');
    const dispatch = useDispatch();

    const getData = () => {
        setLoading(true);
        fetch(Cart_API)
            .then((res) => res.json())
            .then((res) => {
                setLoading(false);
                setTotalMRP(0);
                setDiscount(0);
                res.map(el => {
                    if (el.quantity && el.crossed_price) {
                        setTotalMRP((prev) => prev + (Number(el.crossed_price) * Number(el.quantity)))
                        setDiscount((prev) => prev + ((Number(el.crossed_price) - Number(el.actual_price)) * Number(el.quantity)))
                    }
                    else if (el.quantity && el.actual_price) {
                        setTotalMRP((prev) => prev + (Number(el.actual_price) * Number(el.quantity)))
                    }
                    else if (el.crossed_price) {
                        setTotalMRP((prev) => prev + (Number(el.crossed_price)))
                        setDiscount((prev) => prev + (Number(el.crossed_price) - Number(el.actual_price)))
                    }
                    else {
                        setTotalMRP((prev) => prev + (Number(el.actual_price)))
                    }
                })
                setCartData(res);
            }).catch((err) => {
                setLoading(false);
                setError(true);
            })
    }
    const deleteAll = () => {;
        dispatch(EmptyCart())
        cartData.map(el => {
            console.log('here')
            fetch(`${Cart_API}/${el.id}`, {
                method: 'DELETE'
            })
        })
    }

    const ApplyPromoCode = () => {
        if (promoCode === 'Hurray!') {
            setPromoCodeDiscount(((totalMRP - discount) * 20) / 100)
            setValidPromoCode(true);
        }
        else {
            setValidPromoCode(false);
        }
    }

    return <AppContext.Provider value={{ promoCode, deleteAll, setPromoCode, validPromoCode, setValidPromoCode, ApplyPromoCode, cartData, setCartData, error, setError, loading, setLoading, totalMRP, setTotalMRP, discount, setDiscount, promoCodeDiscount, setPromoCodeDiscount, getData }}>{children}</AppContext.Provider>
}