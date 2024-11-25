import { useState } from 'react';
import foo from '../data/food.json';

export default function Filter() {
    const food = foo.food;

    const [foodList, setFoodList] = useState(food);

    function handleClick(e) {
        console.log(e.target.value);
        if(e.target.value === '전체') {
            setFoodList(food);
        } else {
                setFoodList(food.filter(item => 
                    (
                item.category === e.target.value
            )))
        }
    }

    function styleColor(category) {
        if(category === '한식') {
            return 'blue';
        } else if(category === '양식') {
            return 'green';
        } else if(category === '중식') {
            return 'red';
        } else {
            return 'white';
        }
    }

    const buttonStyle = {
        margin: '10px',
        padding: '10px',
        border: '1px solid black',
        borderRadius: '10px',
        backgroundColor: 'white',
        color: 'black',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
    }


    return (
        <div>
            <input type='button' value='전체' onClick={handleClick} style={buttonStyle} />
            <input type='button' value='한식' onClick={handleClick} style={buttonStyle} />
            <input type='button' value='양식' onClick={handleClick} style={buttonStyle} />
            <input type='button' value='중식' onClick={handleClick} style={buttonStyle} />
            <table className='mainTable'>
                <tr>
                    <td>번호</td>
                    <td>음식</td>
                    <td>카테고리</td>
                </tr>
            
            {foodList.map(item => (
                <tr key={item.id}
                    style={
                     {backgroundColor: styleColor(item.category)}

                     }
                >
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                </tr>
            ))}
            </table>
        </div>
    )
}
