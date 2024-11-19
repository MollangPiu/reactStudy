import React, { useEffect, useState } from 'react'

function Study() {

    const [sta, setSta] = useState(0);
    const [값2, 값변경2] = useState(0);

    useEffect(() => {
        console.log('sta 변경');
    }, [sta]);

    useEffect(()=> {
        console.log('값2 변경');
    }, [값2])

    return (
        <div>
            값: 
            {sta}<br/>
            <input type='text' id='inp'/>
            <input type='button' onClick={e=> {
                const inp = document.getElementById('inp');
                setSta(inp.value);
                inp.value = '';
            }} value='변경'/><br/>


            값: {값2} <br/>
            <input type='text' id='inp2' />
            <input type='button' onClick={e=> {
                const inp2 = document.getElementById('inp2');
                값변경2(inp2.value);
                inp2.value = '';
            }} value='변경' />
        </div>
    )
}

export default Study;