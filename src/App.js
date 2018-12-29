import React, { Component } from 'react';
import Invoices from './Components/Invoices.js'
import AddNew from './Components/AddNew.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App app-container">
          <Invoices/>
          <AddNew/>

          </div>

    );
  }
}

export default App;
