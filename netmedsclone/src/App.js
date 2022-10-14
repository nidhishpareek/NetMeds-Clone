import './App.css';
import MainNavbar from './Components/Navbar/MainNavbar'
import Footer from './Components/Footer/Footer';
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
