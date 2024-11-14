import React, {useState} from 'react';
import data from '../data/student.json'

function Study() {
    
    const legion = data.regions; //지역 코드 불러오기
    const [지역, 변경지역] = useState('전체'); //현재 선택 지역 확인하기
    
    const stuList = data.student.filter(s => (지역 !== '전체')? s.region === 지역: true); //지역 찾기

    return (
        <div>
            <h1>Default34</h1>
            <Select data={legion} onRegionChg={val=>{
                변경지역(val);
            }}/>
            <MainList data={stuList} />
        </div>
    )
}

function Select(props) {

    const lists = props.data;

    function btnArea(val) {
        props.onRegionChg(val);
    }

    return (
        <div>
            <div style={{display: 'inline-flex', margin: '5px'}}>
                        <input type="button" value="전체" onClick={e=> {
                            btnArea('전체')
                        }}/>
                    </div>
            {lists.map(region => {
                return(
                    <div key={region.id} style={{display: 'inline-flex', margin: '5px'}}>
                        <input type="button" value={region.name} onClick={e=> {
                            btnArea(region.name)
                        }}/>
                    </div>
                )
            })}
        </div>
    )
}


function MainList(props) {

    let StudentList = props.data;
    return(
        <div>
            <table className='mainTable'>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>나이</th>
                        <th>이메일</th>
                        <th>지역</th>
                    </tr>
                </thead>
                <tbody>
                    {StudentList.map(stu => {
                        return (<tr key={stu.id} ><td>{stu.name}</td>
                        <td>{stu.age}</td>
                        <td>{stu.email}</td>
                        <td>{stu.region}</td>
                        </tr>);
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Study;