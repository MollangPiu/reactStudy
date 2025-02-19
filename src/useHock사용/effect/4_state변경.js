import { useState, useEffect } from 'react';
export default function Effect3() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        alert('마운트 됨');

        console.log('count1: ', count);

        return () => {
            alert('언마운트 됨');
            console.log('count2: ', count);
        }
    }, [count]);
    return (
        <div>
            <h1>Effect4</h1>
            <button onClick={() => setCount(count + 1)}>클릭</button>
            <p>count: {count}</p>
        </div>
    )
}