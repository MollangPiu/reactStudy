import React, {useState} from 'react'

function Study() {

    const [장바구니, 변경장바구니] = useState(
        [
            {title: '사과', price: 1500, good: 0},
            {title: '바나나', price: 5300, good: 0},
            {title: '멜론', price: 12500, good: 0},
        ]
    )

    return (
        <div>
            <Main data={장바구니} onStatus={ val=> {
                console.log(val);
                변경장바구니(val);
            }
            }/>
        </div>
    )
}

function Main(props) {

    console.log(props);
    let baskets = props.data;
    let list = []; //결과
    baskets.forEach( (element, idx) => {
        list.push(
            <div key={idx} style={{width: '500px', padding: '15px', border: '1px solid #000'}}>
                <div><div>
                <span style={{fontSize: '20px', fontWeight: 'bold'}}>상품 명: </span>
                <span style={{fontSize: '18px', fontWeight: 'bold', color: 'blue'}}>{element.title}</span></div>
                <div style={{marginTop: '30px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <div>
                        <span>가격: </span>
                        <span>{element.price}</span>
                    </div>
                    <div>
                        <input
                            style={{
                                margin: '5px',
                                padding: '5px',
                                fontSize: '15px',
                                fontWeight: 'bold',
                                backgroundColor: '#B3D8A8',
                                cursor: 'pointer'
                            }}
                            type="button"
                            value="구입하기" />
                        <span style={{cursor: 'pointer'}} onClick={
                            e=> {
                                let chgList = [...props.data];
                                chgList[idx].good++;
                                console.log(chgList[idx].good);
                                props.onStatus(chgList);
                            }
                        }>👍</span>
                        <span>{element.good}</span>
                    </div>
                </div>
                </div>
                
            </div>

        )
    });


    return (
        <div>
            {list}
        </div>
    )
}

export default Study;