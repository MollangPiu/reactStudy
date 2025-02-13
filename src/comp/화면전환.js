import { useState } from 'react';
import img1 from '../assets/img/animal2.jpeg';

export default function 화면전환() {
    const [화면, set화면] = useState(1);

    return (
        <div>
            <h1>화면전환</h1>
            <button onClick={() => {
                set화면(1);
            }}>그림보기기</button>
            <button onClick={() => {
                set화면(2);
            }}>테스트 보기</button>
            {화면 === 1 && <div>
                <img src={img1} alt="동물" />
                </div>}
            {화면 === 2 && <div>
                <h1>Hello World</h1>
                </div>}
        </div>
    )
}