import { useState, useEffect } from 'react';
export default function Effect3() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        alert('마운트 됨');

        return () => {
            alert('언마운트 됨');
        }
    }, [count]);
    return (
        <div>
            <h1>Effect3</h1>
            <button onClick={() => setCount(count + 1)}>클릭</button>
            <p>count: {count}</p>
        </div>
    )
}
