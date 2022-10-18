import { Box } from "@chakra-ui/react";
import BottomNavbar from "./NavComponents/DesktopBottomNavbar";
import TopNavbar from "./NavComponents/DesktopTopNavbar";
import BottomList from "./NavComponents/BottomList";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const DesktopNavbar = () => {
  const [location, setlocation] = useState();
  let currlocation = useLocation();
  useEffect(() => {
    setlocation(currlocation);
    document.title = "Netmeds.com: Indian Online Pharmacy";
  }, [useLocation()]);

  return (
    <Box>
      <TopNavbar></TopNavbar>
      {location && location.pathname !== "/Login" && (
        <Box>
          <BottomNavbar />
          <BottomList />
        </Box>
      )}
    </Box>
  );
};

export default DesktopNavbar;
