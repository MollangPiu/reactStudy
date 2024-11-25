import { useState } from 'react';

function SelectBox() {
    const [city, setCity] = useState('');

    function changeCity(e) {
        setCity(e.target.value);
    }


    return (
        <div>
            <h1>SelectBox</h1>
            <span style={{color: 'red', fontSize: '20px',
                marginRight: '10px',
                fontWeight: 'bold',
            }}>선택 된 도시:</span>
            <span style={{color: 'blue', fontSize: '20px',
                fontWeight: 'bold',
            }}>{city}</span><br/>
            
            <select onChange={changeCity}>
                <option value=''>선택하세요</option>
                <option value='서울'>서울</option>
                <option value='부산'>부산</option>
                <option value='제주'>제주</option>
            </select>
        </div>
    )
}

export default SelectBox;
