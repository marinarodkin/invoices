import { combineReducers } from 'redux';
//import { routerReducer, push } from 'react-router-reducers';
import * as act from './actions'; // CONSTANTS FROM ACTIONS

import {getItemPrice, getInvoiceId, getCustomerId} from "../functions";

///пока редюсеры в одном файле, я их разнесу на 3 разных файла

const initialState = {
    /*invoices*/
    invoices: [{id: 3301, customer: 'Mark Benson', discount: 10, total: 15.99},
        {id: 3303, customer: 'Bob Smith', discount: 15, total: 25.99},
        {id: 3305, customer: 'Mary Jane', discount: 5, total: 105.99},
        {id: 3306, customer: 'Freddy Black', discount: 10, total: 5.99},
        {id: 3308, customer: 'John Draper', discount: 10, total: 205.99},
        {id: 3309, customer: 'John Draper', discount: 5, total: 25.99},
        {id: 3311, customer: 'Bob Smith', discount: 10, total: 15.99},
        {id: 3317, customer: 'Mary Jane', discount: 20, total: 305.99},

    ],
    isAddingInvoice: false,
    newInvoice: {},
    newDiscount: 0,
    newCustomer: '',
    newTotal: 0,
    editingInvoice: 0,

    /*invoiceItems*/
    invoiceItems: [],
    newProduct: "",
    newProductTotal: 0,
    newProductPrice: 0,

    /*products*/
 products: [
        {id: 2201, name: 'Parachute Pants', price: 29.99, createdAt: '2018-12-28 15:15:52.701 +00:00', updatedAt: '2018-12-28 15:15:52.701 +00:00'},
        {id: 2202, name: 'Phone Holder', price: 9.99,  createdAt: '2018-12-28 15:15:52.701 +00:00', updatedAt: '2018-12-28 15:15:52.701 +00:00'},
        {id: 2203, name: 'Pet Rock', price: 5.99,  createdAt: '2018-12-28 15:15:52.701 +00:00', updatedAt: '2018-12-28 15:15:52.701 +00:00'},
        {id: 2204, name: 'Egg Timer', price: 15.99,  createdAt: '2018-12-28 15:15:52.702 +00:00', updatedAt: '2018-12-28 15:15:52.702 +00:00'},
        {id: 2205, name: 'Neon Green Hat', price: 21.99,  createdAt: '2018-12-28 15:15:52.702 +00:00', updatedAt: '2018-12-28 15:15:52.702 +00:00'},
        ],
    productName: "",
    productPrice: "",
    productModalShow: false,
    editingProduct: 0,

    /*customers*/
    customers: [{id: 111, name: 'Mark Benson', address: '353 Rochester St, Rialto FL 43250', phone: '555-534-2342' },
                {id: 112, name: 'Bob Smith', address: '215 Market St, Dansville CA 94', phone: '555-534-2177' },
                {id: 113, name: 'John Draper', address: '890 Main St, Fontana IL 31450', phone: '555-534-1111' },
                {id: 117, name: 'Mary Jane', address: '555 Vallei St, Rialto FL 43250', phone: '555-534-2342' },
                {id: 118, name: 'Freddy Black', address: '777 Dorton St, Dansville CA 94', phone: '555-534-2177' },
                {id: 119, name: 'Harry Simus ', address: '558 Lowpi St, Fontana IL 31450', phone: '555-534-1111' },
    ],
    customerName: "",
    customerAddress: "",
    customerPhone: "",
    customerModalShow: false,
    editingCustomer: 0,
}

