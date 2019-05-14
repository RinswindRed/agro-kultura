import React, {Component} from "react";
import './ApiItem.css';

class ApiItems extends Component {
    constructor(props){
        super(props);
            this.state = {
                id:'',
                items:[]
            }
    }
    componentDidMount(){
        const { id } = this.props.match.params
        fetch(`https://baza-filmova.herokuapp.com/pokazi-film/${id}`)
        .then(res => res.json())
        .then(
        (result) => {
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
    render(){
      const {
        godina,
        naziv,
        slika
      } = this.state.items

        return(
            <div>
                <div>
                 <h1>{naziv}</h1>
                 <img src={slika} style={{width:"auto", height:"350px"}}/>
                 <h3>{godina}</h3>
                </div>
                <button onClick={this.props.history.goBack}>GO BACK</button>
            </div>
        );
    }
}
export default ApiItems;