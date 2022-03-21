import React, {Component} from 'react';
import './assets/css/home.css';
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import NavBar from "./components/NavBar2";
import Footer from "./components/Footer";

class SignInSuccess extends Component {

  render () {
    return (

<div id="page1">

<NavBar />

<div class="w-100 d-flex flex-column">
		<div id="Header2"><br />WELCOME   %USER%!</div>



		<div class="w-100 d-flex flex-row justify-content-center">
			<ul class="listul">
				<li class="b1">
					<a href=".html">
						<p><br /><br />Remote<br /><br />Check In</p>
					</a>
				</li>
			</ul>
			<ul class="listul">
				<li class="b3">
					<a href=".html">
						<p><br /><br />Create<br /><br />Appointment</p>
					</a>
				</li>
			</ul>
		</div>
</div>
<Footer />
</div>
    );
  }
}
export default SignInSuccess;