function rdcInvoiceItems(state = initialState, action) {
    const invoiceItemsCopy = [...state.invoiceItems];
    const stateCopy = {...state};
    switch (action.type) {
        case act.CHANGE_INVOICEITEMS_VALUE:   //input-product field
            const value = action.payload.target.value;
            const name = action.payload.target.name;
            const price = getItemPrice(value, state.products);
            return {...state,  [name]: value, newProductPrice: price };
        case act.SELECT_PRODUCT:
            const {newProduct} = stateCopy;
            const itemToChange = invoiceItemsCopy.find(item => item.name === newProduct); //checking if this item is already in table
            if(itemToChange){     //when this item is already in table
                itemToChange.quantity = itemToChange.quantity + 1;
                return {...state, invoiceItems: invoiceItemsCopy, newProductTotal: 0}
            }
            else {  //when this item is the first time selected
                const newInvoiceItem = {
                    name:newProduct, quantity: 1, price: getItemPrice(newProduct, state.products)
                }
                const newInvoiceItems = [...invoiceItemsCopy, newInvoiceItem]
                return {...state, invoiceItems: newInvoiceItems, newProductTotal: 0}
            }
        case act.CHANGE_PRODUCTQUANTITY:  //in table in quantity-input field
            const quantityValue = action.payload.target.value;
            const name1 = action.payload.target.name;
            const productToChange = invoiceItemsCopy.find(item => item.name === name1);
            productToChange.quantity = quantityValue;
            productToChange.total = quantityValue *  productToChange.price;
            return {...state, invoiceItems: invoiceItemsCopy};
        case act.ADD_NEW_INVOICE:    //this action dispatched  is in 2 reducers, need to clean invoiceItems array (????)
             return {...state, invoiceItems: []};
    default:
    return state
}
}


function rdcInvoices(state = initialState, action) {
    const newInvoiceCopy = {...state.newInvoice};
    const invoiceCopy = [...state.invoices];
    const stateCopy = {...state};
    const newInvoiceItemsCopy = [...state.invoiceItems];
    switch (action.type) {
        case act.SET_ADDNEW_ACTIVE:
            return {...state, isAddingInvoice: !state.isAddingInvoice};
        case act.CHANGE_INPUT_VALUE:    //input-customer field
            const value = action.payload.target.value;
            const name = action.payload.target.name;
            return {...state,  [name]: value};
        case act.ADD_NEW_INVOICE:
            const discount = stateCopy.newDiscount !== 0 ? (100 - stateCopy.newDiscount) / 100 : 1;
            const total =  (newInvoiceItemsCopy.reduce((sum, item) => {
                return sum + item.quantity * item.price}, 0)) * discount;
            newInvoiceCopy.id = getInvoiceId();
            newInvoiceCopy.customer = stateCopy.newCustomer;
            newInvoiceCopy.total = total;
            newInvoiceCopy.discount = stateCopy.newDiscount;
            return {...state, invoices: [...invoiceCopy, newInvoiceCopy], newCustomer: '', newDiscount: 0, newTotal: 0, invoiceItems: []};
        case act.CANCEL_NEW_INVOICE:
            return {...state, isAddingInvoice: false};
        case act.DELETE_INVOICE:
            const idForDelete = action.payload;
            const newInvoices = invoiceCopy.filter(item =>item.id !== idForDelete)
            return {...state, invoices: newInvoices};
        case act.START_EDITING:
            const idForEdit = action.payload;
            const invoicesToEdit = invoiceCopy.find(item =>item.id === idForEdit)
            return {...state, isAddingInvoice: true, newCustomer: invoicesToEdit.customer, newDiscount: invoicesToEdit.discount, editingInvoice: idForEdit};
        case act.FINISH_EDITING:
            const editingInvoice = action.payload;
            const toEditInvoice = invoiceCopy.find(item =>item.id === editingInvoice);
            toEditInvoice.customer = stateCopy.newCustomer;
            toEditInvoice.discount = stateCopy.newDiscount;
            return {...state, invoices: invoiceCopy, isAddingInvoice: false, newCustomer: "", newDiscount: 0, editingInvoice: 0};
        default:
            return state
    }
}

