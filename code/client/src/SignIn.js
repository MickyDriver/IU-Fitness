import React, {Component} from 'react';
import './assets/css/home.css';
import './assets/css/signin.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Link } from "react-router-dom";
import NavBar from "./components/NavBar1";
import Footer from "./components/Footer";

class SignIn extends Component {

  render () {
    return (

<div id="page1">

<NavBar />

<div class="login-box">
    <h1>Sign In</h1>
    <form method="POST" action="SignIn.html">
      <div class="textbox">
        <input type="text" name='username' placeholder="Username" required />
      </div>

      <div class="textbox">
        <input type="password" name='password' placeholder="Password" required />
      </div>

      <input type="submit" class="custom-btn" value="Sign in" />
    </form>

    <div class="controls">
      <button class="Button-link">
        <Link to="/signup">New? Register</Link>
      </button>
    </div>
    <br />
    <br />
    <div class="controls">
      <button class="Button-link">
      <Link to="/signinsuccess">Sign in test</Link>
      </button>
    </div>

  </div>
  <Footer />
</div>
    );
  }
}
export default SignIn;