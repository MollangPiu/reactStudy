import { useCallback, useEffect, useState } from "react";

function Call01() {
    console.log('call01');

    const [count, setCount] = useState(0);

  
    const someCount = useCallback(() => {
        console.log(`someCount: ${count}`);
    }, [count]);

    

    useEffect(() => {
        console.log(`effect: ${count}`);
    }, [someCount]);


    return (
        <div>
            <h2>useCallBack</h2>
            <input type="button" value="증가" onClick={()=>setCount(count+1)} /><br/>
            state: {count}<br/>
            <input type='button' value='someCount' onClick={someCount} />
            <span>some: {someCount()}</span>
        </div>
    )
}

export default Call01;