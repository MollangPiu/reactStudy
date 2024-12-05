import React, { useRef, useState } from 'react';


function Ref1() {

    const inputRef = useRef(0);

    let var1 = 10;
    const [state, setState] = useState(0);
    const ref = useRef(0);


    return (
        <div>
            <h1>Ref1</h1>
            <input type="text" ref={inputRef} />
            <button onClick={() => {
                inputRef.current .focus();
                inputRef.current.value = 'Hello World';
            }}>Input 수정</button>


            <h2>서로 비교하기</h2>
            변수: {var1}<br/>
            state:{state}<br/>
            ref:{ref.current}<br/>

            <button onClick={() => {
                var1++;
                console.log('var: ', var1);
            }}>변수 증가</button>

            <button onClick={() => {
                setState(state + 1);
                console.log('state: ', state);
            }}>state 증가</button>

            <button onClick={() => {
                ref.current++;
                console.log('ref: ', ref.current);
            }}>ref 증가</button>
        </div>
    );
}


export default Ref1;

