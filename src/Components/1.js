import React, { Component } from 'react';
import { PageHeader, Button, FormGroup, FormControl, ControlLabel, Table, Form, Col, ButtonGroup } from 'react-bootstrap';
import { connect } from 'react-redux'
//import {} from "./../reducers/actions_creators.js"
import './styles.css'

class AddNew extends Component {
  render() {
    //const invoices = [];
    const customers = this.props.customers.customers;
    const products = this.props.products.products;
    const productsInInvoice = this.props.invoices.newInvoice.invoiceItems;
    return (
        <div className="addNew">
          <div className="top-line">
            <div className="col-md-10 title">Invoices</div>
          </div>

          <Form componentClass="fieldset" horizontal>
            <FormGroup>
              <Col xs={1}>
                <ControlLabel className="text-right">Customer:</ControlLabel>
              </Col>
              <Col xs={6}>
                <FormControl componentClass="select" placeholder="Сhoose Customer">
                  {customers.map(item =>
                      <option value={item.id}>{item.name}</option>
                  )}
                </FormControl>
              </Col>
              <Col xs={2}>
                <Button bsStyle="info">Select </Button>
              </Col>
              <Col xs={2}>
                <Button bsStyle="info">Add New Customer</Button>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col xs={1}>
                <ControlLabel className="text-right">Product:</ControlLabel>
              </Col>
              <Col xs={4}>
                <FormControl componentClass="select" placeholder="Сhoose Customer">
                  {products.map(item =>
                      <option value={item.id}>{item.name}, - - - $ {item.price}</option>
                  )}
                </FormControl>
              </Col>
              <Col xs={1}>
                <ControlLabel className="text-right">Amount:</ControlLabel>
              </Col>
              <Col xs={1}>
                <FormControl type="number" placeholder="1"/>
              </Col>
              <Col xs={2}>
                <Button bsStyle="info">Select </Button>
              </Col>
              <Col xs={2}>
                <Button bsStyle="info"> Add New Product </Button>
              </Col>
            </FormGroup>
          </Form>
          <div>
            <Table striped condensed hover>
              <thead>
              <tr>
                <th className="col-xs-1 text-center">#</th>
                <th className="col-xs-4">Product</th>
                <th className="col-xs-1 text-center">Price</th>
                <th className="col-xs-1 text-center">Quantity</th>
                <th className="col-xs-1 text-center">Total</th>
              </tr>
              </thead>
              <tbody>
              {productsInInvoice.map((item, index) => (
                  <tr>
                    <td className="text-center">{index}</td>
                    <td className="text-center">{item.name}</td>
                    <td className="text-center">{item.price}</td>
                    <td className="text-center">{item.quantity}</td>
                    <th className="col-xs-1 text-center">{item.quantity * item.price}</th>
                  </tr>
              ))}
              </tbody>
            </Table>

          </div>
          <div className="invoice-total col-md-offset-10 col-md-2 text-right">
            <div className="">Subtotal: <span>{productsInInvoice.reduce((sum, item) => {
              return sum + item.quantity * item.price
            }, 0)}</span></div>
            <hr/>

              <div>
                  <ControlLabel className="text-left discount">Discount:</ControlLabel>
                  <FormControl type="number" placeholder="0"/>
                  <hr/>
                  <Button bsStyle="info" className="">Add</Button>
              </div>

            <div className="">
                    Total: <span>{((productsInInvoice.reduce((sum, item) => {
                  return sum + item.quantity * item.price
                }, 0)) * ((100 - this.props.invoices.newInvoice.discount) / 100)).toFixed(2)}</span>
            </div>
            <div>
              <Button bsStyle="info" className="btn">Cancel</Button>
              <Button bsStyle="info" className="btn">Add Invoice</Button>
            </div>
          </div>
        </div>

          );
          }
          }


          const mapStateToProps = store => {
  return {
    customers: store.customers,
    products: store.products,
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
)(AddNew)


