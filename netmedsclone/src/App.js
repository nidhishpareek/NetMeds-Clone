import './App.css';
import MainNavbar from './Components/Navbar/MainNavbar'
import { Box } from '@chakra-ui/react';
import Products from './pages/ProductPage/Products';
import { Landing } from './pages/landing';
function App() {
  return (
    <div className="App">
      <MainNavbar />
      <Landing/>
      <Footer />
    </div>
  );
}

export default App;
