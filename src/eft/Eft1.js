import React, { useState } from 'react'

function Study() {
    alert('test');

    const [sta, setSta] = useState(0);
    const [sta1, setSta1] = useState(5);

    return (
        <div>
            <div>{sta}</div>
            <div>{sta1}</div>
            <input type="button" value="버튼" onClick={e => {setSta(sta+1)}}></input>
        </div>
    )
}

export default Study;