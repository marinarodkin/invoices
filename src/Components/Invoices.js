import React, { Component } from 'react';
import { PageHeader, Button, Grid, Row, Col, Table } from 'react-bootstrap';
import { connect } from 'react-redux'
import {actSetAddNewActive} from "./../reducers/actions_creators.js"

class Invoices extends Component {
  render() {
    //const invoices = [];
    const invoices = this.props.invoices.invoices;
    return (
        <div className = "" >

          <div className= "top-line">
              <div className = "col-md-10 title">Invoices </div>
          {this.props.invoices.isAddingInvoice ? null : <Button className="col-xs-2" bsStyle="info" onClick={this.props.actSetAddNewActive}  >Add New</Button> }
          </div>
          <Table striped bordered condensed hover>
            <thead>
            <tr>
              <th className="col-xs-2 text-center">#</th>
              <th className="col-xs-6">Customer</th>
              <th className="col-xs-2 text-center">Discount</th>
              <th className="col-xs-2 text-center">Total</th>
            </tr>
            </thead>
            <tbody>
            {invoices.map(item => (
            <tr>
              <td  className ="text-center">{item.id}</td>
              <td className ="text-center">{item.customer}</td>
              <td className="text-center">{item.discount}</td>
              <td className="text-center" >{item.total}</td>
            </tr>
            ))}
            </tbody>
          </Table>;
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
    actSetAddNewActive: payload => dispatch(actSetAddNewActive(payload)),

  }
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Invoices)


