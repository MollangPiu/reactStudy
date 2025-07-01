import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from './redux/userActions';
import { login, logout } from './redux/authActions';

export default function Input입력() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();

    return (
        <div style={{ border: '3px solid red', padding: '20px', margin: '10px' }}>
            <h3>Redux 데이터 입력</h3>
            
            {/* 사용자 추가 */}
            <div style={{ border: '1px solid blue', padding: '10px', margin: '10px' }}>
                <h4>사용자 추가</h4>
                <input 
                    type="text" 
                    placeholder="이름" 
                    value={name}
                    onChange={e => setName(e.target.value)} 
                />
                <input 
                    type="number" 
                    placeholder="나이" 
                    value={age}
                    onChange={e => setAge(e.target.value)} 
                />
                <button onClick={() => {
                    dispatch(addUser(name, age));
                    setName('');
                    setAge('');
                }}>사용자 추가</button>
            </div>

            {/* 로그인/로그아웃 */}
            <div style={{ border: '1px solid orange', padding: '10px', margin: '10px' }}>
                <h4>로그인</h4>
                <input 
                    type="text" 
                    placeholder="사용자명" 
                    value={username}
                    onChange={e => setUsername(e.target.value)} 
                />
                <button onClick={() => {
                    dispatch(login(username));
                    setUsername('');
                }}>로그인</button>
                <button onClick={() => dispatch(logout())}>로그아웃</button>
            </div>
        </div>
    );
}
