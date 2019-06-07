import React, { Component } from 'react';
import Header from './Header/Header';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { increment, decrement, fetchMovies} from './actions';
import withMovies from './HOC/withMovies';
import Content from './Content/Content';
import Footer from './Footer/Footer'

class App extends Component {
  render() {
    return (
      <div>
       <Header/>
       <Content/>
       <Footer/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter,
});

const mapDispatchToProps = {
  increment,
  decrement,
  fetchMovies
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withMovies(App))
