import { useState, useRef } from 'react';

export default function 학생성적() {
    const [학생, set학생] = useState([
        {이름: '홍길동', 국어: 100, 영어: 90, 수학: 80},
        {이름: '이순신', 국어: 90, 영어: 80, 수학: 70},
        {이름: '임꺽정', 국어: 80, 영어: 70, 수학: 60},
    ]);


    return (
        <div>
            <h1>학생성적</h1>
            

            <학생성적_입력 학생={학생} set학생={set학생}/>
            <학생성적_출력 학생={학생}/>
        </div>
    )
}

function 학생성적_입력({학생, set학생}) {
    
    const 이름 = useRef('');
    const 국어 = useRef(0);
    const 영어 = useRef(0);
    const 수학 = useRef(0);
    
    return (
        <div style={{
            border: '3px solid blue',
            height: '100px',
            padding: '20px'
        }}>
            <h3 style={{
                marginBottom: '10px'
            }}>입력</h3>
            <input type="text" placeholder="이름" ref={이름} />
            <input type="number" placeholder="국어" ref={국어} />
            <input type="number" placeholder="영어" ref={영어} />
            <input type="number" placeholder="수학" ref={수학} />
            <button onClick={() => {
                set학생([...학생, {이름: 이름.current.value, 국어: 국어.current.value, 영어: 영어.current.value, 수학: 수학.current.value}]);
            }}  >추가</button>
        </div>
    )
}

function 학생성적_출력({학생}) {
    return (
        <div style={{
            border: '3px solid green',
            padding: '20px'
        }}>
            <h3 style={{
                marginBottom: '10px'
            }}>리스트</h3>
            <table
                style={{
                    width: '100%',
                    border: '2px solid black',
                    borderCollapse: 'collapse',
                }}
            >
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>국어</th>
                        <th>영어</th>
                        <th>수학</th>
                    </tr>
                </thead>
                <tbody>
                    {학생.map((학생, index) => (
                        <tr key={index}>
                            <td>{학생.이름}</td>
                            <td>{학생.국어}</td>
                            <td>{학생.영어}</td>
                            <td>{학생.수학}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}
