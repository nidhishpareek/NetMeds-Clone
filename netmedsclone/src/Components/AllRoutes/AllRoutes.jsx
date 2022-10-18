import React from "react";
import { Route, Routes } from "react-router-dom";
import { Cart } from "../../pages/Cart/Cart";
import { Landing } from "../../pages/landing";
import Footer from "../Footer/Footer";
import LoginPage from "../../pages/Login/LoginPage";
import { OrderReview } from "../../pages/PaymentPage/orderReview";
import { PymentDetails } from "../../pages/PaymentPage/paymentDetails";
import ProductDetail from "../../pages/ProductDetailPage/ProductDetail";
import Products from "../../pages/ProductPage/Products";
import { useSelector } from "react-redux";
import { PrivateRoute } from "../../context/PrivateRoute";
import ErrorPage from "../../pages/ErrorPage";

export const AllRoutes = () => {
  const mobileView = useSelector((state) => state.mobileView);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Landing /> <Footer />
          </>
        }
      ></Route>
      <Route
        path="/products"
        element={
          <>
            <Products /> <Footer />
          </>
        }
      ></Route>
      <Route
        path="/products/:id"
        element={
          <>
            <ProductDetail /> <Footer />
          </>
        }
      ></Route>
      <Route path="/Login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/cart" element={<Cart></Cart>}></Route>
      <Route
        path="/payment"
        element={
          <PrivateRoute>
            <OrderReview></OrderReview>
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/payment/details"
        element={
          <PrivateRoute>
            <PymentDetails></PymentDetails>
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="*"
        element={
          <>
            <ErrorPage /> <Footer />
          </>
        }
      ></Route>
    </Routes>
  );
};
