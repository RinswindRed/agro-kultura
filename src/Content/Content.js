import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NotFound404 from "../NotFound404";
import Home from "../Home/Home";
import About from '../About/About';
import Services from '../Services/Services'
import Contact from '../Contact/Contact'

class Content extends Component {
  render() {
    return (
      <div>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound404} />
      </Switch>
      </div>
    );
  }
}

export default Content;
