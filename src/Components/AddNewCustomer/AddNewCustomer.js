import React, { Component } from 'react';
import {Button, FormGroup, ControlLabel, FormControl, Form, Modal} from 'react-bootstrap';
import { connect } from 'react-redux'
import {actChangeInputCustomerValue, actChangeInputValue, actAddNewCustomer, actCustomerModalShow, actCustomerModalHide } from "../../reducers/actions_creators";
import './styles.css'

class AddNewCustomer extends Component {
    render() {
        return (
            <div className="static-modal add-customer-modal">
                <Modal show={this.props.customers.customerModalShow} onHide={this.props.actCustomerModalHide}>
                    <Modal.Header>
                        <Modal.Title>Add New Customer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    </Modal.Body>
                    <Form className="add-form">
                        <FormGroup>
                            <ControlLabel className="">Customer Name:</ControlLabel>
                            <FormControl type="text" placeholder="Input Customer Name" className=""
                                         onChange={this.props.actChangeInputCustomerValue}
                                         value={this.props.customers.customerName} name="customerName"/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel className="">Customer Address:</ControlLabel>
                            <FormControl type="text" placeholder="Input Customer Name" className=""
                                         onChange={this.props.actChangeInputCustomerValue}
                                         value={this.props.customers.customerAddress} name="customerAddress"/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel className="">Customer Phone:</ControlLabel>
                            <FormControl type="phone" placeholder="Input Customer Name" className=""
                                         onChange={this.props.actChangeInputCustomerValue}
                                         value={this.props.customers.customerPhone} name="customerPhone"/>
                        </FormGroup>
                        <div>
                        </div>
                    </Form>
                    <Modal.Footer>
                        <Button bsStyle="info" className="btn" onClick={this.props.actCustomerModalHide}>Cancel</Button>
                        <Button bsStyle="info" className="btn" onClick={this.props.actAddNewCustomer}
                                disabled={this.props.customers.customerName === "" || this.props.customers.customerAddress === "" || this.props.customers.customerPhone === ""}>Add
                            New Customer</Button>
                    </Modal.Footer>
                </Modal>
            </div>



    );
  }
}

const mapStateToProps = store => {
  return {
     customers: store.customers,
  }
}

const mapDispatchToProps = dispatch => {
  return {
      actChangeInputCustomerValue: payload => dispatch(actChangeInputCustomerValue(payload)),
      actAddNewCustomer: payload => dispatch(actAddNewCustomer(payload)),
      actChangeInputValue: payload => dispatch(actChangeInputValue(payload)),
      actCustomerModalShow: payload => dispatch(actCustomerModalShow(payload)),
      actCustomerModalHide: payload => dispatch(actCustomerModalHide(payload)),
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddNewCustomer)


