import { useState } from 'react';

export default function 학생성적() {
    const [학생, set학생] = useState([
        {이름: '홍길동', 국어: 100, 영어: 90, 수학: 80},
        {이름: '이순신', 국어: 90, 영어: 80, 수학: 70},
        {이름: '임꺽정', 국어: 80, 영어: 70, 수학: 60},
    ]);
 
    return (
        <div>
            <h1>학생성적</h1>
            <h3>입력</h3>

            <input type="text" placeholder="이름" />
            <input type="number" placeholder="국어" />
            <input type="number" placeholder="영어" />
            <input type="number" placeholder="수학" />
            <button onClick={() => {
                set학생([...학생, {이름: '홍길동', 국어: 100, 영어: 90, 수학: 80}]);
            }}  >추가</button>


            <h3>리스트</h3>
            <table>
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
