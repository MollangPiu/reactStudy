import { useReducer } from "react";

function coffeStat(name, cnt) {
    return {'name': name,
            'count': cnt
    }
}

function reducer(oldStat, action) {
    console.log('action: ', action);


    return oldStat.map(item => {
        if(item.name === action.name) {
            if(action.action === 'up') {
                return {...item, count: item.count+1};
            }
            else if(action.action === 'down')
                return {...item, count: item.count-1};
        }
        return item;
    });


}

function Study() {

    const [메뉴, 메뉴변경] = useReducer(reducer, [coffeStat('아메리카노', 0), coffeStat('아이스티', 0)]);


    function menuUp(obj) {
        console.log(obj);
        obj.action = 'up';
        메뉴변경(obj);
    }

    function menuDown(obj) {
        
        //메뉴 검색하기
        메뉴.map(item => {
            if(item.name === obj.name) {
                if(item.count > 0) {
                    obj.action = 'down';
                    메뉴변경(obj);
                }
            }
        });

    }

    return (
        <div>
            <h1>카페</h1>
            <table className="mainTable">
                <thead>
                    <tr>
                        <td>주문 번호</td>
                        <td>메뉴 이름</td>
                        <td>주문 갯수</td>
                        <td>기능</td>
                    </tr>
                </thead>
                <tbody>
                    {메뉴.map((m, index) =>  (
                        
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{m.name}</td>
                            <td>{m.count}</td>
                            <td>
                                <input type='button' value='증가' onClick={e=> {
                                    menuUp(m);
                                }}></input>
                                <input type='button' value='감소' onClick={e => {
                                    menuDown(m);
                                }}></input>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default Study;