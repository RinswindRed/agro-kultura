import React, {Component} from "react";
import './Content.css'

class Content extends Component {
    render(){
        return(
            <div className={"content"}>
                <h1>Counter:{this.props.counter}</h1>
                <button onClick={()=>this.props.increase(3)}>Increase</button>
                <button onClick={this.props.decrease}>Decrease</button>
            </div>
        );
    }
}
export default Content;