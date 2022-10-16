import { Box } from "@chakra-ui/react"
import DesktopNavbar from "./DesktopNavbar/DesktopNavbar"
import MobileNavbar from "./MobileNavbar/MobileNavbar"

const Navbar = () => {

    return (
        <Box>
        {/* <DesktopNavbar></DesktopNavbar> */}
        <MobileNavbar></MobileNavbar>
        </Box>
    )
}

export default Navbar