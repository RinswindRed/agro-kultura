import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Header from './Header/Header';
import ApiItem from './ApiItem/ApiItems';
import Footer from './Footer/Footer';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { increment, decrement, fetchMovies} from './actions';
import withToken from './HOC/withToken'

class App extends Component {
  render() {

    console.log("THIS PROS", this.props)
    return (
      <div>
        <Header/>
        <button onClick={this.props.increment}>Increase</button>
        <button onClick={()=>this.props.decrement(2,this.props.counter.b)}>Decrease</button>
        {/* {pokemon} */}
        <Link to='/footer'>Footer</Link>
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
)(withToken(App))
