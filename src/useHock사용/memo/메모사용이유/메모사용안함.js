import { useState } from 'react';
import Nav from './Nav';

export default function 메모사용안함() {

    const [쉬운count, set쉬운count] = useState(0);
    const [어려운count, set어려운count] = useState(0);

    const 쉬운count함수 = () => {
        console.log('쉬운count함수 호출');
        return 쉬운count;
    }

    const 어려운count함수 = () => {
        for(var i =0; i < 1000000000; i++) {
        }
        console.log('어려운count함수 호출');
        return 어려운count;
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh'
        }}>
            <Nav />
            <h1 style={{
                color: 'red'
            }}>메모사용안함</h1>

            <button onClick={() => set쉬운count(쉬운count + 1)}>쉬운Count 증가</button>
            <button onClick={() => set어려운count(어려운count + 1)}>어려운Count 증가</button>


            <span style={{
                marginRight: '10px',
                fontSize: '30px', 
                fontWeight: 'bold',
                color: 'green'

            }}>쉬운Count:</span>
            <span style={{
                fontSize: '30px',
                fontWeight: 'bold',
                color: 'green'
            }}>{쉬운count함수()}</span><br/>
            <span
                style={{
                    marginRight: '10px',
                    fontSize: '30px',
                    fontWeight: 'bold',
                    color: 'red'
                }}>어려운Count:</span>
                <span style={{
                    fontSize: '30px',
                    fontWeight: 'bold',
                    color: 'red'
                }}>{어려운count함수()}</span>
        </div>
    );
}
