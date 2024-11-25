import { useState } from 'react';
import hob from '../data/hobby.json';

function Checkbox2() {

    const [hobbyList, setHobbyList] = useState([]);
    const hobby = hob.hobby;

    function handleChange(e) {
        if(hobbyList.includes(e.target.value)) {
            setHobbyList(hobbyList.filter(item => item !== e.target.value));
        } else {
            setHobbyList([...hobbyList, e.target.value]);
        }
    }

    return (
        <div>
            <h1>취미 고르기</h1>
            {hobby.map((item, index) => (
                <div key={index}>
                <input
                    type='checkbox'
                    value={item.name} checked={hobbyList.includes(item.name)}
                    onChange={handleChange}
                    />
                {item.name}

                </div>
                ))}

                <h1>체크 목록</h1>
                {hobbyList.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
        </div>
    )
}

export default Checkbox2;
