import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function Input입력() {
    const [입력, set입력] = useState('');
    const dis = useDispatch();

    return (
        <div style={{border: '3px solid red', padding: '10px'}}>
            <input type="text" onChange={e=>set입력(e.target.value)} />
                <input type="button" value="저장" onClick={
                    () => {
                        dis({input: 입력, type: 'INSERT'});
                    }
            }/>
        </div>
    )
}
