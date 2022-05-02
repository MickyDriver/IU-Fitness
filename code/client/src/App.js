import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./Home";
import Footer from "./components/Footer";
import Status from "./Status";
import Error from "./Error";
import EventsList from "./EventsList";
import 'bootstrap/dist/js/bootstrap.js';
import Payment from "./Payment";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SignInSuccess from "./SignInSuccess";

const App = () => {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Home} />
        <Route path="/status" component={Status} />
        <Route path="/listAll" component={EventsList} />
        <Route path="/signin" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/signinsuccess" component={SignInSuccess}/>
        <Route path="/payment" component={Payment}/>
        <Route path="*" component={Error} />
        <Footer />
        </Switch>
      </Router>
  );
};
export default App;
