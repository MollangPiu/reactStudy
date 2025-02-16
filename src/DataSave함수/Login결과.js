import { useLocation, useNavigate } from 'react-router-dom';

export default function 로그인출력() {
    const location = useLocation();
    const { u, p } = location.state; // state로부터 u와 p를 추출
    const navigate = useNavigate();

    return (
        <div>
            <h1>로그인 결과</h1>
            <p>아이디: {u}</p>
            <p>비밀번호: {p}</p>
            <button onClick={() => navigate('/localLogin')}>
                로그인 화면으로 돌아가기
            </button>
        </div>
    );
}
