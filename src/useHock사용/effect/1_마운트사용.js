import { useEffect } from 'react';

export default function 마운트사용() {

    useEffect(() => {
        alert('마운트 됨');
    }, []);

    return (
        <div>
            <h1>마운트사용</h1>
            <h1> Hello World</h1>
        </div>
    )
}
