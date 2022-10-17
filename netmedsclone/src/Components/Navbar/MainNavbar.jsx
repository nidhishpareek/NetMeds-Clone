import { Box } from "@chakra-ui/react";
import DesktopNavbar from "./DesktopNavbar/DesktopNavbar";
import MobileNavbar from "./MobileNavbar/MobileNavbar";
import { setCartProductRReducer } from "../../Redux/action";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const Navbar = () => {
  const mobileView = useSelector((state) => state.mobileView);
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")) || false;
  const dispatch = useDispatch();
  const MountgetData = () => {
    fetch("https://netmedsdata.onrender.com/cart")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        dispatch(setCartProductRReducer(res));
      });
  };
  useEffect(() => {
    MountgetData();
  }, []);

  return (
    <Box >
      {mobileView ? (
        <MobileNavbar></MobileNavbar>
      ) : (
        <DesktopNavbar></DesktopNavbar>
      )}
    </Box>
  );
};

export default Navbar;
