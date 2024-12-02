import {useCallback, useEffect, useState } from "react";

function Call01() {
    console.log('call01');

    const [count, setCount] = useState(0);





    // useEffect(() => {
    //     console.log(`somecount 변경`); 
    // }, [someCount]);



      
    const someCount = useCallback(() => {
        console.log(`someCount: ${count}`);
        //setTest(test+1);
    }, [count]);



    return (
        <div>
            <h2>useCallBack</h2>
            <input type="button" value="증가" onClick={()=>setCount(count+1)} /><br/>
            state: {count}<br/>
            <input type='button' value='someCount' onClick={someCount} />
        </div>
    )
}

export default Call01;