import * as act from './actions';

export  function actAddNewInvoice(payload) {
    return { type: act.ADD_NEW_INVOICE, payload };
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
export  function actAddNewCustomer(payload) {
    return { type: act.ADD_NEW_CUSTOMER, payload };
}
export  function actChangeInputCustomerValue(payload) {
    return { type: act.CHANGE_INPUT_CUSTOMER_VALUE, payload };
}

export  function actCustomerModalShow(payload) {
    return { type: act.CUSTOMER_MODAL_SHOW, payload };
}

export  function actCustomerModalHide(payload) {
    return { type: act.CUSTOMER_MODAL_HIDE, payload };
}
export  function actAddNewProduct(payload) {
    return { type: act.ADD_NEW_PRODUCT, payload };
}
export  function actChangeInputProductValue(payload) {
    return { type: act.CHANGE_INPUT_PRODUCT_VALUE, payload };
}

export  function actProductModalShow(payload) {
    return { type: act.PRODUCT_MODAL_SHOW, payload };
}

export  function actProductModalHide(payload) {
    return { type: act.PRODUCT_MODAL_HIDE, payload };
}


