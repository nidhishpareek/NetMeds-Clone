import { Box } from "@chakra-ui/react";
import DesktopNavbar from "./DesktopNavbar/DesktopNavbar";
import MobileNavbar from "./MobileNavbar/MobileNavbar";
import { setCartProductRReducer } from "../../Redux/action";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cart_API } from "../../api";
const Navbar = () => {
  const mobileView = useSelector((state) => state.mobileView);
  const dispatch = useDispatch();
  const MountgetData = () => {
    fetch(Cart_API)
      .then((res) => res.json())
      .then((res) => {
        dispatch(setCartProductRReducer(res));
      });
  };
  useEffect(() => {
    MountgetData();
  }, []);

  return (
    <Box >
      {mobileView ? (
        <MobileNavbar />
      ) : (
        <DesktopNavbar />
      )}
    </Box>
  );
};

export default Navbar;
