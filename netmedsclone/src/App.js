import './App.css';
import MainNavbar from './Components/Navbar/MainNavbar'
import LoginPage from './/pages/Login/LoginPage'
import Products from './pages/ProductPage/Products';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <MainNavbar />
      <LoginPage />
      {/* <Products /> */}
      <Footer />
    </div>
  );
}

export default App;
