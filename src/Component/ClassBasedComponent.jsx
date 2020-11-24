import React, { Component,Fragment } from 'react'
class ClassBasedComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"Pnki",
           

          };
          //this.changeName=this.changeName.bind(this);
    }
     changeName=()=>{
         this.setState({name:"shashi"});
     }
    render() { 
        return (
            <Fragment>
<h1>  I am {this.state.name } i have welcome to hooks{""}</h1>
<button onClick={this.changeName}>ChangeName</button>
            </Fragment>
          );
    }
}
 
export default ClassBasedComponent;