import { useState, useEffect } from "react";

function Eff4() {

    const [sta, setSta] = useState([{name:'짜장면', price:5000, cnt:0}, {name:'짬뽕', price:6000, cnt:0}, {name:'탕수육', price:7000, cnt:0}]);

    const [total, setTotal] = useState(0);

    useEffect(()=> {
        console.log('useEffect');
        // 총액 계산
        let tot = 0;
        sta.forEach(item => {
            tot += item.price * item.cnt;
        });
        setTotal(tot);
    }, [sta]);

    return (
        <div>
            <h1>Eff4</h1>
            {sta.map((item, index) => ( <div key={index}>{item.name} : {item.price} : {item.cnt}
                <input type='button' value='증가' onClick={() => {
                    const newSta = [...sta];
                    newSta[index] = { ...newSta[index], cnt: newSta[index].cnt + 1 };
                    setSta(newSta);
                }}/>
                </div>
            ))}
            <h2>총액 : {total}</h2>
        </div>
    )
}

export default Eff4;