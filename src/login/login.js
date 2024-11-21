import React, { useState } from 'react';
import { login } from './axios';

function Login() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
    };

    const inputStyle = {
        margin: '10px 0',
        padding: '10px',
        width: '200px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    };

    const buttonStyle = {
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#007BFF',
        color: 'white',
        cursor: 'pointer',
    };

    /** 로그인 기능 */
    const onLogin = () => {
        setId('');
        setPassword('');

        login({userId: id, userPw: password}).then(res => {
            console.log(res);
        });
    };

    return (
        <div style={containerStyle}>
            <h1>로그인</h1>
            <input 
                type="text" 
                placeholder="아이디" 
                value={id} 
                onChange={e => setId(e.target.value)} 
                style={inputStyle}
            />
            <input 
                type="password" 
                placeholder="비밀번호" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                style={inputStyle}
            />
            <button onClick={onLogin} style={buttonStyle}>로그인</button>
            <button onClick={() => {
                window.location.href = '/signup';
            }} style={buttonStyle}>회원가입</button>
        </div>
    );
}

export default Login;
