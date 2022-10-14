import './App.css';
import { AllRoutes } from './Components/AllRoutes/AllRoutes';
import MainNavbar from './Components/Navbar/MainNavbar'
import Products from './pages/ProductPage/Products';
function App() {
  return (
    <div className="App">
      <MainNavbar/>
      <AllRoutes/>
      <Products/>
    </div>
  );
}

export default App;
