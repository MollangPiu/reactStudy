import { useReducer, useState } from "react";


function reducer(oldValue, action) {
    console.log(oldValue, action);

    if(action.type === 'add') {
        return [...oldValue, {
            name: action.name,
            age: action.age
        }];
    } else if(action.type === 'delete') {
        return oldValue.filter((item, index) => index !== action.index);
    } else if(action.type === 'update') {
        return oldValue.map((item, index) => index === action.index ? 
        {...item, name: action.name, age: action.age} : item);
    }
}


function Study() {

    
    const 초기값 = [{name: '홍길동', age: 20}, {name: '김길동', age: 30}];
    const [리스트, 변경리스트] = useReducer(reducer, 초기값);
    const [이름, 변경이름] = useState('');
    const [나이, 변경나이] = useState('');

    

    return (
        <div>
            <h1>Reduce4</h1>

            <h3>리스트 추가</h3>
            <input type='text' value={이름} placeholder='이름' onChange={e=>변경이름(e.target.value)} />
            <input type='text' value={나이} placeholder='나이' onChange={e=>변경나이(e.target.value)} />
            <input type='button' value='추가' onClick={e=> {
                변경리스트({name: 이름, age: 나이, type: 'add'})
                변경이름('');
                변경나이('');
            }} />

            <h3>리스트 출력</h3>
            <table style={{width: '100%', border: '1px solid black', borderCollapse: 'collapse'}}>
                <thead>
                <tr>
                    <th style={{border: '1px solid black', padding: '5px'}}>이름</th>
                    <th style={{border: '1px solid black', padding: '5px'}}>나이</th>
                    <th style={{border: '1px solid black', padding: '5px'}}>기능</th>
                </tr>
                </thead>
                <tbody>
            {리스트.map((item, index) => {
                return <tr key={index}>
                    <td style={{border: '1px solid black', padding: '5px'}}>{item.name}</td>
                    <td style={{border: '1px solid black', padding: '5px'}}>{item.age}</td>
                    <td style={{border: '1px solid black', padding: '5px'}}>
                        <input type='button' value='삭제' onClick={e=>변경리스트({type: 'delete', index: index})} />
                        <input type='button' value='수정' onClick={e=>변경리스트({type: 'update', index: index,
                            name: 이름, age: 나이
                        })} />
                    </td>
                </tr>
            })}
            </tbody>
            </table>
        </div>
    );
}

export default Study;