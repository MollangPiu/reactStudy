import { useState } from 'react';
import hob from '../data/hobby.json'

function Radio() {

    const [hobby, setHobby] = useState('');

    function changeHobby(e) {
        setHobby(e.target.value);
    }

    return (
        <div>

            <h1>Radio</h1>
            <span style={{color: 'red',
                fontSize: '20px',
                marginRight: '10px',
                fontWeight: 'bold',
            }}>선택 된 취미:</span>
            <span
                style={{
                    color: 'blue',
                    fontSize: '20px',
                    fontWeight: 'bold'}}>
            {hobby}
            </span><br/>
            <input type='radio' name='hobby' value='영화' onChange={changeHobby} />영화
            <input type='radio' name='hobby' value='음악' onChange={changeHobby} />음악
            <input type='radio' name='hobby' value='독서' onChange={changeHobby} />독서
            <input type='radio' name='hobby' value='여자' onChange={changeHobby} />여자
        </div>
    )
}

export default Radio;
