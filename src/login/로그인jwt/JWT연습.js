import axios from 'axios';
import { useState } from 'react';

export default function JwtStudy() {
    const [jwt, setJwt] = useState('');

    return (
        <div>
            <h1>로그인</h1>

            <span>{jwt}</span>
            <input type="text" value={jwt} onChange={e => setJwt(e.target.value)} />

            <h3>기능</h3>
            <input type="button" value="로그인" onClick={() => {
                const obj = { id: 'test', name: '홍길동' };

                axios.get('http://localhost:8080/api/jwt/regist', {params: obj}, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(res => {
                    console.log(res.data);
                    setJwt(res.data.data.JWT);
                });
            }} />

            <input type="button" value="JWT 체크" onClick={() => {
                axios.get('http://localhost:8080/api/jwt/check', {
                    params: { jwt: jwt }},
                    {headers: {
                        'Content-Type': 'application/json'
                    }}).then(res => {
                    console.log(res.data);
                });
            }} />
        </div>
    )
}