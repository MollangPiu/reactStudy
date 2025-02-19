import { useState, useEffect } from 'react';

export default function Effect4() {
    const [커피1, set커피1] = useState(0);
    const [커피2, set커피2] = useState(0);
    const [커피3, set커피3] = useState(0);
    const [총액, set총액] = useState(0);

    const 커피가격1 = 1500;
    const 커피가격2 = 2000;
    const 커피가격3 = 2500;

    useEffect(() => {
        console.log('커피1 변경!');
        set총액(커피1 * 커피가격1 + 커피2 * 커피가격2 + 커피3 * 커피가격3);
    }, [커피1, 커피2, 커피3]);
    return (
        <div>
            <h1>Effect4</h1>
            <p>커피1: {커피1}</p><input type='button' value='커피1 증가' onClick={() => set커피1(커피1 + 1)}/>
            <p>커피2: {커피2}</p><input type='button' value='커피2 증가' onClick={() => set커피2(커피2 + 1)}/>
            <p>커피3: {커피3}</p><input type='button' value='커피3 증가' onClick={() => set커피3(커피3 + 1)}/>
            <p>총액: {커피1 * 커피가격1 + 커피2 * 커피가격2 + 커피3 * 커피가격3}</p>
            <p>총액: {총액}</p>
        </div>
    )
}
