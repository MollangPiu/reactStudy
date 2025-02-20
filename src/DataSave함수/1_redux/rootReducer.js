// rootReducer.js
import { dataReducer } from 'redux';

const initialDateState = {
  today: new Date().toDateString()
};

function dateReducer(state = initialDateState, action) {
  switch (action.type) {
    case 'UPDATE_DATE':
      return {
        ...state,
        today: new Date().toDateString()+ new Date().toLocaleTimeString()
      };
    default:
      return state;
  }
}

const rootReducer = dataReducer({
  date: dateReducer
});

export default rootReducer;
