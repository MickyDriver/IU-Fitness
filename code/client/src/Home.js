import React, {Component} from 'react';
import './assets/css/home.css';
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Link } from "react-router-dom";
import NavBar from "./components/NavBar1";
import Footer from "./components/Footer";

class Home extends Component {

  render () {
    return (

<div id="page1">

<NavBar />
<div className="d-flex flex-column">
<div id = "Header"><br />WELCOME TO IU FITNESS</div>



<div className="d-flex justify-content-center">
<ul className="listul">
  <li className="b2">
    <Link to="/signup"><p><br /><br /><br />Sign Up</p></Link>
  </li>
</ul>
<ul className="listul">
  <li  className="b3">
    <Link to="/signin"><p><br /><br /><br />Sign In</p></Link>
  </li>
</ul>
</div>
</div>
<Footer />
</div>
    );
  }
}
export default Home;