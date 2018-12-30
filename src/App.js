import React, { Component } from 'react';
import Invoices from './Components/Invoices.js'
import AddNew from './Components/AddNew.js'
import './App.css';
import {PageHeader} from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="App app-container">
          <PageHeader className= "page-header">Invoices App</PageHeader>
          <AddNew/>
          <Invoices/>

          </div>

    );
  }
}

export default App;
