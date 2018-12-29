import { combineReducers } from 'redux';
//import { routerReducer, push } from 'react-router-reducers';
import * as act from './actions'; // CONSTANTS FROM ACTIONS
import uuidv4 from 'uuid/v4';


const initialInvoices = {

    invoices: [{id: 3301, customer: 'Mark Benson', discount: 10, total: 15.99},
        {id: 3303, customer: 'Bob Smith', discount: 15, total: 25.99},
        {id: 3305, customer: 'Mary Jane', discount: 5, total: 105.99},
        {id: 3306, customer: 'Freddy Black', discount: 10, total: 5.99},
        {id: 3308, customer: 'John Draper', discount: 10, total: 205.99},
        {id: 3309, customer: 'John Draper', discount: 5, total: 25.99},
        {id: 3311, customer: 'Bob Smith', discount: 10, total: 15.99},
        {id: 3317, customer: 'Mary Jane', discount: 20, total: 305.99},

    ],
    text: '',

};

const initialProducts = { products: [
        {id: 2201, name: 'Parachute Pants', price: 29.99, createdAt: '2018-12-28 15:15:52.701 +00:00', updatedAt: '2018-12-28 15:15:52.701 +00:00'},
        {id: 2202, name: 'Phone Holder', price: 9.99,  createdAt: '2018-12-28 15:15:52.701 +00:00', updatedAt: '2018-12-28 15:15:52.701 +00:00'},
        {id: 2203, name: 'Pet Rock', price: 5.99,  createdAt: '2018-12-28 15:15:52.701 +00:00', updatedAt: '2018-12-28 15:15:52.701 +00:00'},
        {id: 2204, name: 'Egg Timer', price: 15.99,  createdAt: '2018-12-28 15:15:52.702 +00:00', updatedAt: '2018-12-28 15:15:52.702 +00:00'},
        {id: 2205, name: 'Neon Green Hat', price: 21.99,  createdAt: '2018-12-28 15:15:52.702 +00:00', updatedAt: '2018-12-28 15:15:52.702 +00:00'},
        ]

}

const initialCustomers = {
    customers: [{id: 111, name: 'Mark Benson', adress: '353 Rochester St, Rialto FL 43250', phone: '555-534-2342' },
                {id: 112, name: 'Bob Smith', adress: '215 Market St, Dansville CA 94', phone: '555-534-2177' },
                {id: 113, name: 'John Draper', adress: '890 Main St, Fontana IL 31450', phone: '555-534-1111' },
                {id: 117, name: 'Mary Jane', adress: '555 Vallei St, Rialto FL 43250', phone: '555-534-2342' },
                {id: 118, name: 'Freddy Black', adress: '777 Dorton St, Dansville CA 94', phone: '555-534-2177' },
                {id: 119, name: 'Harry Simus ', adress: '558 Lowpi St, Fontana IL 31450', phone: '555-534-1111' },
    ]
}



function rdcInvoices(state = initialInvoices, action) {
    console.log(action.payload);
    /*
    const tasksCopy = [...state.tasks];
    const clickedTaskIndex = tasksCopy.findIndex((item => item.id === action.payload))
    */

    switch (action.type) {
        /*
        case act.CHANGE_INPUT_VALUE:
            const value = action.payload.target.value;
            console.log(action.payload.target.value);
            return {...state, text: value};
        case act.ADD_NEW_TASK:
            if (state.text === "") return state;
            const newTask = {content: state.text, done: false, id: uuidv4()};
            return {...state, tasks: [...tasksCopy, newTask], text: ''};
        case act.SET_TO_DO_DONE:
            //const tasksCopy = [...state.tasks];
            tasksCopy[clickedTaskIndex].done = !tasksCopy[clickedTaskIndex].done;
            return {...state, tasks: tasksCopy};
        case act.DELETE_TASK:
            //const taskCopy = [...state.tasks];
            const tasks = tasksCopy.filter(item => item.id !== action.payload);
            return {...state, tasks: tasks};
        case act.START_EDITING:
            //const clickedTaskIndex = tasksCopy.findIndex((item => item.id === id));
            tasksCopy[clickedTaskIndex].isEdited = !tasksCopy[clickedTaskIndex].isEdited;

            const content = tasksCopy[clickedTaskIndex].content;
            console.log(content);
            return {...state, text: content, tasks: tasksCopy };
        case act.FINISH_EDITING:
            if (state.text === "") return;
            tasksCopy[clickedTaskIndex].content = state.text;
            tasksCopy[clickedTaskIndex].isEdited = !tasksCopy[clickedTaskIndex].isEdited;
            return {...state, text: '', tasks: tasksCopy, contentToEdit: "" };
        */
        default:
            return state
    }
}

const rootReducer = combineReducers({
    invoices: rdcInvoices,
    //customers: rdcCustomers,
    //products: rdcProducts,
});

export default rootReducer;

