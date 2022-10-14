import './App.css';
import { AllRoutes } from './Components/AllRoutes/AllRoutes';
import MainNavbar from './Components/Navbar/MainNavbar'
import LoginPage from './/pages/Login/LoginPage'
import Products from './pages/ProductPage/Products';
import { Landing } from './pages/landing';
import Footer from './Components/Footer/Footer';
import { Box } from '@chakra-ui/react';
import Products from './pages/ProductPage/Products';
import Footer from './Components/Footer/Footer'
import { Landing } from './pages/landing';
import { AllRoutes } from './Components/AllRoutes/AllRoutes';
import { Cart } from './pages/Cart/Cart';
function App() {
  return (
    <div className="App">
      <MainNavbar />
      <AllRoutes/>
      <LoginPage />
      {/* <Products /> */}
      <Landing/>
      <Footer />
      <Cart></Cart>
    </div>
  );
}

export default App;
