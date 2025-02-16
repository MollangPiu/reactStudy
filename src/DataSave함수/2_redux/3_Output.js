import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function Output() {
    const [텍스트, set텍스트] = useState('');
    const input = useSelector(state => state.data.input);

    return (
        <div style={{border: '3px solid blue', padding: '10px'}}>
            <h1>Output</h1>
            <h2>저장된 데이터</h2>
            <input type="button" value="불러오기" onClick={
                () => {
                    console.log(input);
                    set텍스트(input);
                } }/>
            <p>{텍스트}</p>
        </div>
    )
}