function rdcCustomers(state = initialState, action) {
    const customersCopy = [...state.customers];
    const stateCopy = {...state};
    switch (action.type) {
        case act.CHANGE_INPUT_CUSTOMER_VALUE:
            const value = action.payload.target.value;
            console.log(action.payload.target.value);
            const name = action.payload.target.name;
            return {...state,  [name]: value};
        case act.ADD_NEW_CUSTOMER:
            const {customerName, customerAddress, customerPhone } = state;
            const newCustomer = {id: getCustomerId(), name: customerName, address: customerAddress, phone: customerPhone  }
             const newCustomers = [...customersCopy, newCustomer]
            return {...state,  customers: newCustomers, customerName: "", customerAddress: "", customerPhone: "", customerModalShow: false};
        case act.CUSTOMER_MODAL_SHOW:
            console.log("CUSTOMER_MODAL_SHOW");
            return {...state,  customerModalShow: true};
        case act.CUSTOMER_MODAL_HIDE:

            return {...state,  customerModalShow: false};
        case act.DELETE_CUSTOMER:
            console.log('action.payload', action.payload);
            const idForDelete = action.payload;
            const updatedCustomers = customersCopy.filter(item =>item.id != idForDelete)
            console.log('updatedCustomers', updatedCustomers);
            return {...state, customers: updatedCustomers};
        case act.START_EDITING_CUSTOMER:
            console.log('action.payload', action.payload);
            const idForEdit = action.payload;
            const customerToEdit = customersCopy.find(item =>item.id === idForEdit)
            console.log('customerToEdit', customerToEdit);
            return {...state, customerModalShow: true, customerName: customerToEdit.name,  customerAddress: customerToEdit.address, customerPhone: customerToEdit.phone, editingCustomer: idForEdit};
        case act.FINISH_EDITING_CUSTOMER:
            console.log('action.payload', action.payload);
            const editingCustomer = action.payload;
            const toEditCustomer = customersCopy.find(item =>item.id === editingCustomer);
            toEditCustomer.name = stateCopy.customerName;
            toEditCustomer.address = stateCopy.customerAddress;
            toEditCustomer.phone = stateCopy.customerPhone;
            return {...state, customers: customersCopy,customerModalShow: false, customerName: "", customerAddress: "", customerPhone: "",  editingCustomer: 0};
        default:
            return state
    }
}

function rdcProducts(state = initialState, action) {
    const productsCopy = [...state.products];
    const stateCopy = {...state};
    switch (action.type) {
        case act.CHANGE_INPUT_PRODUCT_VALUE:
            const value = action.payload.target.value;
            console.log(action.payload.target.value);
            const name = action.payload.target.name;
            return {...state,  [name]: value};
        case act.ADD_NEW_PRODUCT:
            const {productName, productPrice } = state;
            const newProduct = {id: getCustomerId(), name: productName, price: productPrice  }
            const newProducts = [...productsCopy, newProduct]
            return {...state,  products: newProducts, productName: "", productPrice: "", productModalShow: false};
        case act.PRODUCT_MODAL_SHOW:
            console.log("product_MODAL_SHOW");
            return {...state,  productModalShow: true};
        case act.PRODUCT_MODAL_HIDE:

            return {...state,  productModalShow: false};
        case act.DELETE_PRODUCT:
            console.log('action.payload', action.payload);
            const idForDelete = action.payload;
            const updatedProducts = productsCopy.filter(item =>item.id != idForDelete)
            console.log('updatedProducts', updatedProducts);
            return {...state, products: updatedProducts};
        case act.START_EDITING_PRODUCT:
            console.log('action.payload', action.payload);
            const idForEdit = action.payload;
            const productToEdit = productsCopy.find(item =>item.id === idForEdit)
            console.log('customerToEdit',  productToEdit);
            return {...state,  productModalShow: true,  productName:  productToEdit.name,   productPrice:  productToEdit.price, editingProduct: idForEdit};
        case act.FINISH_EDITING_PRODUCT:
            console.log('action.payload', action.payload);
            const editingProduct = action.payload;
            const toEditProduct =  productsCopy.find(item =>item.id === editingProduct);
            toEditProduct.name = stateCopy.productName;
            toEditProduct.price = stateCopy.productPrice;

            return {...state, products: productsCopy,productModalShow: false, productName: "", productPrice: "",   editingProduct: 0};
        default:
            return state
    }
}
/*
const rootReducer = combineReducers(
    {rdcInvoices, rdcCustomers,rdcProducts, rdcInvoiceItems}
);
*/

const rootReducer = combineReducers({
    invoices: rdcInvoices,
    customers: rdcCustomers,
    products: rdcProducts,
    invoiceItems: rdcInvoiceItems,
});

export default rootReducer;

