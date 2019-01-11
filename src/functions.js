import uuidv4 from 'uuid/v4';

export  function getItemPrice (id) {
    console.log(id);
    const  products = [
        {id: 2201, name: 'Parachute Pants', price: 29.99, createdAt: '2018-12-28 15:15:52.701 +00:00', updatedAt: '2018-12-28 15:15:52.701 +00:00'},
        {id: 2202, name: 'Phone Holder', price: 9.99,  createdAt: '2018-12-28 15:15:52.701 +00:00', updatedAt: '2018-12-28 15:15:52.701 +00:00'},
        {id: 2203, name: 'Pet Rock', price: 5.99,  createdAt: '2018-12-28 15:15:52.701 +00:00', updatedAt: '2018-12-28 15:15:52.701 +00:00'},
        {id: 2204, name: 'Egg Timer', price: 15.99,  createdAt: '2018-12-28 15:15:52.702 +00:00', updatedAt: '2018-12-28 15:15:52.702 +00:00'},
        {id: 2205, name: 'Neon Green Hat', price: 21.99,  createdAt: '2018-12-28 15:15:52.702 +00:00', updatedAt: '2018-12-28 15:15:52.702 +00:00'}
        ];
    const result = products.find(item => item.id == id);
    console.log(result);
    return result.price
}


export  function getItemName (id) {
    console.log(id);
    const products =[
        {id: 2201, name: 'Parachute Pants', price: 29.99, createdAt: '2018-12-28 15:15:52.701 +00:00', updatedAt: '2018-12-28 15:15:52.701 +00:00'},
        {id: 2202, name: 'Phone Holder', price: 9.99,  createdAt: '2018-12-28 15:15:52.701 +00:00', updatedAt: '2018-12-28 15:15:52.701 +00:00'},
        {id: 2203, name: 'Pet Rock', price: 5.99,  createdAt: '2018-12-28 15:15:52.701 +00:00', updatedAt: '2018-12-28 15:15:52.701 +00:00'},
        {id: 2204, name: 'Egg Timer', price: 15.99,  createdAt: '2018-12-28 15:15:52.702 +00:00', updatedAt: '2018-12-28 15:15:52.702 +00:00'},
        {id: 2205, name: 'Neon Green Hat', price: 21.99,  createdAt: '2018-12-28 15:15:52.702 +00:00', updatedAt: '2018-12-28 15:15:52.702 +00:00'}
        ];
    const result = products.find(item => item.id == id);
    console.log(result);
    return result.name
}

export  function getInvoiceId() {
    const code = uuidv4();
    const id = code.substr(0,4)
    return id;
}
export  function getCustomerId() {
    const code = uuidv4();
    const id = code.substr(0,4)
    return id;
}

