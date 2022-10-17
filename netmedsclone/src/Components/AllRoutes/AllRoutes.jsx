import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cart } from '../../pages/Cart/Cart'
import { Landing } from '../../pages/landing'
import Signin from '../../pages/Login/LoginPage'
import Footer from "../Footer/Footer";

// import Products from '../../pages/ProductPage/Products'
import LoginPage from '../../pages/Login/LoginPage'
import { OrderReview } from '../../pages/PaymentPage/orderReview'
import { PymentDetails } from '../../pages/PaymentPage/paymentDetails'
import Products from '../../pages/ProductPage/Products'
import { useSelector } from 'react-redux'
import { PrivateRoute } from '../../context/PrivateRoute'

export const AllRoutes = () => {
    const mobileView = useSelector((state) => state.mobileView);
    return (
        <Routes>
            <Route path='/' element={<><Landing></Landing>{!mobileView && <Footer />}</>}></Route>
            <Route path='/products' element={<><Products></Products>{!mobileView && <Footer />}</>}></Route>
            <Route path='/Login' element={<LoginPage></LoginPage>}></Route>
            <Route path='/cart' element={<Cart></Cart>}></Route>
            <Route path='/payment' element={<PrivateRoute><OrderReview></OrderReview></PrivateRoute>}></Route>
            <Route path='/payment/details' element={<PrivateRoute><PymentDetails></PymentDetails></PrivateRoute>}></Route>
            {/* <Route path='/membership' element={<MemberShip></MemberShip>}></Route> */}
        </Routes>
    )
}
