import './Login활용.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
    const navigate = useNavigate();
    const [u, setU] = useState('');
    const [p, setP] = useState('');

    const handleLogin = (event) => {
        event.preventDefault(); // 기본 form 제출 동작 방지
        navigate('/localLoginResult', {state: {u, p}}); // 상태와 함께 네비게이트
    }

    return (
        <div className="local-login-body">
            <div className="login">
                <h1 style={{ marginBottom: '20px' }}>Login</h1>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        name="u"
                        placeholder="Username"
                        required="required"
                        onChange={(e) => setU(e.target.value)}
                    />
                    <input
                        type="password"
                        name="p"
                        placeholder="Password"
                        required="required"
                        onChange={(e) => setP(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary btn-block btn-large">
                        Let me in.
                    </button>
                </form>
            </div>
        </div>
    );
}
