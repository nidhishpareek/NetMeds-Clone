import './App.css';
import MainNavbar from './Components/Navbar/MainNavbar'
import { Box } from '@chakra-ui/react';
import LoginPage from './/pages/Login/LoginPage'
import Products from './pages/ProductPage/Products';
import { Landing } from './pages/landing';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <MainNavbar />
      <LoginPage />
      {/* <Landing/> */}
      <Footer />
    </div>
  );
}

export default App;
