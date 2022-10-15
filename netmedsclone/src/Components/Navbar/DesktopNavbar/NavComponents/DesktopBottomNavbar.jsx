import { Box, Flex, HStack, Image } from "@chakra-ui/react";
import Myselect from "./SelectTag";

const BottomNavbar = () => {
  return (
    <Box bg="rgb(50,174,177)">
      <Flex gap={'85px'} className="BottomNavbar" alignItems={"center"} justifyContent='center' paddingBlock={'15px'} paddingTop='15px'>
        <HStack className="BottomNavbarBox">
          <Image
            src="https://www.netmeds.com/assets/version1663621997/gloryweb/images/icons/medicine.svg"
          />
          <Myselect
            placeholder="Medicine"
            optionarray={["All Medicines", "Previously Ordered Products"]}
            width={"120px"}
          ></Myselect>
        </HStack>

        <HStack color={"white"} className="BottomNavbarBox">
          <Image 
            src="https://www.netmeds.com/assets/gloryweb/images/icons/wellness.svg"
          />
          <Box pt={"5px"} fontWeight='semibold'  fontSize='14px'>Wellness</Box>
        </HStack>
        <HStack color={"white"} className="BottomNavbarBox">
          <Image
            src="https://www.netmeds.com/assets/gloryweb/images/icons/diagnostics.svg"
          />
          <Box minWidth={"70px"} pt={"5px"} fontWeight='semibold'  fontSize='14px'>
            Lab Tests
          </Box>
        </HStack>

        <HStack className="BottomNavbarBox">
          <Image
            src="https://www.netmeds.com/assets/gloryweb/images/icons/beauty.svg "
          />

          <Myselect
            placeholder="Beauty"
            optionarray={[
              "Personal Care",
              "Make-Up",
              "Hair",
              "Skin Care",
              "Tools & Appliances",
              "Mom & Baby",
              "Fragnances",
              "Men's Grooming",
            ]}
            width={"100px"}
          ></Myselect>
        </HStack>
        <HStack className="BottomNavbarBox">
          <Image
            src="https://www.netmeds.com/assets/version1663621997/gloryweb/images/icons/health-library.svg"
          />

          <Myselect
            placeholder="Health Corner"
            optionarray={[
              "Health Library",
              "Patients Alike",
              "Corona Awareness",
            ]}
            width={"170px"}
          ></Myselect>
        </HStack>
      </Flex>

      {}

    </Box>
  );
};

export default BottomNavbar;

// {
//     <Flex>
//     {navbardata.map((ele) => (
//       <Myselect
//         key={uuid()}
//         placeholder={ele.heading}
//         optionarray={ele.options}
//         width={ele.width}
//       ></Myselect>
//     ))}
//   </Flex>
// }



// const navbardata = [
//   {
//     heading: "Medicine",
//     options: ["All Medicines", "Previously Ordered Products"],
//     photo: "",
//     width: "150px",
//   },
//   {
//     heading: "Wellness",
//     photo: "",
//     width: "150px",
//   },
//   {
//     heading: "Lab Tests",
//     photo: "",
//     width: "100px",
//   },
//   {
//     heading: "Beauty",
//     options: [
//       "Personal Care",
//       "Make-Up",
//       "Hair",
//       "Skin Care",
//       "Tools & Appliances",
//       "Mom & Baby",
//       "Fragnances",
//       "Men's Grooming",
//     ],
//     photo: "",
//     width: "150px",
//   },
//   {
//     heading: "Health Corner",
//     options: ["Health Library", "Patients Alike", "Corona Awareness"],
//     photo: "", 
//     width: "150px",
//   },
// ];