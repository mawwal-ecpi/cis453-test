import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import ATV from "./ATV";
import Drones from "./Drones";
import ElectricCars from "./ElectricCars";
 
class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <h1>ARNGENS.NET</h1>
            <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/ATV">ATV</NavLink></li>
            <li><NavLink to="/Drones">Drones</NavLink></li>
            <li><NavLink to="/ElectricCars">Electric Cars</NavLink></li>
            </ul>
            <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/ATV" component={ATV}/>
            <Route path="/Drones" component={Drones}/>
            <Route path="/ElectricCars" component={ElectricCars}/>
               
            </div>
          </div>
          </HashRouter>
      );
    }
  }
   
  export default Main;