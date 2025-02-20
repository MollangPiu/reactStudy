import { useState, useEffect } from "react";

function Study() {

    const [food, setFood] = useState('');
    useEffect(() => {
        console.log('food 변경됨');
    }, []);

    // 초기화 함수
    const onReset = () => {
        setFood('');
    };
    
    return (
        <div>
            <h1>좋아하는 음식</h1>
            <span>{food}</span><br/>
            <input type="text" placeholder="좋아하는 음식" value={food} onChange={e => {
                setFood(e.target.value);
            }}></input>

            <button onClick={() => {
                if (food.trim() !== '') {
                    const foodElement = document.createElement('div');
                    foodElement.textContent = food;
                    document.querySelector('h1').insertAdjacentElement('afterend', foodElement);
                    setFood('');
                }
            }}>추가</button>
            <button onClick={onReset}>초기화</button>
        </div>
    )
}

export default Study;