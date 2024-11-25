import { useState, useMemo } from "react";

export default function Memo01() {

    const [easy, setEasy] = useState(0);
    const [hard, setHard] = useState(0);

    function changeHard(e) {
        let i= 0;
        for(i=0; i<100000000; i++) {
        }
        console.log('changeHard: ',e);
        return i+e;
    }
    function changeEasy(e) {
        console.log('changeEasy: ',e);
        return e+100000000;
    }

    const hardResult = useMemo(()=>changeHard(hard), [hard]);
    const easyResult = useMemo(()=>changeEasy(easy), [easy]);

    return (
        <div>
            <h1>Memo01</h1>
            <h4>Hard</h4>
            <input type='text' value={hard} />
            <input type='button' value='변경2' onClick={() => {
                setHard(Number(hard)+1);
            }}></input>

            <h4>easy</h4>
            <input type='text' value={easy} />
            <input type='button' value='변경1' onClick={() => {
                setEasy(Number(easy)+1);
            }}></input>
 
            <h4>결과</h4>
            <h6>easy: {easyResult}</h6>
            <h6>hard: {hardResult}</h6>
        </div>
    )
}

