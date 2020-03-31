import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import FoodCatering from "./pages/FoodCatering";
import Menu from "./pages/Menu";
import AOS from "aos";
import 'aos/dist/aos.css';
import Rellax from "rellax";
import Checkout from './pages/Checkout';
import Circle from './pages/Circle';

export default class App extends Component {

 componentDidMount(){

  AOS.init({

     duration : 1000
  });
  this.rellax = new Rellax(".rellax");
 }

  render() {
    return (
     
      <Router>
        <Switch>
          <Route exact path = "/" component = {FoodCatering} />
          <Route exact path = "/menu" component = {Menu} />
          <Route exact path = "/checkout" component = {Checkout} />
        </Switch>  
      </Router>  

    )
  }
}
