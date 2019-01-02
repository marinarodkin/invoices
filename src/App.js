import React, { Component } from 'react';
import Invoices from './Components/Invoices.js'
import AddNew from './Components/AddNew.js'
import './App.css';
import {PageHeader} from "react-bootstrap";
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App app-container">
          <PageHeader className= "page-header">Invoices App</PageHeader>
          {this.props.invoices.isAddingInvoice ? <AddNew/> : null}

          <Invoices/>

          </div>

    );
  }
}



const mapStateToProps = store => {
    return {
        invoices: store.invoices,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        //actDeleteTask: payload => dispatch(actDeleteTask(payload)),

    }
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
