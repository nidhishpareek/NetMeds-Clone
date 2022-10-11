import { Box, Flex } from "@chakra-ui/react";
import BottomNavbar from "./NavComponents/DesktopBottomNavbar";
import TopNavbar from "./NavComponents/DesktopTopNavbar";
import BottomList from "./NavComponents/BottomList";

const DesktopNavbar = () => {
  return (
    <Box>
      <TopNavbar></TopNavbar>
      <Box>
        <BottomNavbar></BottomNavbar>
        <BottomList></BottomList>
      </Box>
    </Box>
  );
};

export default DesktopNavbar;
