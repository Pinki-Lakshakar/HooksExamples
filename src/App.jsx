import React, { Component,Fragment } from 'react';
import ClassBasedComponent from './Component/ClassBasedComponent';
import HooksExample from './Component/HooksExample';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <Fragment>
        <ClassBasedComponent/>
        <HooksExample/>
      </Fragment>
      );
  }
}
 
export default App;
