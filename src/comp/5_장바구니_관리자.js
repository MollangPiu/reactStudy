import React, {useState} from 'react'

function Study() {

    const [장바구니, 변경장바구니] = useState(
        [
            {title: '사과', price: 1500, good: 0},
            {title: '바나나', price: 5300, good: 0},
            {title: '멜론', price: 12500, good: 0},
        ]
    )

    const [화면, set화면] = useState('user');
    const [주문내용, set주문내용] = useState([]);

    return (
        <div
            style={{marginTop: '30px'}}
        >
            

            <input type="button" value="사용자 화면" onClick={()=>set화면('user')} />
            <input type="button" value="관리자 화면" onClick={()=>set화면('admin')}/>
            {화면 === 'user' && <User data={장바구니} onStatus={ val=> {
                console.log(val);
                변경장바구니(val);
                }
            }
            handlerOrder={
                val => {
                    set주문내용([...주문내용, val]);
                }
            }
            />}
            {화면 === 'admin' && <Admin
                data={주문내용}
            />}
        </div>
    )
}

function Admin({data}) {
    return (
        <div>
            <h1>관리자 화면</h1>

            <h3>주문 내용</h3>
            {data.map(item => (
                <div>
                    {item.title}
                </div>
            ))}

        </div>
    )
}

function User(props) {

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
                            value="구입하기"
                            onClick={e=> {
                                //console.log(element.price);
                                props.handlerOrder(element);
                            }}
                            />
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