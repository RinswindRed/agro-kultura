import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Header from './Header/Header';
import ApiItem from './ApiItem/ApiItems';
import Footer from './Footer/Footer';
import { Link } from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props);
        this.state = {
            isLoaded:false,
            error:false,
            items:[]
        }
}
componentDidMount(){
  fetch("https://baza-filmova.herokuapp.com/filmovi/")
      .then(res => res.json())
      .then(
        (result) => {
          console.log("HERE AAAA",result)
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
    )
}
 
  render() {
    const {
      error
    } = this.state
    console.log("THIS PROS", this.props)

    const pokemon = this.state.items.map((item,index) => {
      return (<Link key={item._id} 
                    to={ `/film/${item._id}`}
              >
              {item.naziv}
              </Link>
            )
          })
    return (
      <div>
        <Header/>
        {pokemon}
      </div>
    );
  }
}
export default App;
