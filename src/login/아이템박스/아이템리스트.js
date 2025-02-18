export default function 아이템리스트({list, onHandlerGoodUp}) {
    return (
        <div>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
            }}>
                {list.map(item => (
                    <div key={item.itemIdx}
                        style={{
                        boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.4)',
                        borderRadius: '2px',
                        width: '300px',
                        height: '150px',
                        padding: '15px'
                    }}>
                        <div style={{
                            fontSize: '25px',
                            fontWeight: 'bold',
                        }}>
                            {item.name}
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
                            cursor: 'pointer',
                        }} onClick={()=> onHandlerGoodUp(item.itemIdx)}>
                            👍좋아요 {item.good}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}
