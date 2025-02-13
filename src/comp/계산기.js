import {useState, useRef} from 'react'

export default function Study() {
    const [cal, setCal] = useState(0);
    const [history, setHistory] = useState([]);

    const domNum1 = useRef(0);
    const domNum2 = useRef(0);
    const domOp = useRef(null);
    
        return (
            <div>
                <span style={{fontSize: '30px', fontWeight: 'bold'}}>계산 결과: </span><span style={{fontSize: '25px', fontWeight:'bold', color:'blue'}}>{cal}</span><br/>
                <input style={{margin: '10px'}} type='text' id='num1' ref={domNum1} />
                <select id='op' style={{margin: '10px'}} ref={domOp}>
                    <option value='+'>+</option>
                    <option value='-'>-</option>
                    <option value='*'>*</option>
                    <option value='/'>/</option>
                </select>
                <input style={{margin: '10px'}} type='text' id='num2' ref={domNum2} />
                <input type="button" value="결과 계산" onClick={(e) => {
                    e.preventDefault();
                    let result = 0;
                    const num1 = domNum1.current;
                    const num2 = domNum2.current;
                    const op = domOp.current.value;
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
                    setHistory([{num1: num1.value, op: op, num2: num2.value, result: result}, ...history]);
                    num1.value = '';
                    num2.value = '';
                    num1.focus();
                }} />

                <History data={history}/>
            </div>
        )
}

function History({data}) {
    return (
        <div style={{
            border: '3px solid red'
        }}>
            <h1>History</h1>
            {data.map((item, index) => (
                <div key={index}>
                    {item.num1} {item.op} {item.num2} = {item.result}
                </div>
            ))}
        </div>
    )
}