import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
    const [totalMRP, setTotalMRP] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [promoCodeDiscount, setPromoCodeDiscount] = useState(0);
   
    return <AppContext.Provider value={{totalMRP, setTotalMRP, discount, setDiscount, promoCodeDiscount, setPromoCodeDiscount}}>{children}</AppContext.Provider>
}