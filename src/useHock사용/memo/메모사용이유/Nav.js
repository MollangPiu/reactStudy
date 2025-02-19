import { useNavigate } from 'react-router-dom';

export default function Nav() {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate('/memo1')}>메모사용안함</button>
            <button onClick={() => navigate('/memo2')}>메모사용</button>
        </div>
    );
}
