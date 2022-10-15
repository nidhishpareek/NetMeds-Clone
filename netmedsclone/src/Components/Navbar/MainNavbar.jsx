import { Box } from "@chakra-ui/react";
import DesktopNavbar from "./DesktopNavbar/DesktopNavbar";
import MobileNavbar from "./MobileNavbar/MobileNavbar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const Navbar = () => {
  const mobileView = useSelector((state) => state.mobileView);
  return (
    <Box>
      {mobileView ? (
        <MobileNavbar></MobileNavbar>
      ) : (
        <DesktopNavbar></DesktopNavbar>
      )}
    </Box>
  );
};

export default Navbar;
