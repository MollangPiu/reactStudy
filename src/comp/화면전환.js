import { useState, useRef } from 'react';
import img1 from '../assets/img/animal2.jpeg';

export default function 화면전환() {
    const [화면, set화면] = useState(1);
    const 화면2 = useRef(2);

    return (
        <div>
            <h1>화면전환</h1>
            <h3>useState로 화면 전환</h3>
            <button onClick={() => {
                set화면(1);
            }}>그림보기기</button>
            <button onClick={() => {
                set화면(2);
            }}>테스트 보기</button>
            <h3>REF로 화면 전환</h3>
            <button onClick={() => {
                화면2.current = 1;
            }}>그림림 보기ref</button>
            <button onClick={() => {
                화면2.current = 2;
            }}>테스트 보기ref</button>
            {화면 === 1 && <div>
                <img src={img1} alt="동물" />
                </div>}
            {화면 === 2 && <div>
                <h1>Hello World</h1>
                </div>}

            {화면2.current === 1 && <div>
                <img src={img1} alt="동물" />
                </div>}
            {화면2.current === 2 && <div>
                <h1>Hello World</h1>
                </div>}
        </div>
    )
}