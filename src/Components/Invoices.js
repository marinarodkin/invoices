import React, { Component } from 'react';
import { PageHeader, Button, Grid, Row, Col } from 'react-bootstrap';


class Invoices extends Component {
  render() {
    return (
        <div>
            <PageHeader>Invoices App</PageHeader>
              <div className = "col-md-6 title">Invoices </div>

              <Button bsStyle="col-md-6">Add New</Button>
        </div>




    );
  }
}

export default Invoices;
