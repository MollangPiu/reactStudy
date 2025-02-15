import {useState} from 'react';

export default function View() {
    const [텍스트, set텍스트] = useState('');
    const [시간, set시간] = useState('');
    return (
        <div>
            <input type="button" value="출력하기" onClick={() => {
                const item = localStorage.getItem('item');
                console.log(item);
                const obj = JSON.parse(item);
                set시간(obj.time);
                set텍스트(obj.text);
            }} />

            <div>
                <span>입력 값: </span>
                <span>{텍스트}</span><br/>
                <span>시간: </span>
                <span>{시간}</span>
            </div>
        </div>
    )
}