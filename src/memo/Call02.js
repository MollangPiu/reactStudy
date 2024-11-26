import {useCallback, useEffect, useState } from "react";

function Call02() {
    const [count, setCount] = useState(0);
    const [test, setTest] = useState(0);

    const changeCount = () => {
        console.log(`changeCount`);
    }

    const changeCount2 = useCallback(()=>{
        console.log(`changeCount2, ${count}`);
    }, [count]);

    useEffect(()=>{
        console.log(`changeCount 변경`);
    }, [changeCount2]);


    return (
        <div>
            <h2>useCallBack 2</h2>
            <input type='button' value='증가' onClick={()=>setCount(count+1)} />
            <span>count: {count}</span><br/>
            <input type='button' value='test' onClick={()=>setTest(test+1)} />
            <span>test: {test}</span>
            <input type='button' value='changeCount' onClick={changeCount2} />
        </div>
    )
}

export default Call02;


