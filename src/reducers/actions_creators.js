import * as act from './actions';

export  function actAddNewTask(payload) {
    return { type: act.ADD_NEW_TASK, payload };
}
export  function actSetToDoDone(payload) {
    return { type: act.SET_TO_DO_DONE, payload };
}

export  function actDeleteTask(payload) {
    return { type: act.DELETE_TASK, payload };
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

