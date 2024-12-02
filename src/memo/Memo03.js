import { useState, useMemo } from "react";

export default function Memo03() {

    const [sta, setSta] = useState(0);
    const [inp, setInp] = useState(0);

    const test = useMemo(()=> {
        console.log('test');
        return sta+1
    }, [sta]);


    return (
        <div>
            <h1>Memo03</h1>
            {sta} / {test} <br/>
            <input type='button' value='증가' onClick={e=> {setSta(sta+1)}}/>
            <input type='button' value='클릭' onClick={e=> {setInp(inp+1)}}/>
        </div>
    )
}