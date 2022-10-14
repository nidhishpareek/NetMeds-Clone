import './App.css';
import { AllRoutes } from './Components/AllRoutes/AllRoutes';
import MainNavbar from './Components/Navbar/MainNavbar'
import LoginPage from './/pages/Login/LoginPage'
import Products from './pages/ProductPage/Products';
import Footer from './Components/Footer/Footer';
import { Box } from '@chakra-ui/react';
import Products from './pages/ProductPage/Products';
import { Landing } from './pages/landing';
function App() {
  return (
    <div className="App">
      <MainNavbar />
      <AllRoutes/>
      <LoginPage />
      {/* <Products /> */}
      <Landing/>
      <Footer />
    </div>
  );
}

export default App;
