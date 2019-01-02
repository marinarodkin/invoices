import * as act from './actions';

export  function actAddNewInvoice(payload) {
    return { type: act.ADD_NEW_INVOICE, payload };
}
export  function actAddNewCustomer(payload) {
    return { type: act.ADD_NEW_CUSTOMER, payload };
}

export  function actDeleteInvoice(payload) {
    return { type: act.DELETE_INVOICE, payload };
}

export  function actStartEditing(payload) {
    return { type: act.START_EDITING, payload };
}

export  function actFinishEditing(payload) {
    return { type: act.FINISH_EDITING, payload };
}

export  function actChangeInputValue(payload) {
    return { type: act.CHANGE_INPUT_VALUE, payload };
}


export  function actSetAddNewActive(payload) {
    return { type: act.SET_ADDNEW_ACTIVE, payload };
}

export  function actCancelNewInvoices(payload) {
    return { type: act.CANCEL_NEW_INVOICE, payload };
}

export  function actSelectCustomer(payload) {
    return { type: act.SELECT_CUSTOMER, payload };
}

export  function actSelectProduct(payload) {
    return { type: act.SELECT_PRODUCT, payload };
}
export  function actSelectDiscount(payload) {
    return { type: act.SELECT_DISCOUNT, payload };
}
export  function actEditCustomer(payload) {
    return { type: act.EDIT_CUSTOMER, payload };
}

/*
export const ADD_NEW_INVOICE = 'ADD_NEW_INVOICE';
export const ADD_NEW_CUSTOMER = 'ADD_NEW_CUSTOMER';
export const DELETE_INVOICE = 'DELETE_TASK';
export const START_EDITING = 'START_EDITING';
export const FINISH_EDITING = 'FINISH_EDITING';
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const SET_ADDNEW_ACTIVE = 'SET_ADDNEW_ACTIVE';
export const SELECT_CUSTOMER = 'SELECT_CUSTOMER';
export const SELECT_PRODUCT = 'SELECT_PRODUCT

*/
