import "./App.css";
import MainNavbar from "./Components/Navbar/MainNavbar";
import { AllRoutes } from "./Components/AllRoutes/AllRoutes";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { toggleView } from "./Redux/action";
function App() {
  const dispatch = useDispatch();

  const [isMobileView, setCurrentview] = useState(false);
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  useEffect(() => {
    function handleWindowResize() {
      let screenwidth = getWindowSize().innerWidth;
      if (screenwidth < 1080 && !isMobileView) {
        setCurrentview(true);
      } else if (screenwidth > 1080 && !isMobileView ) {
        setCurrentview(false);
      }
      
    }
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    dispatch(toggleView(isMobileView));
  }, [isMobileView]);

  return (
    <div className="App">
      <MainNavbar />
      <AllRoutes />
    </div>
  );
}

export default App;
