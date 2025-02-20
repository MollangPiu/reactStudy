import { useEffect } from 'react';
export default function Effect3() {
    useEffect(() => {
        alert('마운트 됨');

        return () => {
            alert('언마운트 됨');
        }
    }, []);
    return (
        <div>
            <h1>Effect3</h1>
        </div>
    )
}
