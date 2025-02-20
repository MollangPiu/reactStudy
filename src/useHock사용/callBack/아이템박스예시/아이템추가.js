import { apiItemRegist } from './api정보';
import { useRef } from 'react';

export default function 아이템추가({onHandlerRegist}) {

    const nameRef = useRef(null);
    const priceRef = useRef(null);
    const categoryRef = useRef(null);

    const onHandlerSubmit = async () => {
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const categoryId = categoryRef.current.value;
        const res = await apiItemRegist({name, price, categoryId});

        nameRef.current.value = '';
        priceRef.current.value = '';
        categoryRef.current.value = '';
        onHandlerRegist();
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '20px',
        }}>
                <input style={{
                    width: '200px',
                    height: '30px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    padding: '5px',
                    marginRight: '10px',
                }} type="text" placeholder="이름" ref={nameRef} />
            <input style={{
                    width: '200px',
                    height: '30px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    padding: '5px',
                    marginRight: '10px',
                }} type="text" placeholder="가격" ref={priceRef} />
            <select style={{
                    width: '200px',
                    height: '30px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    padding: '5px',
                    marginRight: '10px',
                }}
                ref={categoryRef}
                >
                    <option value="1">도서</option>
                    <option value="2">전자</option>
                    <option value="3">생활</option>
                </select>
            <input 
                style={{
                    width: '100px',
                    height: '30px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    padding: '5px',
                    marginRight: '10px',
                    cursor: 'pointer',
                }}
                type="button" value="추가" onClick={onHandlerSubmit} />
        </div>
    )
}
