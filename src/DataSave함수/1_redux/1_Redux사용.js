// Redux사용.js
import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './store';

export default function Redux사용() {
    return (
        <div>
            <h1>Redux 사용</h1>
            <Provider store={store}>
                <MyStore />
                <Result />
            </Provider>
        </div>
    );
}

function MyStore() {
    const dispatch = useDispatch();
    return (
        <div>
            <h1>MyStore</h1>
            <button onClick={() => dispatch({ type: 'UPDATE_DATE' })}>
                Update Date
            </button>
        </div>
    );
}

function Result() {
    const today = useSelector(state => state.date.today);
    return (
        <div>
            <h1>Result</h1>
            <p>Today: {today}</p>
        </div>
    );
}
