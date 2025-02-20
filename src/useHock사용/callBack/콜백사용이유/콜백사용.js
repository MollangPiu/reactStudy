import { useState, useCallback } from "react";
import Child from "./Child";
import Nav from "./Nav";

export default function Parent() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log("버튼 클릭!");
    }, []);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: '3px solid red',
                padding: '20px',
                borderRadius: '10px',
                marginBottom: '20px'

            }}>
            <Nav />
            <h1>✅ useCallBack 사용 안함</h1>
            <h2>Count2: {count}</h2>
            <button onClick={() => setCount(count + 1)}>증가</button>
            </div>
            <Child handleClick={handleClick} />
        </div>
    );
}
