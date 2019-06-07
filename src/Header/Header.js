import React, {Component} from "react";
import '../index.css'
import {connect} from 'react-redux'
import {logIn} from '../actions'

class Header extends Component {
    logika = () => {
        const isLoged = typeof "marko" === "string" ? true : false
        this.props.logIn(isLoged)
    }
    render(){
        return(
            <div style={{backgroundColor:"yellow"}}>
                <h1>Welcome to Movies API</h1>
                <input type="text"></input>
                <input type="text"></input>
                <button onClick={this.logika} type="button">Log in</button>
            </div>
        );
    }
}
const mapStateToProps = state =>({
    movies:state.movies
})
const mapDispatchToProps = {
    logIn
  };
export default connect(mapStateToProps,mapDispatchToProps)(Header);