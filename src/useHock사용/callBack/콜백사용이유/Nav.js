import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div>
            <Link style={{
                padding: '20px',
                margin: '20px'
            }} to='/callback1'>콜백사용안함</Link>
            <Link style={{
                
            }} to='/callback2'>콜백사용</Link>
        </div>
    );
}
