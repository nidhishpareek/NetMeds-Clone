import './App.css';
import MainNavbar from './Components/Navbar/MainNavbar'
import Products from './pages/ProductPage/Products';
function App() {
  return (
    <div className="App">
      <MainNavbar />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
