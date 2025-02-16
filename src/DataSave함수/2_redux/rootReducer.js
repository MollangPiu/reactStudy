import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    data: dateReducer
  });

function dateReducer(state = '', action) {
    console.log('state', state);
    console.log('action', action);
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

export default rootReducer;