import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cart } from '../../pages/Cart/Cart'
import { Landing } from '../../pages/landing'
import Signin from '../../pages/Login/LoginPage'
// import Products from '../../pages/ProductPage/Products'
import LoginPage from '../../pages/Login/LoginPage'
import Products from '../../pages/ProductPage/Products'
// import { Landing } from '../../pages/landing'
// import Products from '../../pages/ProductPage/Products'

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Landing></Landing>}></Route>
            <Route path='/products' element={<Products></Products>}></Route>
            <Route path='/Login' element={<LoginPage></LoginPage>}></Route>
            <Route path='/cart' element={<Cart></Cart>}></Route>
            {/* <Route path='/payment' element={<Payment></Payment>}></Route> */}
            {/* <Route path='/membership' element={<MemberShip></MemberShip>}></Route> */}
        </Routes>
    )
}