import { useState, useEffect } from 'react';

export default function Effect2() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('count 변경!');
    }, [count]);

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
            <h1>Effect2</h1>
            <button onClick={() => setCount(count + 1)}>클릭</button>
            <p>count: {count}</p>
            {count > 0 && <p style={{color: 'red', fontSize: '20px', fontWeight: 'bold'}}>F12, console 창에서 확인</p>}
        </div>
    )
}
