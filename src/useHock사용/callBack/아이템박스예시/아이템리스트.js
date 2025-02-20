import React from 'react';

function 아이템리스트({item, onHandlerGoodUp, onHandlerItemDetail}) {

    const test = () => {
        setTimeout(() => {
            console.log("🔄 1초 뒤, 아이템리스트 렌더링");
            return 0;
        }, 2000);
    }

    const test2 = () => {
        return 1;
    }

    return (
            <div key={item.itemIdx}
                style={{
                boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.4)',
                borderRadius: '2px',
                width: '300px',
                height: '150px',
                padding: '15px',
                cursor: 'pointer',
            }}
                onClick={() => onHandlerItemDetail(item.itemIdx)}
            >
                <div style={{
                    fontSize: '25px',
                    fontWeight: 'bold',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                }}>
                    {item.name} / {test()} / {test2()}
                </div>
                <div style={{
                    marginTop: '10px',
                    fontSize: '20px',
                    fontWeight: 'bold',
                }}>{item.price}원</div>
                <div style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    marginTop: '30px',
                    zIndex: '100',
                    cursor: 'pointer',
                }} onClick={e=> {
                    e.stopPropagation();    //상위 event 전파 방지
                    onHandlerGoodUp(item.itemIdx)}}>
                    👍좋아요 {item.good}
                </div>
            </div>
    )
}

export default React.memo(아이템리스트);