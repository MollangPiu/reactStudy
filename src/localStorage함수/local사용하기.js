import { useState, useRef } from 'react';

export default function LocalStorage() {

    const [입력, set입력] = useState('');

    const 저장대상 = useRef(null);
    const 저장소 = useRef(null);

    return (
        <div>
            <h1>LocalStorage 사용하기</h1>
            <input type="text" ref={저장대상} />
            <input type="button" value="저장" onClick={()=> {
                const 입력값 = 저장대상.current.value;
                localStorage.setItem('입력', 입력값);
            }}/><br/>
            
            <div style={{margin: '30px'}} />

            <input type="button" value="저장 불러오기" onClick={()=> {
                저장소.current.innerHTML = localStorage.getItem('입력');
            }}/>
            <div ref={저장소}></div>
        </div>
    )
}
