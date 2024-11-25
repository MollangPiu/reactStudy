import { useMemo, useState } from "react";

export default function Memo02() {


    const [isDark, setIsDark] = useState(false);
    const [count, setCount] = useState(0);  //숫자 알아보기

    const even = useMemo(()=>evenNum(count), [count]);

    function evenNum(e) {
        console.log('evenNum: ',e);
        return e % 2 === 0? '짝수' : '홀수';
    }


    
    return (
        <div style={{backgroundColor: isDark ? 'black' : 'white', color: isDark ? 'white' : 'black'}}>
            <h1>Memo02</h1>
            <input type='checkbox' checked={isDark} onChange={e=> {
                setIsDark(e.target.checked);
            }}/>
            <h4>count: {count} / {even}</h4>
            <input type='button' value='증가' onClick={e=> {
                setCount(count+1);
            }}/>
        </div>
    )
}