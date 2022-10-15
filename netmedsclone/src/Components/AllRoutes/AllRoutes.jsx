import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Landing } from '../../pages/landing'
import Products from '../../pages/ProductPage/Products'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Landing></Landing>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        {/* <Route path='/Login' element={<Login></Login>}></Route> */}
        {/* <Route path='/cart' element={<Cart></Cart>}></Route> */}
        {/* <Route path='/payment' element={<Payment></Payment>}></Route> */}
        {/* <Route path='/membership' element={<MemberShip></MemberShip>}></Route> */}
    </Routes>
  )
}
