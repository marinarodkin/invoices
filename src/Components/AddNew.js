import React, { Component } from 'react';
import { PageHeader, Button, FormGroup, FormControl, ControlLabel, Table, Form, Col, ButtonGroup } from 'react-bootstrap';
import { connect } from 'react-redux'
import {actAddNewInvoice, actChangeInputValue, actCancelNewInvoices, actSelectCustomer, actSelectProduct, actSelectDiscount, actEditCustomer} from "./../reducers/actions_creators.js"
import './styles.css'


class AddNew extends Component {
  render() {

    //const invoices = [];
    const customers = this.props.customers.customers;
    const products = this.props.products.products;
    const productsInInvoice = this.props.invoices.newInvoiceItems;
    const discount = this.props.invoices.newInvoice.discount ? (100 - this.props.invoices.newInvoice.discount) / 100 : 1;
    //вынести сюда подсчет итогов (subtotal, total) - или лучше считать на месте ???
    console.log("discount", discount)
    return (
        <div className="addNew">
          {this.props.invoices.newInvoice.customer  ?
              (<div className="customer-title">Customer: <span className="customer-name"> {this.props.invoices.newCustomer}</span>
                  <Button className="customer-edit-btn" bsStyle="info" onClick={this.props.actEditCustomer}>Edit </Button></div> ) :
          <Form componentClass="fieldset" horizontal>
            <FormGroup>
              <div className="customer-form-block">
                <ControlLabel className="text-right">Customer:</ControlLabel>

                <FormControl componentClass="select" placeholder="Сhoose Customer" className = "customer-form"
                             onChange={this.props.actChangeInputValue} name="newCustomer">
                  {customers.map(item =>
                      <option value={item.name}>{item.name}</option>
                  )}
                </FormControl>

                <Button bsStyle="info" onClick={this.props.actSelectCustomer}>Select </Button>

                <Button bsStyle="info">Add New Customer</Button>
              </div>

            </FormGroup>
          </Form>
            }
            <Form>
            <FormGroup>
              <Col xs={1}>
                <ControlLabel className="text-right">Product:</ControlLabel>
              </Col>
              <Col xs={4}>
                <FormControl componentClass="select" placeholder="Сhoose Product"
                             onChange={this.props.actChangeInputValue} name="newProduct">
                  {products.map(item =>
                      <option value={item.id}>{item.name}, - - - $ {item.price}</option>
                  )}
                </FormControl>
              </Col>
              <Col xs={1}>
                <ControlLabel className="text-right">Amount:</ControlLabel>
              </Col>
              <Col xs={2}>
                <FormControl type="number" placeholder="1" onChange={this.props.actChangeInputValue}
                             value={this.props.invoices.newAmount} name="newAmount"/>
              </Col>
              <Col xs={2}>
                <Button bsStyle="info" onClick={this.props.actSelectProduct}>Select </Button>
              </Col>
              <Col xs={2}>
                <Button bsStyle="info"> Add New Product </Button>
              </Col>
            </FormGroup>
          </Form>

          {productsInInvoice.length < 1 ?
              (< div className="cancel-total col-md-offset-10 col-md-2 text-right">
                <hr/>
              <Button bsStyle="info" className="btn" onClick={this.props.actCancelNewInvoices}>Cancel</Button>
              </div>)
                    :
              <div className="invoice-items-table">
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
                        <td className="text-center">{index + 1}</td>
                        <td className="text-center">{item.name}</td>
                        <td className="text-center">{item.price}</td>
                        <td className="text-center">{item.quantity}</td>
                        <th className="col-xs-1 text-center">{item.quantity * item.price}</th>
                      </tr>
                  ))}
                  </tbody>
                </Table>

              <hr/>
              < div className="invoice-total col-md-offset-8 col-md-4 text-right">
            <div className="total-title">Subtotal: <span
            className="total-sum">{productsInInvoice.reduce((sum, item) => {
            return sum + item.quantity * item.price
          }, 0)}</span></div>


            <div className="discount-block">
            <ControlLabel className="text-left">Discount:</ControlLabel>

            <input className="discount-input" type="number" placeholder="0" onChange={this.props.actChangeInputValue}
            value={this.props.invoices.newDiscount} name="newDiscount"/>

            <Button bsStyle="info" className="" onClick={this.props.actSelectDiscount}>Add</Button>
            </div>
            <hr/>

            <div className="total-title">Total: <span className="total-sum">{((productsInInvoice.reduce((sum, item) => {
            return sum + item.quantity * item.price
          }, 0)) * discount).toFixed(2)}</span></div>
            <div>
            <Button bsStyle="info" className="btn" onClick={this.props.actCancelNewInvoices}>Cancel</Button>
            <Button bsStyle="info" className="btn" onClick={this.props.actAddNewInvoice}>Add Invoice</Button>
            </div>
            </div>
              </div>
          }

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
    actAddNewInvoice: payload => dispatch(actAddNewInvoice(payload)),
    actCancelNewInvoices: payload => dispatch(actCancelNewInvoices(payload)),
    actChangeInputValue: payload => dispatch(actChangeInputValue(payload)),
    actSelectCustomer: payload => dispatch(actSelectCustomer(payload)),
    actSelectProduct: payload => dispatch(actSelectProduct(payload)),
    actSelectDiscount: payload => dispatch(actSelectDiscount(payload)),
    actEditCustomer: payload => dispatch(actEditCustomer(payload)),
  }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddNew)
