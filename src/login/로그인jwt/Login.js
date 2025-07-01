import axios from 'axios';
import { useState } from 'react';

export default function LoginJwt() {
    const [jwt, setJwt] = useState('');


    const [id, setId] = useState('');
    const [userPw, setUserPw] = useState('');

    return (
        <div>
            <h1>로그인</h1>

            <span>{jwt}</span><br/>
            <input type="text" value={jwt} onChange={e => setJwt(e.target.value)} />

            <h3>기능</h3>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <input type="text" value={userPw} onChange={e => setUserPw(e.target.value)} />


            <input type="button" value="로그인" onClick={() => {
                const obj = { userId: id, userPw: userPw };

                axios.post('http://localhost:8080/api/jwt/login', JSON.stringify(obj), {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(res => {
                    console.log(res.data);
                   setJwt(res.data.signature);

                }).catch(err => {
                    console.log(err);
                });
            }} />

            <input type="button" value="쿠키 체크" onClick={() => {
                axios.post('http://localhost:8080/api/jwt/action', JSON.stringify({action: 'check'}), {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${jwt}`
                    }
                }).then(res => {
                    console.log(res.data);
                });
            }} />
        </div>
    )
}