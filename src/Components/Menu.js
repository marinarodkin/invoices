import React, { Component } from 'react';

import { connect } from 'react-redux'
import {actSetAddNewActive} from "./../reducers/actions_creators.js"

class Menu extends Component {
  render() {


    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">

                <div className="navbar-header">
                    ...
                </div>

                <div className="collapse navbar-collapse" id="navbar-main">

                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Invoices</a></li>
                        <li><a href="#">Customers</a></li>
                        <li><a href="#">Products</a></li>
                    </ul>

                </div>
            </div>
        </nav>
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
)(Menu)


