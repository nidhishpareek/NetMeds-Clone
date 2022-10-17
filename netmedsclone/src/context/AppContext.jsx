import { Children, createContext, useState } from "react";
import { Cart } from "../pages/Cart/Cart";
import { OrderReview } from "../pages/PaymentPage/orderReview";
import { PymentDetails } from "../pages/PaymentPage/paymentDetails";

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
    const [totalMRP, setTotalMRP] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [promoCodeDiscount, setPromoCodeDiscount] = useState(0);

    return <AppContext.Provider value={{totalMRP, setTotalMRP, discount, setDiscount, promoCodeDiscount, setPromoCodeDiscount}}>{children}</AppContext.Provider>
}