export default function 아이템디테일({itemDetail, onHandlerClose}) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100vw',
            height: '100vh',
            position: 'absolute',
            top: '0',
            left: '0',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: '1000',
        }}
        onClick={() => onHandlerClose()}>
            <div style={{
                width: '300px',
                height: '300px',
                backgroundColor: 'white',
                borderRadius: '10px',
                padding: '20px',
            }}>
                <div>
                    <span style={{
                        fontSize: '28px',
                        fontWeight: 'bold',
                    }}>{itemDetail.name}</span>
                </div>
                <div style={{
                    marginTop: '5px',
                }}>
                    <span style={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: 'gray',
                    }}>{itemDetail.categoryName}</span>
                </div>
                <div style={{
                    marginTop: '28px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'end',
                    height: '60%',
                }}>
                    <div>
                        <span style={{
                            width: '50%',
                            fontSize: '24px',
                            fontWeight: 'bold',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}>👍 {itemDetail.good}</span>
                    </div>

                    <div style={{
                        width: '50%',
                        display: 'flex',
                        justifyContent: 'end',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}>
                        <span style={{
                            marginRight: '8px',
                            fontSize: '24px',
                            fontWeight: 'bold',
                            color: 'blue',
                        }}>
                            {itemDetail.price}
                        </span>
                        <span style={{
                            fontSize: '20px',
                            fontWeight: 'bold',
                        }}>원</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
