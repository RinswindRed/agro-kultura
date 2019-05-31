import React from 'react';
import {connect} from 'react-redux'
import {fetchMovies} from '../actions'

const withMovies = (WrappedComponent) => {
  class HOC extends React.Component {
    
  componentDidMount(){
    if(this.props.movies.length === 0 && this.props.isLoged){
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
componentDidUpdate(prevProps){
  if(this.props.isLoged !== prevProps.isLoged && this.props.isLoged){
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
      const hasMovies = this.props.movies.length !== 0;
      console.log("THI IS LOGED", this.props.isLoged)
      return (
        <WrappedComponent
          hasMovies={hasMovies}
          {...this.props}
        />
      );
    }
  }

const mapStateToProps = state =>({
    movies: state.movies.movies,
    isLoged:state.isLoged
})
const mapDispatchToProps = {
    fetchMovies
  };
    
  return connect(mapStateToProps,mapDispatchToProps)(HOC); 
}

export default withMovies;