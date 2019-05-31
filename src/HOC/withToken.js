import React from 'react';
import {connect} from 'react-redux'
import {fetchMovies} from '../actions'

const withMovies = (WrappedComponent) => {
  class HOC extends React.Component {
    componentDidMount(){
        console.log("HERE",this.props.movies.length )
    if(this.props.movies.length === 0){
        console.log("HERE in conditions",this.props.movies.length )
        fetch("https://baza-filmova.herokuapp.com/filmovi/")
        .then(res => res.json())
        .then(
          (result) => {
            this.props.fetchMovies(result);
          },
          (error) => {
            console.log("HEHEHE")
          }
      )
  }
}

    render() {
      const hasMovies = this.props.movies.length === 0;
      return (
        <WrappedComponent
          hasMovies={hasMovies}
          {...this.props}
        />
      );
    }
  }

const mapStateToProps = state =>({
    movies: state.movies.movies
})
const mapDispatchToProps = {
    fetchMovies
  };
    
  return connect(mapStateToProps,mapDispatchToProps)(HOC); 
}

export default withMovies;