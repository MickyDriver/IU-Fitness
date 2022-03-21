import React, {Component} from 'react';
import './assets/css/home.css';
import './assets/css/signin.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import NavBar from "./components/NavBar2";
import Footer from "./components/Footer";

class Payment extends Component {

  render () {
    return (

<div id="page1">

<NavBar />

<div class="login-box">
    <h1>Payment</h1>
    <form method="POST">
      <div class="textbox">
        
        <input type="text" placeholder="Name on card" name="NameOnCard" required />
      </div>

      <div class="textbox">
        <input type="number" placeholder="Credit Card Number"name="CardNumber" required />
      </div>

      <div class="textbox">
        <input type="number" placeholder="CVV" name="cvv" required />
      </div>

      <div class="textbox">
        <input type="number" placeholder="Expiration Date" name="ExpirationDate" required />
      </div>

      <input type="submit" class="custom-btn" value="Confirm" />
    </form>

  </div>
  <Footer />
    </div>
    );
  }
}
export default Payment;