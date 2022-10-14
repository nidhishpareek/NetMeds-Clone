import './App.css';
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
      <LoginPage />
      {/* <Products /> */}
      <Landing/>
      <Footer />
    </div>
  );
}

export default App;
