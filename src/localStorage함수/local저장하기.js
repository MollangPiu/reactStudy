import { useState, useRef } from 'react';

export default function Save() {

    const [입력, set입력] = useState('');

    return (
        <div>
            <input type="text" value={입력} onChange={e => {
                set입력(e.target.value);
            }}/>
            <input type="button" value="저장하기" onClick={e=> {
                const Time = new Date();
                const 현재시간 = Time.getHours() + "시 " + Time.getMinutes() + "분 " + Time.getSeconds() + "초";
                localStorage.setItem('item', JSON.stringify({text: 입력, time: 현재시간}));
            }}/>
        </div>
    )
}