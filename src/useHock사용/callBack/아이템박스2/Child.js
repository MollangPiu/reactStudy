import { useEffect } from 'react';

export default function Child({ 아이템 }) {

    const getItem = () => {
        console.log('아이템 가져오기');
    }



    return (
        <div>
            <h1>Child</h1>
            <h2>{아이템}</h2> // 함수가 아닌 아이템 값 자체를 출력
        </div>
    );
}
