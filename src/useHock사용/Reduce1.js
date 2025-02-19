import React, { useReducer } from "react";

function Study() {

    const [count, dispatch] = useReducer(countReducer, 0);

    function countReducer(oldCount, action) {

        if(action === 'up') {
            return ++oldCount;
        } else if (action === 'down') {
            return --oldCount;
        } else if(action === 'reset') {
            return 0;
        }
    }

    function cntUp() {
        dispatch('up');
    }
    function cntDown() {
        dispatch('down');
    }
    function cntReset() {
        dispatch('reset');
    }
    

    return (
        <div>
            <h1>Reducer</h1>
            <span>현재값: {count}</span><br/>
            <input type='button' value='up' onClick={cntUp} /><br/>
            <input type='button' value='down' onClick={cntDown} /><br/>
            <input type='button' value='rest' onClick={cntReset} /><br/>
        </div>
    )
}

export default Study;