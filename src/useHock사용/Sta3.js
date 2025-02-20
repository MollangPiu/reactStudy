import React, { useState } from 'react'

function Study() {

    const [cal, setCal] = useState(0);

    return (
        <div>
            <span style={{fontSize: '30px', fontWeight: 'bold'}}>계산 결과: </span><span style={{fontSize: '25px', fontWeight:'bold', color:'blue'}}>{cal}</span><br/>
            <input style={{margin: '10px'}} type='text' id='num1' />
            <select id='op' style={{margin: '10px'}}>
                <option value='+'>+</option>
                <option value='-'>-</option>
                <option value='*'>*</option>
                <option value='/'>/</option>
            </select>
            <input style={{margin: '10px'}} type='text' id='num2' />
            <input type="button" value="결과 계산" onClick={(e) => {
                e.preventDefault();
                let result = 0;
                const num1 = document.getElementById('num1');
                const num2 = document.getElementById('num2');
                const op = document.getElementById('op').value;
                switch(op) {
                    case '+':
                        result = (Number(num1.value) + Number(num2.value));
                        break;
                    case '-':
                        result = (Number(num1.value) - Number(num2.value));
                        break;
                    case '*':
                        result = (Number(num1.value) * Number(num2.value));
                        break;
                    case '/':
                        result = (Number(num1.value) / Number(num2.value));
                        break;
                }

                setCal(result);
                num1.value = '';
                num2.value = '';
                num1.focus();
            }} />
        </div>
    )
}

export default Study;