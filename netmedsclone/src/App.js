import './App.css';
import { AllRoutes } from './Components/AllRoutes/AllRoutes';
import MainNavbar from './Components/Navbar/MainNavbar'
import Products from './pages/ProductPage/Products';
import Footer from './Components/Footer/Footer';
import { Box } from '@chakra-ui/react';
// import Products from './pages/ProductPage/Products';
// import F
import { Landing } from './pages/landing';
import { AllRoutes } from './Components/AllRoutes/AllRoutes';
import { Cart } from './pages/Cart/Cart';
function App() {
  return (
    <div className="App">
      <MainNavbar />
      <AllRoutes/>
      
      {/* <Products /> */}
      {/* <Landing/> */}
      <Footer />
      {/* <Cart></Cart> */}
    </div>
  );
}

export default App;
