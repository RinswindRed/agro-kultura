import React from 'react';
import './Footer.css'
import { connect } from 'react-redux'
import { fetchMovies} from '../actions';
import withMovies from '../HOC/withToken'

class Footer extends React.Component {
    render(){
        console.log("THIS PROPS FROM FOOTER", this.props)
    return(
        <div className="footer">
            <p>Footer je funkcionalana komponenta</p>
        </div>
    ); 
}
}
const mapStateToProps = state => ({
    movies: state.movies.movies
  });
  
  const mapDispatchToProps = {
    fetchMovies
  };
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withMovies(Footer));