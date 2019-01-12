import React, { Component } from 'react';

import { connect } from 'react-redux'
import {actSetAddNewActive} from "./../reducers/actions_creators.js"
import { Link } from 'react-router-dom'

class Menu extends Component {
  render() {


    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">

                <div className="collapse navbar-collapse" id="navbar-main">

                    <ul className="nav navbar-nav">
                        <li><Link to='/'>Invoices</Link></li>
                        <li><Link to='/customers'>Customers</Link></li>
                        <li><Link to='/products'>Products</Link></li>

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



