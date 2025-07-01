import { useSelector } from 'react-redux';

export default function Output() {
    // Redux 상태 가져오기
    const users = useSelector(state => state.user.users);
    const auth = useSelector(state => state.auth);

    return (
        <div style={{ border: '3px solid blue', padding: '20px', margin: '10px' }}>
            <h2>Redux 상태 출력</h2>
            
            {/* 사용자 목록 */}
            <div style={{ border: '1px solid blue', padding: '10px', margin: '10px' }}>
                <h3>사용자 목록 ({users.length}명)</h3>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            {user.name} ({user.age}세)
                        </li>
                    ))}
                </ul>
            </div>

            {/* 로그인 상태 */}
            <div style={{ border: '1px solid orange', padding: '10px', margin: '10px' }}>
                <h3>로그인 상태</h3>
                <p>상태: {auth.isLogin ? '로그인됨' : '로그아웃됨'}</p>
                {auth.isLogin && <p>사용자: {auth.username}</p>}
            </div>
        </div>
    );
}
