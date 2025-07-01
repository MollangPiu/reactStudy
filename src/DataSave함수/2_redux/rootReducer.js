import { combineReducers } from 'redux';

function dateReducer(state = '', action) {
    switch(action.type) {
        case 'INSERT':
            return {
                ...state,
                input: action.input
            }

        default:
            return state;
    }
}

const rootReducer = combineReducers({
    data: dateReducer
});

export default rootReducer;