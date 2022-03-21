import React, {Component} from 'react';
import './assets/css/home.css';
import './assets/css/signup.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import NavBar from "./components/NavBar1";
import Footer from "./components/Footer";

class SignUp extends Component {

  render () {
    return (

<div id="page1">

<NavBar />

<div class="sign-up-box">
      <br /><br /><br /><br />
      <h1>Sign Up</h1>

      <form class="signupform"method="POST" action="SignUp.html">
          <div class="textbox">
            <input type ="text" name ="First Name" placeholder="First Name" required />
          </div>
          <div class="textbox">
            <input type ="text" name ="Last Name" placeholder="Last Name" required />
          </div>
            <div class="textbox">
            <input type ="email" name ="email" placeholder ="Email" required />
          </div>
            <div class="textbox">
            <input type ="number" name ="mobilenumber" placeholder ="Mobile Number" required />
          </div>
          <div class="textbox">
            <input type ="address" name ="address" placeholder ="Address" required />
            </div>
          <div class="textbox">
            <input type ="text" name ="username" placeholder="Username" required />
          </div>
            <div class="textbox">
            <input type ="password" name ="password" placeholder ="Password" required />
            </div>
    <br />
    
      <input class="custom-btn" type ="submit" value ="Submit" />
      </form>
          </div>
          <Footer />
    </div>
    );
  }
}
export default SignUp;