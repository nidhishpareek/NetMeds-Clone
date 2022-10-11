import { Box, Flex } from "@chakra-ui/react";
import BottomNavbar from "./DesktopBottomNavbar";
import TopNavbar from "./DesktopTopNavbar";
const DesktopNavbar = () => {
  return (
    <Box>
      <TopNavbar></TopNavbar>
      {/* <Box><BottomNavbar></BottomNavbar></Box> */}
    </Box>
  );
};

export default DesktopNavbar;
