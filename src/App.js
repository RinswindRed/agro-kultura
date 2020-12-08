import React, { Component } from "react";
import HeaderComponent from "./Header/HeaderComponent";
import { withRouter } from "react-router";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import './index.css'

class App extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
