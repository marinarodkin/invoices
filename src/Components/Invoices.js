import React, { Component } from 'react';
import { PageHeader, Button, Grid, Row, Col, Table } from 'react-bootstrap';
import { connect } from 'react-redux'
//import {} from "./../reducers/actions_creators.js"

class Invoices extends Component {
  render() {
    //const invoices = [];
    const invoices = this.props.invoices.invoices;
    return (
        <div className = "" >
            <PageHeader>Invoices App</PageHeader>
              <div className = "col-md-10 title">Invoices </div>
              <Button className="col-xs-2" bsStyle="info"  >Add New</Button>
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
    //actDeleteTask: payload => dispatch(actDeleteTask(payload)),

  }
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Invoices)


