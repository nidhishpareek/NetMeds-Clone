import './App.css';
import MainNavbar from './Components/Navbar/MainNavbar'
import { Box } from '@chakra-ui/react';
import Products from './pages/ProductPage/Products';
import Footer from './Components/Footer/Footer'
import { Landing } from './pages/landing';
import { AllRoutes } from './Components/AllRoutes/AllRoutes';
function App() {
  return (
    <div className="App">
      <MainNavbar />
      <AllRoutes/>
      <Footer />
    </div>
  );
}

export default App;
