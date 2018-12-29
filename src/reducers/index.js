import { combineReducers } from 'redux';
//import { routerReducer, push } from 'react-router-reducers';
import * as act from './actions'; // CONSTANTS FROM ACTIONS
import uuidv4 from 'uuid/v4';


const initialApp = {

    tasks: [{content: 'Read 30 pages from the book', done: false, id: uuidv4(), isEdited: false},
        {content: 'Write a letter', done: false, id: uuidv4(), isEdited: false},
        {content: 'Prepare for tomorrow', done: true, id: uuidv4(), isEdited: false}
    ],
    text: '',

};


function rdcApp(state = initialApp, action) {
    console.log(action.payload);
    const tasksCopy = [...state.tasks];
    const clickedTaskIndex = tasksCopy.findIndex((item => item.id === action.payload))
    switch (action.type) {
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
        default:
            return state
    }
}

const rootReducer = combineReducers({
    app: rdcApp,
});

export default rootReducer;

