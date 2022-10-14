import './App.css';
import MainNavbar from './Components/Navbar/MainNavbar'
import { Box } from '@chakra-ui/react';
import Products from './pages/ProductPage/Products';
import Footer from './Components/Footer/Footer'
import { Landing } from './pages/landing';
import { Cart } from './pages/Cart/Cart';
function App() {
  return (
    <div className="App">
      <MainNavbar />
      <Landing/>
      <Footer />
      <Cart></Cart>
    </div>
  );
}

export default App;
