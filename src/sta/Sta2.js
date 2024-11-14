import React, { useState} from 'react'


function Study() {

    const [sta, setSta] = useState('1');

    return (
        <div>
            <span>{sta}</span><br/>
            <input type='text' id="inp_text" />
            <input type='button' value="button" onClick={
                (e) => {
                    e.preventDefault();
                    let inp = document.getElementById('inp_text');
                    setSta(inp.value);

                    inp.focus();
                    inp.value = '';
                }
            } />
        </div>
    )
}

export default Study;