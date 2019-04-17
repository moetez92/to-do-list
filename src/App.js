import React, { Component } from 'react';
import './component/Todolist';
import Todolist from './component/Todolist';
import Todoinput from './component/Todoinput';
import uuid from 'uuid'  ;
 
class App extends Component {
  render() {
    return  <React.Fragment>
      <div className="Container">
      
      <div className="row">
      <div className="col-4 bg-primary">1</div>
      <div className="col-4 bg-warning">1</div>
      <div className="col-4 bg-danger">1</div>
     
     </div>
      
      </div>
     
    </React.Fragment> 
  }
}

export default App;
