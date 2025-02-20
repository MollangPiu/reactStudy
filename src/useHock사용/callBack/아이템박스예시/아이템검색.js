import { useRef } from 'react';

export default function 아이템검색({onHandlerSearch}) {

    const searchRef = useRef(null);

    return (
        <div style={{
            height: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <input style={{
                width: '30%',
                height: '30px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                padding: '5px',
                marginRight: '20px',
                paddingLeft: '10px',
                fontSize: '16px',
                fontWeight: 'bold',
            }}
            type="text" placeholder="검색어를 입력하세요" ref={searchRef}/>
            <button style={{
                width: '5%',
                height: '30px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                padding: '5px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
            }} onClick={() => {
                onHandlerSearch(searchRef.current.value);
                searchRef.current.value = '';
                }}>검색</button>
        </div>
    )
}
