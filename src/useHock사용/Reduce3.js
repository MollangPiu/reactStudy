import { useReducer } from "react";

function reducer(oldValue, action) {
    console.log(oldValue, action);
    if(action == '0') {
        return 0;
    }
    return oldValue + action;
}

export default function Reduce3() {

    const 초기값 = 0;
    const [값, 변경값] = useReducer(reducer, 초기값);




    return (
        <div>
            <h1>Reduce3</h1>
            <input type='button' value='증가' onClick={e=>변경값(1)} />
            <input type='button' value='감소' onClick={e=>변경값(-1)} />
            <input type='button' value='초기화' onClick={e=>변경값(초기값)} />
            <h2>{값}</h2>
        </div>
    );
}