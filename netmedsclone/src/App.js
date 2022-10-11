import './App.css';
import MainNavbar from './Components/Navbar/MainNavbar'
import Products from './pages/ProductPage/Products';
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <div className="App">
      <MainNavbar/>
      <Footer />
      {/* <Products/> */}
    </div>
  );
}

export default App;
