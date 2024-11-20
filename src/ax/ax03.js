import React, {useState, useEffect} from 'react';
import { areaList, areaRegist } from './apiService';

function Study() {

    const [areas, setAreas ] = useState([]);
    const [지역이름, 새로운이름] = useState();

    //1번
    const regist = () => {
        console.log('regist');
        const obj = { areaName: 지역이름};
        console.log('obj: ', obj);

        //regist axios 동작
        areaRegist(obj)
        .then(res => {
            console.log('success');
            새로운이름('');
            return areaList();
        })
        .then(res => {
            setAreas(res.data.data);
        })

    }



    useEffect(() => {
        console.log('effect');
        areaList()
        .then(response => {
            setAreas(response.data.data);
            console.log(response.data.data);
        })
        .catch(error => {
        console.error('Error fetching areas:', error);
        });
    }, []);


    return(
        <div>
            {/* <input type='button' value='api AreaList' onClick={areaList2} /> */}
            <input type='text' id='areaName' placeholder='areaName' value={지역이름} onChange={e=> {
                e.preventDefault();
                새로운이름(e.target.value);
            }}/>
            <input type='button' value='등록' onClick={regist}/>
            <h4>Area List</h4>
            {areas.map(area => (
                <div key={area.idx}>{area.areaName}</div>
            ))}
        </div>
    )
}

export default Study;