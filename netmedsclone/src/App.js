import './App.css';

import {SlideAddress} from "./PaymentPage/rSlideAddressPage"
import {NewUseraddress} from "./PaymentPage/newUserPayAddress"
import{OrderReview} from "./PaymentPage/orderReview"
import {PymentDetails} from "./PaymentPage/paymentDetails"
import {OrderStatus} from "./PaymentPage/orderStatus"

function App() {
  return (
    <div className="App">
      <h1>in React app</h1>
      <OrderStatus/>
      <OrderReview/>
      {/* <SlideAddress/>
      <NewUseraddress/>
      
      <PymentDetails/> */}
    </div>
  );
}

export default App;
