import React, { Component } from 'react';

import List from './List';
class Todolist extends Component {
    render() {
        return <React.Fragment>
        <h1>this is a list</h1>
          <List/>
        </React.Fragment> ; 
         
    }
}

export default Todolist;