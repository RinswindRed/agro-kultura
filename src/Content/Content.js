import React, {Component} from "react";
import './Content.css'
import withMovies from '../HOC/withMovies'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

class Content extends Component {
    render(){
        console.log('THIS PROPS', this.props)
        const movies=this.props.movies.map((movie,index)=>{
            return (
            <Link to={`/filmovi/${movie.id}`}>
                <div style={{width:"100px",backgroundColor:"red",margin:"10px"}}>
                {movie.naziv}
            </div>
            </Link>
            )
        })
        return(
            <div className={"content"}>
               {movies}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    movies: state.movies.movies
  });
  
export default connect(
    mapStateToProps,
    null
  )(withMovies(Content));